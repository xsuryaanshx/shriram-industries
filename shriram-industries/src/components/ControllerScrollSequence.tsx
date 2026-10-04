import React, { useEffect, useRef, useState, useCallback } from 'react';

/**
 * ControllerScrollSequence Component
 * 
 * An Apple-style scroll-linked canvas image sequence player.
 * Preloads frames from /Controller/ezgif-frame-XXX.jpg and maps scroll progress to frame index.
 */
interface ControllerScrollSequenceProps {
  /** Optional custom container height (defaults to '400vh') */
  containerHeight?: string;
  /** Total available frames in Controller directory */
  totalFrames?: number;
  /** Base path for images */
  frameDir?: string;
  /** Optional title or overlay content */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
}

export const ControllerScrollSequence: React.FC<ControllerScrollSequenceProps> = ({
  containerHeight = '400vh',
  totalFrames = 240,
  frameDir = '/Controller',
  title = 'Engineered for Performance.',
  subtitle = 'Scroll to explore every angle and internal component.',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Loaded images cache and state
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Playback & rendering state refs (kept in refs to avoid re-renders on scroll)
  const lastDrawnIndexRef = useRef<number>(-1);
  const targetFrameIndexRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);

  // Get frame URL helper (1-indexed: ezgif-frame-001.jpg)
  const getFrameUrl = useCallback(
    (frameNum: number) => {
      const paddedIndex = String(frameNum).padStart(3, '0');
      // Ensure compatibility with Vite base URL if deployed under subpaths
      const base = import.meta.env.BASE_URL.replace(/\/$/, '');
      const dir = frameDir.replace(/^\//, '');
      return `${base}/${dir}/ezgif-frame-${paddedIndex}.jpg`;
    },
    [frameDir]
  );

  // 1. Listen for prefers-reduced-motion changes
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // 2. Preload frames
  useEffect(() => {
    let isCancelled = false;

    // Mobile check: under 768px loads every 2nd frame to save bandwidth & memory
    const isMobile = window.innerWidth < 768;
    const step = isMobile ? 2 : 1;

    // If reduced motion is requested, we only need a single static frame (frame 1)
    const frameNumbersToLoad: number[] = [];
    if (reducedMotion) {
      frameNumbersToLoad.push(1);
    } else {
      for (let i = 1; i <= totalFrames; i += step) {
        frameNumbersToLoad.push(i);
      }
    }

    const totalToLoad = frameNumbersToLoad.length;
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = new Array(totalToLoad);

    frameNumbersToLoad.forEach((frameNum, arrayIndex) => {
      const img = new Image();
      img.src = getFrameUrl(frameNum);

      const handleImageLoad = () => {
        if (isCancelled) return;
        loadedImages[arrayIndex] = img;
        loadedCount += 1;

        // Update progress state
        const progress = Math.min(100, Math.round((loadedCount / totalToLoad) * 100));
        setLoadingProgress(progress);

        if (loadedCount === totalToLoad) {
          imagesRef.current = loadedImages;
          setIsLoaded(true);
        }
      };

      img.onload = handleImageLoad;
      img.onerror = () => {
        console.warn(`Failed to load frame: ${img.src}`);
        handleImageLoad(); // proceed gracefully
      };
    });

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, getFrameUrl, reducedMotion]);

  // 3. Aspect-ratio preserving canvas draw function
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images = imagesRef.current;
    if (!images || images.length === 0) return;

    // Clamp index to available image array bounds
    const safeIndex = Math.max(0, Math.min(images.length - 1, index));
    const img = images[safeIndex];
    if (!img || !img.complete) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || 1280;
    const imgHeight = img.naturalHeight || 720;

    // Calculate aspect ratios for "contain" (no cropping, whole controller visible)
    const imgAspect = imgWidth / imgHeight;
    const canvasAspect = canvasWidth / canvasHeight;

    let drawWidth: number;
    let drawHeight: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasAspect > imgAspect) {
      // Screen is wider than 16:9 -> fit height, center horizontally
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgAspect;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Screen is taller than 16:9 -> fit width, center vertically
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgAspect;
      offsetX = 0;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    // Clear and draw frame
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Record last drawn index so we never repaint unnecessarily
    lastDrawnIndexRef.current = safeIndex;
  }, []);

  // 4. Resize canvas to match display resolution & DPR
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap at 2x for performance
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    // Force repaint after resize
    if (imagesRef.current.length > 0) {
      drawFrame(targetFrameIndexRef.current);
    }
  }, [drawFrame]);

  // Handle window resize
  useEffect(() => {
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [resizeCanvas]);

  // 5. Scroll calculation and rAF schedule
  useEffect(() => {
    if (!isLoaded || reducedMotion) {
      if (isLoaded && reducedMotion) {
        // Draw initial static frame for users preferring reduced motion
        drawFrame(0);
      }
      return;
    }

    // Initial draw
    drawFrame(0);

    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // ─────────────────────────────────────────────────────────────
      // SCROLL-TO-FRAME MAPPING:
      //
      // 1. maxScroll: The total scrollable distance while the sticky
      //    canvas remains locked in place (container height minus 1 viewport).
      // 2. scrollTop: How many pixels the user has scrolled INTO the container.
      // 3. progress: Normalized value from 0.0 (top) to 1.0 (bottom).
      // 4. targetIndex: Progress multiplied by total frames.
      //
      // * TO SPEED UP THE ANIMATION: Decrease containerHeight (e.g. '250vh').
      // * TO SLOW DOWN THE ANIMATION: Increase containerHeight (e.g. '600vh').
      // ─────────────────────────────────────────────────────────────
      const maxScroll = rect.height - viewportHeight;
      if (maxScroll <= 0) return;

      const scrollTop = -rect.top;
      const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));

      const totalAvailable = imagesRef.current.length;
      const newFrameIndex = Math.min(
        totalAvailable - 1,
        Math.floor(progress * totalAvailable)
      );

      // Only queue a draw if the target frame index has changed
      if (newFrameIndex !== lastDrawnIndexRef.current) {
        targetFrameIndexRef.current = newFrameIndex;

        // Schedule draw with requestAnimationFrame (never redraw directly inside scroll event)
        if (rafIdRef.current === null) {
          rafIdRef.current = requestAnimationFrame(() => {
            drawFrame(targetFrameIndexRef.current);
            rafIdRef.current = null;
          });
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on load to sync initial scroll position
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isLoaded, reducedMotion, drawFrame]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#050505] text-white"
      style={{
        // Height controls the scrub speed: higher = slower, lower = faster
        height: reducedMotion ? 'auto' : containerHeight,
      }}
    >
      {/* Sticky Canvas Viewport */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Loading Overlay */}
        {!isLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-500">
            <div className="flex flex-col items-center gap-4 max-w-xs w-full px-6">
              <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-white h-full transition-all duration-150 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                Loading Experience {loadingProgress}%
              </p>
            </div>
          </div>
        )}

        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain pointer-events-none"
          aria-label="Interactive 3D Controller exploded frame animation"
          role="img"
        />

        {/* Subtle Ambient Apple-Style Overlay HUD / Text */}
        <div className="absolute inset-x-0 bottom-12 z-10 flex flex-col items-center text-center px-6 pointer-events-none">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-white/90 drop-shadow-md">
            {title}
          </h2>
          <p className="mt-2 text-sm md:text-base text-neutral-400 max-w-md drop-shadow">
            {reducedMotion
              ? 'Static view (Reduced motion enabled).'
              : subtitle}
          </p>

          {!reducedMotion && isLoaded && (
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 animate-pulse">
              <span>Scroll to scrub</span>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ControllerScrollSequence;
