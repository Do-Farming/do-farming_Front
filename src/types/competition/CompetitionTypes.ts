export interface DailyRanking {
  status: number;
  message: string;
  data: {
    date: string;
    ranking: Array<{
      name: string;
      dailyRate: string;
      challengeType: number;
      challengeDate: string;
    }>;
  };
}

export interface WeeklyRate {
  data: {
    weekly: number;
    user: Array<{
      name: string;
      weeklyRate: number;
    }>;
  };
}
