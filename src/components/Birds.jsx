import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const Birds = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const { clientWidth, clientHeight } = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(clientWidth, clientHeight);
    renderer.setClearColor(0x1e262a);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const particles = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particles * 3);
    const velocities = new Float32Array(particles * 3);

    for (let i = 0; i < particles; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      velocities[i * 3] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const mouse = new THREE.Vector3();
    const handleMouseMove = (event) => {
      const rect = mountRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / clientWidth) * 2 - 1;
      const y = -((event.clientY - rect.top) / clientHeight) * 2 + 1;
      mouse.set(x * 5, y * 5, 0);
    };

    mountRef.current.addEventListener("mousemove", handleMouseMove);

    function animate() {
      requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array;
      const vel = geometry.attributes.velocity.array;

      for (let i = 0; i < particles; i++) {
        const dx = mouse.x - pos[i * 3];
        const dy = mouse.y - pos[i * 3 + 1];
        const dz = mouse.z - pos[i * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < 2) {
          vel[i * 3] += dx * 0.05;
          vel[i * 3 + 1] += dy * 0.05;
          vel[i * 3 + 2] += dz * 0.05;
        }

        pos[i * 3] += vel[i * 3];
        pos[i * 3 + 1] += vel[i * 3 + 1];
        pos[i * 3 + 2] += vel[i * 3 + 2];

        vel[i * 3] *= 0.98;
        vel[i * 3 + 1] *= 0.98;
        vel[i * 3 + 2] *= 0.98;
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      mountRef.current?.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: "33vw", height: "100vh", overflow: "hidden" }} />;
};

export default Birds;
