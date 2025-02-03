import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Sobre3D = () => {
    const mountRef = useRef(null); // Referencia al contenedor del canvas
    const actionsRef = useRef([]); // Referencia para almacenar las acciones de animación
    const isAnimatingRef = useRef(false); // Referencia para controlar el estado de la animación


    useEffect(() => {
        // Configuración de la escena, cámara y renderizador
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / 400, 0.1, 1000);
        camera.position.set(0, 0, 5); // Alejar la cámara
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, 525);
        renderer.setClearColor(0xffffff, 1);
        mountRef.current.appendChild(renderer.domElement);


        // Luces
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 15);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 1, 10);
        pointLight.position.set(2, 2, 2);
        scene.add(pointLight);

        const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
        scene.add(hemisphereLight);

        // Cargar el modelo GLTF
        let mixer;
        const assetLoader = new GLTFLoader();
        assetLoader.load(
            '/assets/sobre3D.gltf',
            (gltf) => {
                const model = gltf.scene;
                scene.add(model);
                model.position.set(0, -3.0, 0);

                model.scale.set(2, 1.5, 1.5);

                // Verificar y corregir materiales
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material.transparent = true;
                        child.material.opacity = 1;
                        child.material.color.set(0xffffff);

                        // Si las texturas no se cargan automáticamente, asignarlas manualmente
                        if (!child.material.map) {
                            const textureLoader = new THREE.TextureLoader();
                            textureLoader.load('/assets/sobreEntero.png', (texture) => {
                                texture.flipY = false; // Corregir orientación de la textura
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
                        action.paused = true; // Pausar la animación al inicio
                        actionsRef.current.push(action); // Almacenar la acción en la referencia

                        // Configurar la animación para que se pause al finalizar
                        action.clampWhenFinished = true; // Evita que la animación se reinicie
                        action.loop = THREE.LoopOnce; // Reproducir la animación solo una vez
                        action.addEventListener('finished', () => {
                            isAnimatingRef.current = false; // Desactivar el estado de animación
                            actionsRef.current.forEach((a) => (a.paused = true)); // Pausar todas las animaciones
                        });
                    });
                }
            },
            undefined,
            (error) => {
                console.error('Error al cargar el modelo:', error);
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
        window.addEventListener('resize', handleResize);

        // Event listener para el clic
        const handleClick = () => {
            if (!isAnimatingRef.current) {
                isAnimatingRef.current = true; // Activar la animación
                actionsRef.current.forEach((action) => {
                    action.paused = false; // Reanudar la animación
                    action.time = 0; // Reiniciar la animación al principio
                });
            }
        };
        window.addEventListener('click', handleClick);

        // Limpieza al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('click', handleClick);
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} />; // Contenedor para el canvas de Three.js
};

export default Sobre3D;