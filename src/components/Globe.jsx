import React, { useRef, useEffect } from "react";
import * as THREE from 'three';

const Globe = () => {
    const containerRef = useRef(null);
    let scene, camera, renderer, globe;
  
    useEffect(() => {
      // Scene
      scene = new THREE.Scene();
  
      // Camera
      camera = new THREE.PerspectiveCamera(75, containerRef.current.offsetWidth / containerRef.current.offsetHeight, 0.1, 1000);
      camera.position.z = 5;
  
      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
      containerRef.current.appendChild(renderer.domElement);
  
      // Globe
      const geometry = new THREE.SphereGeometry(2, 32, 32);
      const texture = new THREE.TextureLoader().load('https://i.pinimg.com/736x/cc/74/c6/cc74c6f7329766b98ba9f0050a97679f.jpg'); // Replace with the path to your Earth texture
      const material = new THREE.MeshBasicMaterial({ map: texture });
      globe = new THREE.Mesh(geometry, material);
      scene.add(globe);
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        globe.rotation.y += 0.005; // Adjust the rotation speed as needed
        renderer.render(scene, camera);
      };
  
      animate();
  
      // Clean up
      return () => {
        scene.remove(globe);
        renderer.dispose();
        containerRef.current.removeChild(renderer.domElement);
      };
    }, []);
  
    return <div ref={containerRef} />;
  };
  
  export default Globe;