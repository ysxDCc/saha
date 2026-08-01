import { OpeningHours, FAQItem } from '@/types';

export const BUSINESS_INFO = {
  name: 'SAHA BAR',
  description: 'Prémiový bar s jedinečnou atmosférou v srdci Zlatých Moraviec',
  address: 'Župná 16/38, Zlaté Moravce',
  email: 'info@saha.bar',
  instagramUrl: 'https://instagram.com/saha.bar',
};

export const OPENING_HOURS: OpeningHours[] = [
  { day: 'Pondelok – Štvrtok', hours: '7:30 – 22:00' },
  { day: 'Piatok – Sobota', hours: '7:30 – 04:00' },
  { day: 'Nedeľa', hours: '12:00 – 22:00' },
];

export const SPECIAL_OF_MONTH = {
  name: 'UGURUNDU',
  description: 'Svieži, lahodný miešaný nápoj z cranberry alebo raspberry vodky, limetkovej šťavy, zmixovaný v shakeri s mätou a láskou.',
};

export const MENU_ITEMS = {
  domace: {
    title: 'Domáce',
    description: 'Tradičné domáce špeciality pripravované s láskou.',
    items: [],
  },
  limonady: {
    title: 'Limonády',
    description: 'Osviežujúce domáce limonády z čerstvého ovocia.',
    items: [],
  },
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Je potrebná rezervácia?',
    answer: 'Rezervácia nie je povinná, ale odporúčame ju počas víkendov.',
  },
  {
    question: 'Organizujete súkromné akcie?',
    answer: 'Áno, radi zorganizujeme vašu oslavu či firemné podujatie.',
  },
  {
    question: 'Akceptujete platobné karty?',
    answer: 'Áno, akceptujeme všetky bežné platobné karty aj hotovosť.',
  },
  {
    question: 'Máte vonkajšie posedenie?',
    answer: 'Áno, počas letných mesiacov ponúkame vonkajšie posedenie.',
  },
];

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/saha.bar',
};

export const NAV_LINKS = [
  { href: '/', label: 'Úvod' },
  { href: '/about', label: 'O nás' },
  { href: '/menu', label: 'Menu' },
  { href: '/reservations', label: 'Rezervácie' },
  { href: '/contact', label: 'Kontakt' },
];