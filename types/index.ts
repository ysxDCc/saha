export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'domace' | 'limonady' | 'special';
  price?: number;
  image?: string;
}

export interface ReservationFormData {
  fullName: string;
  email: string;
  date: string;
  guests: number;
}

export interface OpeningHours {
  day: string;
  hours: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}