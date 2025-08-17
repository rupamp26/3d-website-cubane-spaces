import * as THREE from 'three';

export const initThreeJS = (canvas: HTMLCanvasElement): (() => void) => {
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ 
    canvas, 
    antialias: true, 
    alpha: true 
  });

  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;

  // Create holographic cross like in reference image
  const createHolographicCross = () => {
    const group = new THREE.Group();

    // Create iridescent material with rainbow effect
    const holographicMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 1.0,
      roughness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      iridescence: 1.0,
      iridescenceIOR: 2.333,
      iridescenceThicknessRange: [100, 800],
      transmission: 0.1,
      thickness: 0.5,
      envMapIntensity: 2.0
    });

    // Horizontal bar of the cross
    const horizontalGeometry = new THREE.CylinderGeometry(0.3, 0.3, 3.5, 32);
    const horizontalBar = new THREE.Mesh(horizontalGeometry, holographicMaterial);
    horizontalBar.rotation.z = Math.PI / 2;
    group.add(horizontalBar);

    // Vertical bar of the cross
    const verticalGeometry = new THREE.CylinderGeometry(0.3, 0.3, 3.5, 32);
    const verticalBar = new THREE.Mesh(verticalGeometry, holographicMaterial);
    group.add(verticalBar);

    // Center sphere for connection
    const centerGeometry = new THREE.SphereGeometry(0.4, 32, 32);
    const centerSphere = new THREE.Mesh(centerGeometry, holographicMaterial);
    group.add(centerSphere);

    // Add end caps to make it look more polished
    const capGeometry = new THREE.SphereGeometry(0.32, 16, 16);
    
    // Top cap
    const topCap = new THREE.Mesh(capGeometry, holographicMaterial);
    topCap.position.y = 1.75;
    group.add(topCap);

    // Bottom cap
    const bottomCap = new THREE.Mesh(capGeometry, holographicMaterial);
    bottomCap.position.y = -1.75;
    group.add(bottomCap);

    // Left cap
    const leftCap = new THREE.Mesh(capGeometry, holographicMaterial);
    leftCap.position.x = -1.75;
    group.add(leftCap);

    // Right cap
    const rightCap = new THREE.Mesh(capGeometry, holographicMaterial);
    rightCap.position.x = 1.75;
    group.add(rightCap);

    return group;
  };

  const holographicCross = createHolographicCross();
  scene.add(holographicCross);

  // Enhanced lighting for holographic effect
  const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
  scene.add(ambientLight);

  // Main directional light
  const directionalLight = new THREE.DirectionalLight(0x00E5FF, 1.5);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  // Additional colored lights for rainbow effect
  const light1 = new THREE.PointLight(0xff0080, 0.8, 10);
  light1.position.set(3, 3, 3);
  scene.add(light1);

  const light2 = new THREE.PointLight(0x00ff80, 0.8, 10);
  light2.position.set(-3, -3, 3);
  scene.add(light2);

  const light3 = new THREE.PointLight(0x8000ff, 0.8, 10);
  light3.position.set(3, -3, -3);
  scene.add(light3);

  // Environment map for reflections
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  const envTexture = pmremGenerator.fromScene(scene).texture;
  scene.environment = envTexture;

  // Camera position
  camera.position.set(0, 0, 8);

  // Animation variables
  let time = 0;

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    time += 0.01;
    
    // Smooth rotation on multiple axes like in reference
    holographicCross.rotation.x = Math.sin(time * 0.5) * 0.3;
    holographicCross.rotation.y = time * 0.8;
    holographicCross.rotation.z = Math.cos(time * 0.3) * 0.2;
    
    // Subtle floating animation
    holographicCross.position.y = Math.sin(time * 2) * 0.1;
    
    // Animate lights for dynamic rainbow effect
    light1.position.x = Math.sin(time) * 4;
    light1.position.z = Math.cos(time) * 4;
    
    light2.position.x = Math.cos(time * 1.2) * 4;
    light2.position.z = Math.sin(time * 1.2) * 4;
    
    light3.position.y = Math.sin(time * 0.8) * 3;
    light3.position.z = Math.cos(time * 0.8) * 3;
    
    renderer.render(scene, camera);
  };

  animate();

  // Handle resize
  const handleResize = () => {
    const rect = canvas.getBoundingClientRect();
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
    renderer.setSize(rect.width, rect.height);
  };

  window.addEventListener('resize', handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
    scene.clear();
    renderer.dispose();
    pmremGenerator.dispose();
  };
};