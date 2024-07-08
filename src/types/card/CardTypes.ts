export interface Card {
  id: number;
  cardName: string;
  ranking: number;
  type: string;
  benefit: string;
  img: string;
  corp: string;
  annualFee: string;
}

export interface ParsedCard {
  id: number;
  cardName: string;
  ranking: number;
  type: string;
  benefit: object[];
  img: string;
  corp: object;
  annualFee: string;
}

export interface GetRecommendedCardResponse {
  message: string;
  code: number;
  result: {
    card: Card;
  };
  isSuccess: boolean;
}
