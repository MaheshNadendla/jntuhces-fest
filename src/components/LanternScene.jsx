// import { useEffect } from "react";

// export default function LanternScene() {
//   useEffect(() => {
//     if (!window.THREE || !window.OrbitControls || !window.BufferGeometryUtils) {
//       console.error("Three.js, OrbitControls, or BufferGeometryUtils is not loaded.");
//       return;
//     }

//     const THREE = window.THREE;
//     const OrbitControls = window.OrbitControls;
//     const BufferGeometryUtils = window.BufferGeometryUtils;

//     let scene = new THREE.Scene();
//     let camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
//     camera.position.set(0, -25, 80);

//     let renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setClearColor(0x181005);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     let controls = new OrbitControls(camera, renderer.domElement);
//     controls.maxDistance = 150;
//     controls.enableDamping = true;

//     // Lanterns
//     let geoms = [];
//     let pts = [
//       new THREE.Vector2(0, 1.0),
//       new THREE.Vector2(0.25, 1.0),
//       new THREE.Vector2(0.25, 0.875),
//       new THREE.Vector2(0.45, 0.875),
//       new THREE.Vector2(0.45, 0.05),
//     ];

//     let geom = new THREE.LatheGeometry(pts, 20);
//     geoms.push(geom);

//     let geomLight = new THREE.CylinderGeometry(0.1, 0.1, 0.05, 20);
//     geoms.push(geomLight);

//     let fullGeom = BufferGeometryUtils.mergeGeometries(geoms);

//     let instGeom = new THREE.InstancedBufferGeometry().copy(fullGeom);

//     let num = 500;
//     let instPos = [];
//     let instSpeed = [];
//     let instLight = [];

//     for (let i = 0; i < num; i++) {
//       instPos.push(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
//       instSpeed.push(Math.random() * 0.25 + 1);
//       instLight.push(Math.PI + Math.PI * Math.random(), Math.random() + 5);
//     }

//     instGeom.setAttribute("instPos", new THREE.InstancedBufferAttribute(new Float32Array(instPos), 3));
//     instGeom.setAttribute("instSpeed", new THREE.InstancedBufferAttribute(new Float32Array(instSpeed), 1));
//     instGeom.setAttribute("instLight", new THREE.InstancedBufferAttribute(new Float32Array(instLight), 2));

//     let mat = new THREE.ShaderMaterial({
//       uniforms: {
//         uTime: { value: 0 },
//         uLight: { value: new THREE.Color("red").multiplyScalar(1.5) },
//         uColor: { value: new THREE.Color("maroon").multiplyScalar(1) },
//         uFire: { value: new THREE.Color(1, 0.75, 0) },
//       },
//       vertexShader: `
//         uniform float uTime;
//         attribute vec3 instPos;
//         attribute float instSpeed;
//         attribute vec2 instLight;
//         varying vec2 vInstLight;
//         varying float vY;

//         void main() {
//           vInstLight = instLight;
//           vY = position.y;

//           vec3 pos = vec3(position) * 2.;
//           vec3 iPos = instPos * 200.;

//           iPos.xz += vec2(
//             cos(instLight.x + instLight.y * uTime),
//             sin(instLight.x + instLight.y * uTime * fract(sin(instLight.x)))
//           );

//           iPos.y = mod(iPos.y + 100. + (uTime * instSpeed), 200.) - 100.;
//           pos += iPos;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//         }
//       `,
//       fragmentShader: `
//         uniform float uTime;
//         uniform vec3 uLight;
//         uniform vec3 uColor;
//         uniform vec3 uFire;
//         varying vec2 vInstLight;
//         varying float vY;

//         void main() {
//           vec3 col = vec3(0);
//           float t = vInstLight.x + (vInstLight.y * uTime * 10.);
//           float ts = sin(t * 3.14) * 0.5 + 0.5;
//           float tc = cos(t * 2.7) * 0.5 + 0.5;
//           float f = smoothstep(0.12, 0.12 + (ts + tc) * 0.25, vY);
//           float li = (0.5 + smoothstep(0., 1., ts * ts + tc * tc) * 0.5);
//           col = mix(uLight * li, uColor * (0.75 + li * 0.25), f);
//           col = mix(col, uFire, step(vY, 0.05) * (0.75 + li * 0.25));
//           gl_FragColor = vec4(col, 1);
//         }
//       `,
//       side: THREE.DoubleSide,
//     });

//     let lantern = new THREE.Mesh(instGeom, mat);
//     scene.add(lantern);

//     // Animation loop
//     function animate() {
//       mat.uniforms.uTime.value += 0.01;
//       controls.update();
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     }
//     animate();

//     // Cleanup on unmount
//     return () => {
//       document.body.removeChild(renderer.domElement);
//     };
//   }, []);

//   return null;
// }




// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
// import { mergeBufferGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

// const LanternScene = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
//     camera.position.set(0, -25, 80);

//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setClearColor(0x181005);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.maxDistance = 150;
//     controls.enableDamping = true;

//     // Lanterns setup
//     let geoms = [];
//     let pts = [
//       new THREE.Vector2(0, 1 - 0),
//       new THREE.Vector2(0.25, 1 - 0),
//       new THREE.Vector2(0.25, 1 - 0.125),
//       new THREE.Vector2(0.45, 1 - 0.125),
//       new THREE.Vector2(0.45, 1 - 0.95),
//     ];
//     let geom = new THREE.LatheGeometry(pts, 20);
//     geoms.push(geom);

//     let geomLight = new THREE.CylinderGeometry(0.1, 0.1, 0.05, 20);
//     geoms.push(geomLight);

