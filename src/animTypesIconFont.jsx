export default {
  leftToRight: {
    enter: {
      x: '-100%',
      opacity: 0,
      type: 'from',
    },
    leave: {
      x: '100%',
      opacity: 0,
    },
  },
  rightToLeft: {
    enter: {
      x: '100%',
      opacity: 0,
      type: 'from',
    },
    leave: {
      x: '-100%',
      opacity: 0,
    },
  },
  scale: {
    enter: {
      scale: 0,
      opacity: 0,
      type: 'from',
    },
    leave: {
      scale: 0,
      opacity: 0,
    },
  },
  scaleBack: {
    appear: {
      scale: 0,
      opacity: 0,
      type: 'from',
      duration: 300,
      ease: 'easeOutBack',
    },
    enter: {
      scale: 0,
      opacity: 0,
      type: 'from',
      ease: 'easeOutBack',
      duration: 300,
      delay: 300,
    },
    leave: {
      duration: 300,
      scale: 0,
      opacity: 0,
      ease: 'easeInBack',
    },
  },
  scaleBig: {
    enter: {
      scale: 2,
      opacity: 0,
      type: 'from',
    },
    leave: {
      scale: 0,
      opacity: 0,
    },
  },
  rotate: {
    appear: {
      rotate: 180,
      opacity: 0,
      type: 'from',
    },
    enter: {
      rotate: 180,
      opacity: 0,
      delay: 150,
      duration: 300,
      type: 'from',
    },
    leave: {
      rotate: -180,
      opacity: 0,
      duration: 300,
    },
  },
  rotateX: {
    appear: {
      rotateX: 90,
      opacity: 0,
      type: 'from',
    },
    enter: {
      rotateX: 90,
      delay: 300,
      duration: 300,
      type: 'from',
    },
    leave: {
      rotateX: -90,
      duration: 300,
    },
  },
  rotateY: {
    appear: {
      rotateY: 90,
      opacity: 0,
      type: 'from',
    },
    enter: {
      rotateY: 90,
      delay: 300,
      duration: 300,
      type: 'from',
    },
    leave: {
      rotateY: -90,
      duration: 300,
    },
  },
  alpha: {
    enter: {
      opacity: 0,
      type: 'from',
    },
    leave: {
      opacity: 0,
    },
  },
  left3dFlip: {
    enter: {
      rotateY: -90,
      x: '-100%',
      transformOrigin: '100% 50%',
      opacity: 0,
      type: 'from',
    },
    leave: {
      rotateY: 90,
      x: '100%',
      transformOrigin: '0% 50%',
      opacity: 0,
    },
  },
  right3dFlip: {
    enter: {
      rotateY: 90,
      x: '100%',
      transformOrigin: '0% 50%',
      opacity: 0,
      type: 'from',
    },
    leave: {
      rotateY: -90,
      x: '-100%',
      transformOrigin: '100% 50%',
      opacity: 0,
    },
  },
  top3dFlip: {
    enter: {
      rotateX: -90,
      transformOrigin: '50% 100%',
      y: '-100%',
      opacity: 0,
      type: 'from',
    },
    leave: {
      rotateX: 90,
      transformOrigin: '50% 0%',
      y: '100%',
      opacity: 0,
    },
  },
  bottom3dFlip: {
    enter: {
      rotateX: 90,
      transformOrigin: '50% 0%',
      y: '100%',
      opacity: 0,
      type: 'from',
    },
    leave: {
      rotateX: -90,
      transformOrigin: '50% 100%',
      y: '-100%',
      opacity: 0,
    },
  },
  rubberBand: {
    appear: [
      { scaleX: 1.25, scaleY: 0.75, opacity: 0, type: 'from', duration: 170, ease: 'linear' },
      { scaleX: 0.75, scaleY: 1.25, duration: 70, ease: 'linear' },
      { scaleX: 1.15, scaleY: 0.85, duration: 70, ease: 'linear' },
      { scaleX: 1.25, scaleY: 0.75, duration: 70, ease: 'linear' },
      { scaleX: 0.85, scaleY: 1.15, duration: 120, ease: 'linear' },
      { scale: 1, duration: 120 },
    ],
    enter: [
      { opacity: 0, duration: 0, scaleX: 1.15, scaleY: 0.85 },
      { delay: 310, duration: 0, opacity: 1 },
      { scaleX: 1.25, scaleY: 0.75, duration: 70, ease: 'linear' },
      { scaleX: 0.85, scaleY: 1.15, duration: 120, ease: 'linear' },
      { scale: 1, duration: 120 },
    ],
    leave: [
      { scaleX: 1.25, scaleY: 0.75, duration: 170, ease: 'linear' },
      { scaleX: 0.75, scaleY: 1.25, duration: 70, ease: 'linear' },
      { scaleX: 1.15, scaleY: 0.85, duration: 70, ease: 'linear' },
    ],
  },
};
