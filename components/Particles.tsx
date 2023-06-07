"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
export default function ParticlesPage() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          opacity: 0,
          color: {
            value: "rgba(0,0,0, 0)",
          },
        },
        fpsLimit: 120,

        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: false, // Disable links between particles
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false, // Disable particle collisions
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5, // Adjust the speed of particle movement
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          bounce: {
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },

          opacity: {
            value: 1, // Increase opacity for brighter stars
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 }, // Adjust the size range of the particles
          },
          zIndex: {
            value: -1,
            opacityRate: 0,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
