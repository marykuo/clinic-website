export type ViewState = 'home' | 'info' | 'booking';

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