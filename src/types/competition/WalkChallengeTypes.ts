export interface PedometerResponse {
  name: string;
  step: number;
  rate: number;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  result: T;
  isSuccess: boolean;
}
