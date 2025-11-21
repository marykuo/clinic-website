import { NewsItem, OpeningHours } from './types';

export const PRIMARY_COLOR = '#0860DC';

export const CLINIC_NAME = "蔚藍優康診所";
export const CLINIC_DESCRIPTION = "我們致力於提供最優質的醫療服務，守護您與家人的健康。擁有專業的醫療團隊與舒適的診療環境。";

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    date: '2023-10-24',
    title: '流感疫苗開始施打',
    content: '本年度公費流感疫苗已到貨，歡迎符合資格的民眾攜帶健保卡前來施打。',
  },
  {
    id: 2,
    date: '2023-10-15',
    title: '門診時間調整公告',
    content: '自下個月起，週三晚診暫停一次，造成不便敬請見諒。',
  },
  {
    id: 3,
    date: '2023-10-01',
    title: '全新引進高階超音波設備',
    content: '為提升診斷精準度，本院引進最新型高階超音波，歡迎預約檢查。',
  },
];

export const OPENING_HOURS: OpeningHours[] = [
  { day: '週一 (Mon)', hours: '09:00 - 12:00, 14:00 - 21:00' },
  { day: '週二 (Tue)', hours: '09:00 - 12:00, 14:00 - 21:00' },
  { day: '週三 (Wed)', hours: '09:00 - 12:00, 18:00 - 21:00' },
  { day: '週四 (Thu)', hours: '09:00 - 12:00, 14:00 - 21:00' },
  { day: '週五 (Fri)', hours: '09:00 - 12:00, 14:00 - 21:00' },
  { day: '週六 (Sat)', hours: '09:00 - 12:00' },
  { day: '週日 (Sun)', hours: '休診 (Closed)' },
];