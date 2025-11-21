export type ViewState = 'home' | 'news' | 'hours' | 'faq' | 'transport' | 'doctors';

export interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
}

export interface OpeningHours {
  day: string;
  hours: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Doctor {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  image1: string;
  image2: string;
  description?: string;
}