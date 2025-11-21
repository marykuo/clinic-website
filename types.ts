export type ViewState = 'home' | 'news' | 'hours' | 'booking' | 'faq' | 'transport';

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
