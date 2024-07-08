export interface DailyRanking {
  message: string;
  code: number;
  result: {
    date: string;
    ranking: {
      name: string;
      dailyRate: string;
      challengeType: number;
      challengeDate: string;
    }[];
  };
  isSuccess: boolean;
}

export interface WeeklyRate {
  message: string;
  code: number;
  result: {
    date: string; // 날짜
    totalRate: number; // 총 이율
  }[];
  isSuccess: boolean;
}

export interface FormattedHistory {
  name: string;
  totalRate: number;
}
