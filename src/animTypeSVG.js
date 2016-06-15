const a = ['O', 'Moz', 'ms', 'Ms', 'Webkit'];
const t = a.filter(key => `${key}Transform` in document.body.style)[0];

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
      { d: 'M510,300L510,725', duration: 200 },
      { d: 'M172,300L510,725', ease: 'easeOutBack', duration: 350 },
    ],
    [
      { d: 'M510,300L510,725', duration: 200 },
      { d: 'M852,300L510,725', ease: 'easeOutBack', duration: 350 },
    ],
  ],
  downtoup: [
    [
      { d: 'M510,300L510,725', duration: 200 },
      { d: 'M510,300L172,725', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M510,300L510,725', duration: 200 },
      { d: 'M510,300L852,725', ease: 'easeOutBack', duration: 300 },
    ],
  ],
  lefttoright: [
    [
      { d: 'M300,510L725,510', duration: 200 },
      { d: 'M300,852L725,510', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M300,510L725,510', duration: 200 },
      { d: 'M300,172L725,510', ease: 'easeOutBack', duration: 300 },
    ],
  ],
  righttoleft: [
    [
      { d: 'M300,510L725,510', duration: 200 },
      { d: 'M300,510L725,852', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M300,510L725,510', duration: 200 },
      { d: 'M300,510L725,172', ease: 'easeOutBack', duration: 300 },
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
  doublelefttodoubleright: [
    [
      { d: 'M136,510L889,510', duration: 200 },
      { d: 'M136,172 L559,510', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M136,510L889,510', duration: 200 },
      { d: 'M136,852 L559,510', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M466,510L889,510', duration: 200 },
      { d: 'M466,852 L889,510', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M466,510L889,510', duration: 200 },
      { d: 'M466,172 L889,510', ease: 'easeOutBack', duration: 300 },
    ],
  ],
  doublerighttodoubleleft: [
    [
      { d: 'M136,510L889,510', duration: 200 },
      { d: 'M136,510 L559,172', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M136,510L889,510', duration: 200 },
      { d: 'M136,510 L559,852', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M466,510L889,510', duration: 200 },
      { d: 'M466,510 L889,172', ease: 'easeOutBack', duration: 300 },
    ],
    [
      { d: 'M466,510L889,510', duration: 200 },
      { d: 'M466,510 L889,852', ease: 'easeOutBack', duration: 300 },
    ],
  ],
  caretdowntocaretup: [
    [
      { style: { rotate: 180, y: t === 'Moz' ? '0%' : '-33%' },
        ease: 'easeOutBack', duration: 600,
      },
      {
        d: 'M76.3,632.8l405.1-489.1c16.9-18.9,46.5-18.9,63.4,0l403.1,489.1' +
        'c24.4,27.4,5,70.8-31.7,70.8H107.9C71.3,703.6,51.8,660.2,76.3,632.8z',
        duration: 0,
        style: { rotate: 0, y: '0%' },
      },
    ],
  ],
  caretuptocaretdown: [
    [
      { style: { rotate: 180, y: t === 'Moz' ? '0%' : '33%' },
        ease: 'easeOutBack', duration: 600,
      },
      {
        d: 'M76.3,392.3l403.1,489.1c16.9,18.9,46.5,18.9,63.4,0l405.1-489.1' +
        'c24.4-27.4,5-70.8-31.7-70.8l-808.1,0C71.3,321.5,51.8,364.9,76.3,392.3z',
        duration: 0,
        style: { rotate: 0, y: '0%' },
      },
    ],
  ],
  caretlefttocaretright: [
    [
      { style: { rotate: 180, x: t === 'Moz' ? '0%' : '33%' },
        ease: 'easeOutBack', duration: 600,
      },
      {
        d: 'M392.7,76.3l489.1,403.1c18.9,16.9,18.9,46.5,0,63.4L392.7,947.7' +
        'c-27.4,24.4-70.8,5-70.8-31.7V107.9C322,71.3,365.3,51.8,392.7,76.3z',
        duration: 0,
        style: { rotate: 0, x: '0%' },
      },
    ],
  ],
  caretrighttocaretleft: [
    [
      { style: { rotate: 180, x: t === 'Moz' ? '0%' : '-33%' },
        ease: 'easeOutBack', duration: 600,
      },
      {
        d: 'M631.3,76.3L142.1,479.3c-18.9,16.9-18.9,46.5,0,63.4l489.1,405.1' +
        'c27.4,24.4,70.8,5,70.8-31.7V107.9C702,71.3,658.6,51.8,631.3,76.3z',
        duration: 0,
        style: { rotate: 0, x: '0%' },
      },
    ],
  ],
  arrowrighttoarrowleft: [
    [
      { d: 'M855,510 L558,510', duration: 200 },
      { d: 'M170,510 L465,510', duration: 0 },
      { d: 'M170,510 L465,225', duration: 300, ease: 'easeOutBack' },
    ],
    [
      { d: 'M855,510 L558,510', duration: 200 },
      { d: 'M170,510 L465,510', duration: 0 },
      { d: 'M170,510 L465,795', duration: 300, ease: 'easeOutBack' },
    ]
  ],
  arrowlefttoarrowright: [
    [
      { d: 'M170,510 L465,510', duration: 200 },
      { d: 'M855,510 L558,510', duration: 0 },
      { d: 'M855,510 L558,225', duration: 300, ease: 'easeOutBack' },
    ],
    [
      { d: 'M170,510 L465,510', duration: 200 },
      { d: 'M855,510 L558,510', duration: 0 },
      { d: 'M855,510 L558,795', duration: 300, ease: 'easeOutBack' },
    ]
  ],
  arrowuptoarrowdown: [
    [
      { d: 'M515,165 L515,465', duration: 200 },
      { d: 'M515,850 L515,555', duration: 0 },
      { d: 'M515,850 L225,555', duration: 300, ease: 'easeOutBack' },
    ],
    [
      { d: 'M515,165 L515,465', duration: 200 },
      { d: 'M515,850 L515,555', duration: 0 },
      { d: 'M515,850 L795,555', duration: 300, ease: 'easeOutBack' }
    ]
  ],
  arrowdowntoarrowup: [
    [
      { d: 'M515,850 L515,555', duration: 200 },
      { d: 'M515,165 L515,465', duration: 0 },
      { d: 'M515,165 L230,465', duration: 300, ease: 'easeOutBack' },
    ],
    [
      { d: 'M515,850 L515,555', duration: 200 },
      { d: 'M515,165 L515,465', duration: 0 },
      { d: 'M515,165 L790,465', duration: 300, ease: 'easeOutBack' }
    ]
  ],
};
