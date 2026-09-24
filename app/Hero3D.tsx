"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const LinkedInLogo = () => (
  <svg className="social-link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.28 9.88h3.32v9.59H5.28V9.88Zm5.29 0h3.18v1.31h.04c.44-.84 1.52-1.72 3.13-1.72 3.35 0 3.97 2.2 3.97 5.06v5.94h-3.31v-5.57c0-1.33-.03-3.05-1.85-3.05-1.86 0-2.15 1.45-2.15 2.94v5.68H10.57V9.88Z"
      fill="currentColor"
    />
  </svg>
);

export default function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");
    const isMobile = () => mobileMediaQuery.matches;
    const syncInteractionState = () => {
      const desktop = !isMobile();
      canvas.style.touchAction = desktop ? "none" : "pan-y";
      canvas.style.pointerEvents = desktop ? "auto" : "none";
      controls.enabled = desktop;
      controls.enableZoom = false;
      controls.enableRotate = desktop;
      controls.enablePan = false;
      controls.enableDamping = desktop;
      controls.autoRotate = true;
      if (!desktop) {
        controls.autoRotate = true;
        controls.enableRotate = false;
        controls.enableDamping = false;
      }
    };

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfaf8f4, 0.045);

    const FX = 2.4;
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(FX * 0.55, 2.5, 9.5);
    camera.lookAt(FX, 1.5, 0);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = true;
    controls.enableRotate = true;
    controls.enablePan = true;
    controls.minPolarAngle = Math.PI * 0.15;
    controls.maxPolarAngle = Math.PI * 0.72;
    controls.target.set(FX, 1.5, 0);
    syncInteractionState();

    scene.add(new THREE.AmbientLight(0xfff8f2, 1.0));
    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(6, 10, 6);
    key.castShadow = true;
    scene.add(key);
    const fill = new THREE.PointLight(0x8faf90, 3, 22);
    fill.position.set(-6, 3, 5);
    scene.add(fill);
    const rim = new THREE.PointLight(0xf0e080, 1.5, 18);
    rim.position.set(4, -1, 6);
    scene.add(rim);
    const back = new THREE.PointLight(0xc8d8ff, 1.0, 20);
    back.position.set(0, 5, -8);
    scene.add(back);

    // Load the Sketchfab model from /public/models/[...].glb.
    new GLTFLoader().load(
      "/models/lego_flower_bouquet.glb",
      (gltf) => {
        const model = gltf.scene;
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const scale = 4.2 / maxDim;
        model.scale.setScalar(scale);
        const center = new THREE.Vector3();
        box.getCenter(center);
        model.position.sub(center.multiplyScalar(scale));
        model.position.y += 1.4;
        model.traverse((o: any) => {
          if (o.isMesh) {
            o.castShadow = true;
            o.receiveShadow = true;
          }
        });
        scene.add(model);
        model.position.x = FX;

        // NEW: recenter orbit target on the actual model, not the old flower position
        const fittedBox = new THREE.Box3().setFromObject(model);
        const fittedCenter = new THREE.Vector3();
        fittedBox.getCenter(fittedCenter);
        const fittedSize = new THREE.Vector3();
        fittedBox.getSize(fittedSize);
        const fittedMax = Math.max(fittedSize.x, fittedSize.y, fittedSize.z) || 1;

        controls.target.copy(fittedCenter);
        camera.position.set(fittedCenter.x, fittedCenter.y + fittedMax * 0.3, fittedCenter.z + fittedMax * 1.15);
        camera.lookAt(fittedCenter);
        controls.update();
      },
      undefined,
      () => {}
    );

    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ color: 0xf2ede6, roughness: 1 }));
    gnd.rotation.x = -Math.PI / 2;
    gnd.position.y = -3.2;
    gnd.receiveShadow = true;
    scene.add(gnd);

    function resize() {
      if (!hero) return;
      const w = hero.offsetWidth;
      const h = hero.offsetHeight || 600;
      camera.aspect = w / h;
      const horizontalOffset = -Math.min(w * 0.1, 140);
      camera.setViewOffset(w, h, horizontalOffset, 0, w, h);
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    resize();
    window.addEventListener("resize", resize);
    const handleViewportChange = () => syncInteractionState();
    if (typeof mobileMediaQuery.addEventListener === "function") {
      mobileMediaQuery.addEventListener("change", handleViewportChange);
    } else {
      mobileMediaQuery.addListener(handleViewportChange);
    }

    let scrollY = 0;
    const onScroll = () => (scrollY = window.scrollY);
    window.addEventListener("scroll", onScroll);

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(hero);

    let raf = 0;
    function tick() {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const sf = Math.min(scrollY / window.innerHeight, 1);
      camera.position.y = 2.5 + sf * 2.5;
      controls.update();
      renderer.render(scene, camera);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      if (typeof mobileMediaQuery.removeEventListener === "function") {
        mobileMediaQuery.removeEventListener("change", handleViewportChange);
      } else {
        mobileMediaQuery.removeListener(handleViewportChange);
      }
      io.disconnect();
      controls.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <canvas id="hero-canvas" ref={canvasRef}></canvas>
      <div className="hero-content">
        <div className="hero-eyebrow">
          MOEKOCH.XYZ — Computer Science Portfolio Site{/*<span>_</span> */}
        </div>
        <h1 className="hero-name">
          MORGAN
          <br />
          KOCH
        </h1>
        <p className="hero-sub">
          Computer Science + MIS at Penn State Behrend. <br />Looking for software engineering or IT product management positions for post-grad May 2027. I enjoy building web apps, exploring 3D graphics, and learning new frameworks!
        </p>
        <div className="hero-ctas">
          <a href="#work" className="btn-p">
            VIEW WORK
          </a>
          <a href="/resume.pdf" className="btn-g" target="_blank">
            RESUME
          </a>
          <a href="https://linkedin.com/in/moekoch" className="btn-linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInLogo />
          </a>
        </div>
      </div>
      <div className="drag-hint">DRAG TO EXPLORE ↗</div>
      <p className="model-credit">
        <a
          href="https://sketchfab.com/3d-models/lego-flower-bouquet-362b74b395ff411faa6a0d87d198300e"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lego Flower Bouquet
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/georgiseizov"
          target="_blank"
          rel="noopener noreferrer"
        >
          georgiseizov
        </a>{" "}
        is licensed under{" "}
        <a
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CC Attribution-NonCommercial-ShareAlike
        </a>
      </p>
    </section>
  );
}
