import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import './Sobre3D.css';

const Sobre3D = () => {
  const mountRef = useRef(null);
  const actionsRef = useRef([]);
  const isAnimatingRef = useRef(false);
  const modelRef = useRef(null);
  const [showLetter, setShowLetter] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const cards = [
    "/public/cards/c1.png",
    "/public/cards/c2.png",
    "/public/cards/c3.png"
  ];

  useEffect(() => {
    // Configuración de la escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / 400,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, 465);
    renderer.setClearColor(0xffffff, 1);
    mountRef.current.appendChild(renderer.domElement);

    // Luces
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 23);
    directionalLight.position.set(5, 5, 5);
    directionalLight.target.position.set(0, -3.3, 0);
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x080820, 0.5); // Reducido de 1.0 a 0.5
    scene.add(hemisphereLight);

    // Cargar el modelo GLTF
    let mixer;
    const assetLoader = new GLTFLoader();
    assetLoader.load(
      "/assets/sobre3D.gltf",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.position.set(0, -3.3, 0);
        model.scale.set(2, 1.5, 1.5);

        modelRef.current = model;

        model.traverse((child) => {
          if (child.isMesh) {
            child.material.transparent = false;
            child.material.opacity = 1;

            if (child.material.map) {
              child.material.map.colorSpace = THREE.SRGBColorSpace;
            } else {
              const textureLoader = new THREE.TextureLoader();
              textureLoader.load("/assets/sobreEntero.png", (texture) => {
                texture.flipY = false;
                texture.colorSpace = THREE.SRGBColorSpace;
                child.material.map = texture;
                child.material.needsUpdate = true;
              });
            }
          }
        });

        // Animaciones
        if (gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.play();
            action.paused = true;
            actionsRef.current.push(action);

            action.clampWhenFinished = true;
            action.loop = THREE.LoopOnce;
            action.addEventListener("finished", () => {
              isAnimatingRef.current = false;
              actionsRef.current.forEach((a) => (a.paused = true));
            });
          });
        }
      },
      undefined,
      (error) => {
        console.error("Error al cargar el modelo:", error);
      }
    );

    // Animación
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      if (mixer) {
        mixer.update(clock.getDelta());
      }
      renderer.render(scene, camera);
    };
    animate();

    // Manejo del redimensionamiento de la ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / 400;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 400);
    };
    window.addEventListener("resize", handleResize);

    // Event listener para el clic en el modelo
    const handleClick = (event) => {
      if (!isAnimatingRef.current && modelRef.current) {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / 465) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(modelRef.current, true);

        if (intersects.length > 0) {
          isAnimatingRef.current = true;
          actionsRef.current.forEach((action) => {
            action.paused = false;
            action.time = 0;
          });

          setTimeout(() => setShowLetter(true), 500);
        }
      }
    };

    // Agregar el event listener al renderizador
    renderer.domElement.addEventListener("click", handleClick);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("click", handleClick);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  const handleCardClick = () => {
    if (isSliding) return; // Evita clics múltiples mientras se desliza

    setIsSliding(true);

    setTimeout(() => {
      if (currentCardIndex < cards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        setShowLetter(false);
      }

      setIsSliding(false);
    }, 300); // Reducimos el tiempo de espera para adelantar la próxima carta
  };

  return (
    <div className="container">
      <div ref={mountRef} />

      {showLetter && (
        <div className="letter-container">
          <div className="letter">
            <div className="letter-content">
              {cards.map((card, index) => (
                <img
                  key={index}
                  src={card}
                  alt={`Carta ${index + 1}`}
                  onClick={handleCardClick}
                  className={
                    index === currentCardIndex
                      ? (isSliding ? "sliding" : "active")
                      : "hidden"
                  }
                  style={{
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                    zIndex: index === currentCardIndex ? 1 : 0
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sobre3D;
