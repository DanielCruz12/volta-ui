"use client";

import React from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Lightformer,
  Text,
  Html,
  ContactShadows,
  Environment,
} from "@react-three/drei";
import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { easing } from "maath";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center w-full h-screen"
    >
      <div className="h-full w-full flex flex-col justify-center m-auto text-center  ">
        <Canvas
          eventPrefix="client"
          shadows
          camera={{ position: [0, 0, 20], fov: 65 }}
        >
          <color attach="background" args={["black"]} />

          <spotLight
            position={[20, 20, 10]}
            penumbra={1}
            castShadow
            angle={0.2}
          />
          <Status position={[0, 0, -10]} />
          <Float floatIntensity={2}>
            <Knot />
          </Float>

          <ContactShadows
            scale={100}
            position={[0, -7.5, 0]}
            blur={1}
            far={100}
            opacity={0.85}
          />
          <Environment preset="city">
            <Lightformer
              intensity={8}
              position={[10, 5, 0]}
              scale={[10, 50, 1]}
              onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
          </Environment>
          <EffectComposer disableNormalPass>
            <N8AO aoRadius={1} intensity={2} />
            <TiltShift2 blur={0.2} />
          </EffectComposer>

          <Rig />
        </Canvas>
      </div>
    </motion.div>
  );
};

export default HeroContent;

function Rig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        Math.sin(-state.pointer.x) * 5,
        state.pointer.y * 3.5,
        15 + Math.cos(state.pointer.x) * 10,
      ],
      0.2,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

const Knot = (props: any) => <mesh receiveShadow castShadow {...props}></mesh>;

function Status(props: any) {
  const text = "VOLTA TOKEN";
  return (
    <Text fontSize={10} letterSpacing={-0.03} color="white" {...props}>
      {text}
      <Html style={{ color: "transparent", fontSize: "33.5em" }} transform>
        {text}
      </Html>
    </Text>
  );
}
