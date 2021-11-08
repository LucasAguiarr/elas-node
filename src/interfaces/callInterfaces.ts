interface ICall {
  id: number;
  status?: IStatus;
  created_at: Date;
  user_id: string;
  latitude: number;
  longitude: number;
}

export enum IStatus {
  waiting = 'Waiting',
  in_progress = 'In progress',
  concluded = 'Concluded',
}

export type ICreateCallRequest = Omit<ICall, 'id' | 'created_at'>;
export type IUpdateCallRequest = Pick<ICall, 'id' | 'status'>;
