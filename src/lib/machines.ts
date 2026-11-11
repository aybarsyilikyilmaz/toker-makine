// Makine parkuru yapısı ve görselleri. Makine adları ve açıklamaları dil dosyalarında (machines.items).
export const MACHINE_GROUPS = [
  {
    id: 'cnc',
    items: [
      { id: 'neway', image: '/images/cnc-dik-isleme-neway-kart.webp' },
      { id: 'haas', image: '/images/cnc-dik-isleme-haas-kart.webp' },
    ],
  },
  {
    id: 'lathe',
    items: [
      { id: 'lathe1200', image: '/images/cap-1200x5000-torna-kart.webp' },
      { id: 'lathe660', image: '/images/cap-600x3000-torna-kart.webp' },
    ],
  },
  {
    id: 'milling',
    items: [
      { id: 'mill', image: '/images/universal-freze-tezgah-kart.webp' },
      { id: 'slotter200', image: '/images/dikplanya-200-kart.webp' },
      { id: 'slotter320', image: '/images/dikplanya-320-kart.webp' },
      { id: 'easylaser', image: '/images/easylaser-kaplin-kart.webp' },
    ],
  },
] as const;

export type MachineGroupId = (typeof MACHINE_GROUPS)[number]['id'];
export type MachineId = (typeof MACHINE_GROUPS)[number]['items'][number]['id'];