//     let fullGeom = mergeBufferGeometries(geoms);
//     let instGeom = new THREE.InstancedBufferGeometry().copy(fullGeom);

//     let num = 500;
//     let instPos = [], instSpeed = [], instLight = [];

//     for (let i = 0; i < num; i++) {
//       instPos.push(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
//       instSpeed.push(Math.random() * 0.25 + 1);
//       instLight.push(Math.PI + Math.PI * Math.random(), Math.random() + 5);
//     }

//     instGeom.setAttribute("instPos", new THREE.InstancedBufferAttribute(new Float32Array(instPos), 3));
//     instGeom.setAttribute("instSpeed", new THREE.InstancedBufferAttribute(new Float32Array(instSpeed), 1));
//     instGeom.setAttribute("instLight", new THREE.InstancedBufferAttribute(new Float32Array(instLight), 2));

//     let mat = new THREE.ShaderMaterial({
//       uniforms: {
//         uTime: { value: 0 },
//         uLight: { value: new THREE.Color("red").multiplyScalar(1.5) },
//         uColor: { value: new THREE.Color("maroon").multiplyScalar(1) },
//         uFire: { value: new THREE.Color(1, 0.75, 0) },
//       },
//       vertexShader: `
//         uniform float uTime;
//         attribute vec3 instPos;
//         attribute float instSpeed;
//         attribute vec2 instLight;
//         varying vec2 vInstLight;
//         varying float vY;
//         void main() {
//           vInstLight = instLight;
//           vY = position.y;
//           vec3 pos = vec3(position) * 2.;
//           vec3 iPos = instPos * 200.;
//           iPos.xz += vec2(
//             cos(instLight.x + instLight.y * uTime),
//             sin(instLight.x + instLight.y * uTime * fract(sin(instLight.x)))
//           );
//           iPos.y = mod(iPos.y + 100. + (uTime * instSpeed), 200.) - 100.;
//           pos += iPos;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
//         }
//       `,
//       fragmentShader: `
//         uniform float uTime;
//         uniform vec3 uLight;
//         uniform vec3 uColor;
//         uniform vec3 uFire;
//         varying vec2 vInstLight;
//         varying float vY;
//         void main() {
//           vec3 col = vec3(0);
//           float t = vInstLight.x + (vInstLight.y * uTime * 10.);
//           float ts = sin(t * 3.14) * 0.5 + 0.5;
//           float tc = cos(t * 2.7) * 0.5 + 0.5;
//           float f = smoothstep(0.12, 0.12 + (ts + tc) * 0.25, vY);
//           float li = (0.5 + smoothstep(0., 1., ts * ts + tc * tc) * 0.5);
//           col = mix(uLight * li, uColor * (0.75 + li * 0.25), f);
//           col = mix(col, uFire, step(vY, 0.05) * (0.75 + li * 0.25));
//           gl_FragColor = vec4(col, 1);
//         }
//       `,
//       side: THREE.DoubleSide,
//     });

//     let lantern = new THREE.Mesh(instGeom, mat);
//     scene.add(lantern);

//     // Koi Fish Loader
//     let loader = new STLLoader();
//     loader.load("https://cywarr.github.io/small-shop/fish.stl", (objGeom) => {
//       objGeom.center();
//       objGeom.rotateX(-Math.PI * 0.5);
//       objGeom.scale(0.5, 0.5, 0.5);
//       let objMat = new THREE.MeshBasicMaterial({ color: "orange", wireframe: true });
//       let objMesh = new THREE.Mesh(objGeom, objMat);
//       scene.add(objMesh);
//     });

//     // Animation loop
//     let clock = new THREE.Clock();
//     const animate = () => {
//       mat.uniforms.uTime.value = clock.getElapsedTime();
//       controls.update();
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };
//     animate();

//     // Cleanup on unmount
//     return () => {
//       if (mountRef.current) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//       scene.clear();
//     };
//   }, []);

//   return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
// };

// export default LanternScene;

// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// function Helmet() {
//   const { scene } = useGLTF("/DamagedHelmet.glb"); // Load model
//   return <primitive object={scene} scale={3} position={[0, -1, 0]} />;
// }

// export default function App() {
//   return (
//     <div style={{ width: "100dvw", height: "100dvh", overflow: "hidden" }}>
//       <Canvas camera={{ position: [0, 2, 5] }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 2, 2]} />
//         <Helmet />
//         <OrbitControls />
//         <Environment files="/royal_esplanade_4k.exr" background /> HDRI
//       </Canvas>
//     </div>
//   );
// }


// Model Credits
// Copyright:
// N/A
// Generated by:
// Khronos Blender glTF 2.0 exporter
// Environment Credits
// Copyright:
// (c) 2024 Greg Zaal, Source, License: CC0-1.0



import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { useEffect, useState } from "react";

function Helmet() {
  const { scene } = useGLTF("/DamagedHelmet.glb");

  // Adjust scale dynamically based on screen size
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const newScale = window.innerWidth < 600 ? 0.5 : 1;
      setScale(newScale);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <primitive object={scene} scale={scale} position={[0, 0.5, 0]} />;
}

export default function App() {
  return (
    <div style={{ width: "100dvw", height: "100dvh", display: "flex",background: "#1e262a",padding:"0px" }}>
      <Canvas
        camera={{ position: [0.5,1.2,1.5] }}
        style={{ width: "100%", height: "100%" ,background: "" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Helmet />
        <OrbitControls />
        <Environment files="/J-S-T.hdr" background rotation={[0, Math.PI * 1.5, 0]} /> 
      </Canvas>
    </div>
  );
}




