'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

interface WarpEffectProps {
  isActive: boolean;
  color: string;
  onComplete: () => void;
}

export default function WarpEffect({ isActive, color, onComplete }: WarpEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!canvasRef.current || !isActive) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 5;

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create warp tunnel particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    const colorObj = new THREE.Color(color);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 3 + 0.5;
      const z = (Math.random() - 0.5) * 100;

      posArray[i] = Math.cos(angle) * radius;
      posArray[i + 1] = Math.sin(angle) * radius;
      posArray[i + 2] = z;

      colors[i] = colorObj.r + Math.random() * 0.2;
      colors[i + 1] = colorObj.g + Math.random() * 0.2;
      colors[i + 2] = colorObj.b + Math.random() * 0.2;

      sizes[i / 3] = Math.random() * 3 + 1;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const particlesMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;
          float alpha = 1.0 - (dist * 2.0);
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation timeline
    let speed = 0;
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += speed;
        if (positions[i + 2] > 50) {
          positions[i + 2] = -50;
        }
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      particlesMesh.rotation.z += 0.001 * speed;
      renderer.render(scene, camera);
    };

    animate();

    // GSAP animation sequence
    const tl = gsap.timeline({
      onComplete: () => {
        cancelAnimationFrame(animationId);
        renderer.dispose();
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        onComplete();
      },
    });

    tl.to({ speed: 0 }, {
      speed: 2,
      duration: 0.5,
      ease: 'power2.in',
      onUpdate: function() {
        speed = this.targets()[0].speed;
      },
    })
    .to({ speed: 2 }, {
      speed: 8,
      duration: 1,
      ease: 'power4.in',
      onUpdate: function() {
        speed = this.targets()[0].speed;
      },
    })
    .to(camera.position, {
      z: -20,
      duration: 1.5,
      ease: 'power4.in',
    }, '-=1')
    .to({ speed: 8 }, {
      speed: 0,
      duration: 0.3,
      onUpdate: function() {
        speed = this.targets()[0].speed;
      },
    });

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [isActive, color, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
