
export enum IPredictionStatus {
  starting = "starting",
  processing = "processing",
  succeeded = "succeeded"
}

export interface IPrediction {
  status: IPredictionStatus;
  id: string;
  output: string
}