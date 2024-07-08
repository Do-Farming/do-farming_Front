export interface Taste {
  id: number;
  tasteCategory: string;
  tasteTitle: string;
  tasteTag: string;
  tasteImg: string;
}

export interface GetTasteListResponse {
  message: string;
  code: number;
  result: {
    tasteList: Taste[];
  };
  isSuccess: boolean;
}
