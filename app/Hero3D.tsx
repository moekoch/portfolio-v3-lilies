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

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.shadowMap.enabled = true;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xfaf8f4, 0.045);

    const FX = 2.4;
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(FX * 0.55, 2.5, 13);
    camera.lookAt(FX, 1.5, 0);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.055;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI * 0.15;
    controls.maxPolarAngle = Math.PI * 0.72;
    controls.target.set(FX, 1.5, 0);

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

    const petalM = new THREE.MeshStandardMaterial({ color: 0xf8f4ee, roughness: 0.5, metalness: 0, side: THREE.DoubleSide });
    const petalM2 = new THREE.MeshStandardMaterial({ color: 0xe8f0e8, roughness: 0.5, metalness: 0, side: THREE.DoubleSide });
    const stamenM = new THREE.MeshStandardMaterial({ color: 0xe0c840, roughness: 0.4 });
    const stemM = new THREE.MeshStandardMaterial({ color: 0x527a52, roughness: 0.85 });
    const leafM = new THREE.MeshStandardMaterial({ color: 0x628a62, roughness: 0.75, side: THREE.DoubleSide });

    function petalShape() {
      const s = new THREE.Shape();
      s.moveTo(0, 0);
      s.bezierCurveTo(0.6, 0.5, 0.7, 1.6, 0, 3.0);
      s.bezierCurveTo(-0.7, 1.6, -0.6, 0.5, 0, 0);
      return s;
    }
    function leafShape() {
      const s = new THREE.Shape();
      s.moveTo(0, 0);
      s.bezierCurveTo(0.55, 0.4, 0.6, 1.4, 0, 2.6);
      s.bezierCurveTo(-0.6, 1.4, -0.55, 0.4, 0, 0);
      return s;
    }

    function makeLily(mat: THREE.Material, open = 0.28, scale = 1) {
      const g = new THREE.Group();
      for (let i = 0; i < 6; i++) {
        const piv = new THREE.Object3D();
        piv.rotation.y = (i / 6) * Math.PI * 2;
        const mesh = new THREE.Mesh(new THREE.ShapeGeometry(petalShape(), 18), mat);
        mesh.rotation.x = -Math.PI * open;
        piv.add(mesh);
        g.add(piv);
      }
      for (let i = 0; i < 6; i++) {
        const piv = new THREE.Object3D();
        piv.rotation.y = (i / 6) * Math.PI * 2 + Math.PI / 6;
        const fil = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 1.8, 6), stamenM);
        fil.position.set(0.2, 0.9, 0);
        fil.rotation.z = 0.14;
        const tip = new THREE.Mesh(new THREE.SphereGeometry(0.06, 7, 7), stamenM);
        tip.position.set(0.24, 1.82, 0);
        piv.add(fil);
        piv.add(tip);
        g.add(piv);
      }
      const pist = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 2.0, 8), stemM);
      pist.position.y = 1.0;
      g.add(pist);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.075, 8, 8), new THREE.MeshStandardMaterial({ color: 0x3a5a3a }));
      cap.position.y = 2.05;
      g.add(cap);
      g.scale.setScalar(scale);
      return g;
    }

    function makeStem(h: number) {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.048, 0.07, h, 8), stemM);
      m.castShadow = true;
      return m;
    }
    function makeLeaf(sx = 1, sy = 1) {
      const m = new THREE.Mesh(new THREE.ShapeGeometry(leafShape(), 12), leafM);
      m.scale.set(sx, sy, 1);
      return m;
    }

    const flowerGroup = new THREE.Group();
    flowerGroup.position.x = FX;
    scene.add(flowerGroup);

    const s1 = makeStem(5.5);
    s1.position.set(0, -0.2, 0);
    flowerGroup.add(s1);
    const l1 = makeLily(petalM, 0.3, 1.15);
    l1.position.set(0, 2.6, 0);
    flowerGroup.add(l1);
    const lf1 = makeLeaf(1.2, 1.1);
    lf1.position.set(0, 0.9, 0);
    lf1.rotation.set(-0.25, 0.5, 0.45);
    flowerGroup.add(lf1);

    const s2 = makeStem(4.2);
    s2.position.set(-3.0, -1.0, -1.2);
    flowerGroup.add(s2);
    const l2 = makeLily(petalM2, 0.14, 0.82);
    l2.position.set(-3.0, 0.9, -1.2);
    l2.rotation.y = 0.8;
    flowerGroup.add(l2);
    const lf2 = makeLeaf(1.0, 1.0);
    lf2.position.set(-3.0, -0.1, -1.2);
    lf2.rotation.set(-0.2, -0.4, -0.5);
    flowerGroup.add(lf2);

    const s3 = makeStem(4.8);
    s3.position.set(2.8, -0.6, -1.0);
    flowerGroup.add(s3);
    const l3 = makeLily(petalM, 0.33, 0.95);
    l3.position.set(2.8, 1.8, -1.0);
    l3.rotation.y = 2.0;
    flowerGroup.add(l3);
    const lf3 = makeLeaf(1.1, 0.9);
    lf3.position.set(2.8, 0.3, -1.0);
    lf3.rotation.set(-0.3, 0.3, -0.4);
    flowerGroup.add(lf3);

    const s4 = makeStem(3.5);
    s4.position.set(-1.5, -1.5, -2.5);
    flowerGroup.add(s4);
    const l4 = makeLily(petalM2, 0.07, 0.65);
    l4.position.set(-1.5, 0.2, -2.5);
    l4.rotation.y = 1.5;
    flowerGroup.add(l4);

    // Optional: swap in the Sketchfab "Lilies" model if present at /public/models/lilies.glb
    // Falls back silently to the procedural flowers above if the file is missing.
    new GLTFLoader().load(
      "/models/lilies.glb",
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
        flowerGroup.visible = false; // hide procedural stand-in once real model loads
        flowerGroup.parent?.add(model);
        model.position.x = flowerGroup.position.x;

        // NEW: recenter orbit target on the actual model, not the old flower position
        const fittedBox = new THREE.Box3().setFromObject(model);
        const fittedCenter = new THREE.Vector3();
        fittedBox.getCenter(fittedCenter);
        const fittedSize = new THREE.Vector3();
        fittedBox.getSize(fittedSize);
        const fittedMax = Math.max(fittedSize.x, fittedSize.y, fittedSize.z) || 1;

        controls.target.copy(fittedCenter);
        camera.position.set(fittedCenter.x, fittedCenter.y + fittedMax * 0.3, fittedCenter.z + fittedMax * 1.4); //larger fitted max = farther camera
        camera.lookAt(fittedCenter);
        controls.update();
      },
      undefined,
      () => {} // no lilies.glb present — keep procedural flowers
    );

    const gnd = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ color: 0xf2ede6, roughness: 1 }));
    gnd.rotation.x = -Math.PI / 2;
    gnd.position.y = -3.2;
    gnd.receiveShadow = true;
    scene.add(gnd);

    function resize() {
      if (!hero) return;
      const w = hero.offsetWidth, h = hero.offsetHeight;
      camera.aspect = w / h;
      camera.setViewOffset(w, h, -w * 0.12, 0, w, h); // shifts render rightward on screen
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    resize();
    window.addEventListener("resize", resize);

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
      const t = performance.now() * 0.001;
      l1.rotation.z = Math.sin(t * 0.38) * 0.022;
      l2.rotation.z = Math.sin(t * 0.32 + 1.2) * 0.018;
      l3.rotation.z = Math.sin(t * 0.42 + 2.5) * 0.02;
      l4.rotation.z = Math.sin(t * 0.28 + 0.8) * 0.015;
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
          MOEKOCH.XYZ — Computer Science Portfolio Site<span>_</span>
        </div>
        <h1 className="hero-name">
          MORGAN
          <br />
          KOCH
        </h1>
        <p className="hero-sub">
          Computer Science + MIS at Penn State Behrend. <br />Looking for software engineering, cybersecurity, or IT product management positions for post-grad May 2025. I enjoy building web apps, exploring 3D graphics, and learning new frameworks!
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
        "Lilies" by{" "}
        <a href="https://sketchfab.com/sligocreatures" target="_blank" rel="noopener nofollow">
          sligocreatures
        </a>
        , via{" "}
        <a
          href="https://sketchfab.com/3d-models/lilies-45755df496804cb7a36f6f32305b57a7"
          target="_blank"
          rel="noopener nofollow"
        >
          Sketchfab
        </a>{" "}
        (CC BY 4.0)
      </p>
    </section>
  );
}
