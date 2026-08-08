import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './CinematicIntro.module.css';

gsap.registerPlugin(ScrollTrigger);

const VIDEO_FRAME_RATE = 24;
const SCROLL_DISTANCE_IN_VIEWPORTS = 4.75;

export function CinematicIntro() {
  const sequenceRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sequence = sequenceRef.current;
    const video = videoRef.current;
    const scrollCue = scrollCueRef.current;

    if (!sequence || !video || !scrollCue) {
      return;
    }

    let hasBuiltSequence = false;
    let context: gsap.Context | undefined;

    const buildSequence = () => {
      if (hasBuiltSequence || !Number.isFinite(video.duration)) {
        return;
      }

      hasBuiltSequence = true;
      sequence.dataset.ready = 'true';
      video.pause();
      video.currentTime = 0;

      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (reducedMotion) {
        scrollCue.hidden = true;
        return;
      }

      context = gsap.context(() => {
        const finalFrameTime = Math.max(
          video.duration - 1 / VIDEO_FRAME_RATE,
          0,
        );

        gsap.to(video, {
          currentTime: finalFrameTime,
          duration: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sequence,
            start: 'top top',
            end: () =>
              '+=' +
              String(
                Math.max(
                  window.innerHeight * SCROLL_DISTANCE_IN_VIEWPORTS,
                  2800,
                ),
              ),
            pin: true,
            scrub: 0.35,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        gsap.to(scrollCue, {
          autoAlpha: 0,
          y: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: sequence,
            start: 'top top',
            end: '+=18%',
            scrub: true,
          },
        });
      }, sequence);

      ScrollTrigger.refresh();
    };

    const handleMediaError = () => {
      sequence.dataset.error = 'true';
      sequence.dataset.ready = 'true';
    };

    const unlockVideoOnTouch = () => {
      void video
        .play()
        .then(() => {
          video.pause();
        })
        .catch(() => undefined);
    };

    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      buildSequence();
    } else {
      video.addEventListener('loadedmetadata', buildSequence, { once: true });
    }

    video.addEventListener('error', handleMediaError, { once: true });
    sequence.addEventListener('touchstart', unlockVideoOnTouch, {
      once: true,
      passive: true,
    });

    return () => {
      video.removeEventListener('loadedmetadata', buildSequence);
      video.removeEventListener('error', handleMediaError);
      sequence.removeEventListener('touchstart', unlockVideoOnTouch);
      context?.revert();
    };
  }, []);

  return (
    <section
      ref={sequenceRef}
      className={styles.sequence}
      data-ready="false"
      aria-label="The Way of the Code — cinematic introduction"
    >
      <div className={styles.stage}>
        <video
          ref={videoRef}
          className={styles.video}
          poster="/media/mountain-intro-poster.webp"
          preload="auto"
          muted
          playsInline
          tabIndex={-1}
          aria-hidden="true"
        >
          <source src="/media/mountain-intro.mp4" type="video/mp4" />
        </video>

        <div className={styles.atmosphere} aria-hidden="true" />
        <div className={styles.vignette} aria-hidden="true" />

        <div className={styles.loader} role="status" aria-live="polite">
          <span className={styles.loaderLabel}>Preparing the ascent</span>
          <span className={styles.loaderTrack} aria-hidden="true">
            <span className={styles.loaderPulse} />
          </span>
        </div>

        <div ref={scrollCueRef} className={styles.scrollCue} aria-hidden="true">
          <span>Scroll to approach</span>
          <span className={styles.scrollLine} />
        </div>

        <p className={styles.errorMessage} role="alert">
          The cinematic could not be loaded.
        </p>
      </div>
    </section>
  );
}
