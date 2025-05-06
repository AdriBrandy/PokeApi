import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

const Pokemon = () => {
  const gltf = useGLTF("/models/charizard.glb");
  const { actions } = useAnimations(gltf.animations, gltf.scene);

  useEffect(() => {
    const action = actions.bd_wait00;

    if (action) {
      // Cambia la velocidad (1 = normal, 2 = doble de rápido, 0.5 = más lento)
      action.setLoop(THREE.LoopRepeat); // o LoopOnce, LoopPingPong
      action.timeScale = 0.5; // 🔥 velocidad personalizada
      action.reset().play();
    }
  }, [actions]);
 
  return <primitive object={gltf.scene} scale={3} position={[0, -2, 0]} />
  ;
};



const HeroExperience = () => {
  // eslint-disable-next-line no-unused-vars
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [5, -1, 10], fov: 45 }}>
      <ambientLight intensity={0.5} color="white" />

      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <Pokemon />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
