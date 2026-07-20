"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { fuselageNames, meshMap } from "./model-data";

interface InfoPanelState {
  visible: boolean;
  x: number;
  y: number;
  name: string;
  desc: string;
}

export default function RicoModelViewer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const airplaneModelRef = useRef<THREE.Group | null>(null);
  const isXRayModeRef = useRef(false);

  const [isXRayMode, setIsXRayMode] = useState(false);
  const [panel, setPanel] = useState<InfoPanelState>({
    visible: false,
    x: 0,
    y: 0,
    name: "",
    desc: "",
  });

  // Keep a ref in sync so the pointerdown handler (created once) always
  // reads the latest x-ray state, and toggle the fuselage materials.
  useEffect(() => {
    isXRayModeRef.current = isXRayMode;

    const airplaneModel = airplaneModelRef.current;
    if (airplaneModel) {
      airplaneModel.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (mesh.isMesh && fuselageNames.includes(mesh.name)) {
          const material = mesh.material as THREE.MeshStandardMaterial;
          material.transparent = true;
          material.opacity = isXRayMode ? 0.2 : 1.0;
          material.depthWrite = !isXRayMode;
        }
      });
    }
  }, [isXRayMode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(2, 1, 1.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.0);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load("/rico/render2.glb", (gltf) => {
      const airplaneModel = gltf.scene;
      const box = new THREE.Box3().setFromObject(airplaneModel);
      const center = box.getCenter(new THREE.Vector3());
      airplaneModel.position.sub(center);
      scene.add(airplaneModel);
      airplaneModelRef.current = airplaneModel;
    });

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("[data-toggle-view]")) return;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      mouse.x = (x / container.clientWidth) * 2 - 1;
      mouse.y = -(y / container.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const airplaneModel = airplaneModelRef.current;
      if (!airplaneModel) return;

      const intersects = raycaster.intersectObject(airplaneModel, true);

      if (intersects.length > 0) {
        let clickedObjectName: string | null = null;

        for (let i = 0; i < intersects.length; i++) {
          const currentName = intersects[i].object.name;
          if (fuselageNames.includes(currentName) && isXRayModeRef.current) {
            continue;
          }
          clickedObjectName = currentName;
          break;
        }

        if (clickedObjectName && meshMap[clickedObjectName]) {
          const componentData = meshMap[clickedObjectName];
          setPanel({
            visible: true,
            x: x + 15,
            y: y + 15,
            name: componentData.name,
            desc: componentData.desc,
          });
        } else {
          setPanel((p) => ({ ...p, visible: false }));
        }
      } else {
        setPanel((p) => ({ ...p, visible: false }));
      }
    };

    container.addEventListener("pointerdown", handlePointerDown);

    const resizeObserver = new ResizeObserver(() => {
      if (container.clientWidth > 0 && container.clientHeight > 0) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }
    });
    resizeObserver.observe(container);

    let frameId = 0;
    function animate() {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      container.removeEventListener("pointerdown", handlePointerDown);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[600px] w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg [&>canvas]:!block [&>canvas]:!h-full [&>canvas]:!w-full [&>canvas]:outline-none"
    >
      <button
        type="button"
        data-toggle-view=""
        onClick={() => setIsXRayMode((v) => !v)}
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-neutral-800 px-6 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-neutral-600"
      >
        {isXRayMode ? "See Fuselage" : "See internal components"}
      </button>

      {panel.visible && (
        <div
          className="pointer-events-none absolute z-10 w-[280px] rounded-xl border border-black/10 bg-white/85 p-4 shadow-xl backdrop-blur-sm"
          style={{ left: panel.x, top: panel.y }}
        >
          <h2 className="mb-2 border-b-2 border-rose-300 pb-1 text-lg font-semibold text-red-600">
            {panel.name}
          </h2>
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600">
            {panel.desc}
          </p>
        </div>
      )}
    </div>
  );
}
