import { NewsItem, OpeningHours, FaqItem, Doctor } from './types';

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

export const FAQ_ITEMS: FaqItem[] = [
  { 
    q: '如何預約看診？', 
    a: '目前我們主要採現場掛號制，您可以先致電 (02) 2345-6789 詢問目前看診進度。' 
  },
  { 
    q: '初診需要攜帶什麼文件？', 
    a: '請務必攜帶您的「健保卡」與「身分證」。若您有其他醫療院所的轉診單、檢驗報告或用藥紀錄，也建議一併攜帶供醫師參考。' 
  },
  { 
    q: '診所有提供公費疫苗嗎？', 
    a: '有的，本診所為公費流感疫苗合約院所。各類公費疫苗（如流感、肺炎鏈球菌等）施打資格與庫存狀況，請留意最新公告或來電洽詢。' 
  },
  { 
    q: '看診過號了怎麼辦？', 
    a: '若您過號，請告知櫃檯人員報到。我們將為您安排後續順位，原則上每兩位現場/預約號會穿插一位過號民眾，請耐心等候。' 
  },
];

export const MAIN_DOCTORS: Doctor[] = [
  {
    id: 1,
    name: '林志豪 醫師',
    title: '院長 / 家醫科專科醫師',
    specialties: ['慢性病控制', '預防醫學', '家庭醫學', '一般內科'],
    image1: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500', // Professional
    image2: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=500', // Casual/Action
  },
  {
    id: 2,
    name: '陳怡君 醫師',
    title: '副院長 / 小兒科專科醫師',
    specialties: ['小兒過敏氣喘', '生長發育評估', '嬰幼兒健檢', '一般兒科'],
    image1: 'https://images.unsplash.com/photo-1594824476969-51c4475e6d31?auto=format&fit=crop&q=80&w=400&h=500',
    image2: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500',
  },
  {
    id: 3,
    name: '張偉德 醫師',
    title: '主治醫師 / 耳鼻喉科',
    specialties: ['過敏性鼻炎', '鼻竇炎治療', '中耳炎', '眩暈治療'],
    image1: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=500',
    image2: 'https://images.unsplash.com/photo-1612531386530-97286d74c2ea?auto=format&fit=crop&q=80&w=400&h=500',
  },
  {
    id: 4,
    name: '黃淑芬 醫師',
    title: '主治醫師 / 皮膚科',
    specialties: ['一般皮膚病', '醫學美容', '青春痘治療', '雷射治療'],
    image1: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400&h=500',
    image2: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=500',
  },
];

export const VISITING_DOCTORS: Doctor[] = [
  {
    id: 5,
    name: '吳孟修 醫師',
    title: '特約醫師 / 骨科',
    specialties: ['運動傷害', '關節炎', '骨質疏鬆'],
    image1: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=400&h=500',
    image2: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400&h=500',
  },
  {
    id: 6,
    name: '劉心語 醫師',
    title: '特約醫師 / 身心科',
    specialties: ['睡眠障礙', '焦慮症', '自律神經失調'],
    image1: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500',
    image2: 'https://images.unsplash.com/photo-1625498542602-6bfb30f63385?auto=format&fit=crop&q=80&w=400&h=500',
  },
  {
    id: 7,
    name: '王建宏 醫師',
    title: '特約醫師 / 復健科',
    specialties: ['肩頸痠痛', '下背痛', '姿勢矯正'],
    image1: 'https://images.unsplash.com/photo-1612349317033-a633a5a2887f?auto=format&fit=crop&q=80&w=400&h=500',
    image2: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?auto=format&fit=crop&q=80&w=400&h=500',
  },
  {
    id: 8,
    name: '趙子軒 醫師',
    title: '特約醫師 / 營養門診',
    specialties: ['體重管理', '糖尿病飲食', '三高飲食控制'],
    image1: 'https://images.unsplash.com/photo-1637059281428-13b129d1f490?auto=format&fit=crop&q=80&w=400&h=500',
    image2: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=400&h=500',
  },
];