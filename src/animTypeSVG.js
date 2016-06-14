export default {
  scale: {
    style: {
      scale: 0,
      opacity: 0,
    },
    type: 'from',
    duration: 300,
    ease: 'easeOutBack',
  },
  crosstocheck: [
    [
      { style: { rotate: 90, opacity: 0 }, duration: 250 },
      { d: 'M307.5,727.5', duration: 0, style: { rotate: 0, opacity: 1 } },
      { d: 'M168.5,497.5 L327.5,777.5', ease: 'easeOutBack', duration: 250 },
    ],
    { d: 'M856.5,246.5 L327.5,777.5' },
  ],
  checktocross: [
    [
      { d: 'M287.5,757.5', duration: 250 },
      { d: 'm512,512l0,0z', duration: 0 },
      { d: 'M229.5,229.5 L794.5,794.5', duration: 250, ease: 'easeOutBack' },
    ],
    { d: 'M794.5,229.5 L229.5,794.5' },
  ],
  uptodown: [
    [
      { d: 'M511.5,722.5L511.5,299.5', duration: 200 },
      { d: 'M511.5,722.5L171.5,301.5', ease: 'easeOutBack', duration: 350 },
    ],
    [
      { d: 'M511.5,722.5L511.5,299.5', duration: 200 },
      { d: 'M511.5,722.5L852.5,300.5', ease: 'easeOutBack', duration: 350 },
    ],
  ],
  downtoup: [
    [
      { d: 'M511.5,722.5L511.5,299.5', duration: 200 },
      { d: 'M171.5,722.5L511.5,299.5', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M511.5,722.5L511.5,299.5', duration: 200 },
      { d: 'M852.5,724.5L511.5,299.5', ease: 'easeOutBack', duration: 300 },
    ],
  ],
  lefttoright: [
    [
      { d: 'M725,510L300,510', duration: 200 },
      { d: 'M725,510L300,852', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M725,510L300,510', duration: 200 },
      { d: 'M725,510L300,172', ease: 'easeOutBack', duration: 300 },
    ],
  ],
  righttoleft: [
    [
      { d: 'M725,510L300,510', duration: 200 },
      { d: 'M725,852 L300,510', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M725,510L300,510', duration: 200 },
      { d: 'M725,172 L300,510', ease: 'easeOutBack', duration: 300 },
    ],
  ],
  plustocross: [
    { d: 'M229.5,229.5L794.5,794.5', ease: 'easeOutBack' },
    { d: 'M794.5,229.5L229.5,794.5', ease: 'easeOutBack', delay: 100 },
  ],
  crosstoplus: [
    { d: 'M160.5,512L863.616699,512', ease: 'easeOutBack' },
    { d: 'M509.5,165.5L509.5,859.66', ease: 'easeOutBack', delay: 100 },
  ],
};
