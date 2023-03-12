import type { HttpMethod } from './request.enum';

export interface IMakeRequest {
  path: string;
  body?: Record<string, any> | null;
  method?: HttpMethod;
  bearerToken?: string;
  isFormData?: boolean;
}

export interface AxiosInstanceOption {
  bearerToken?: string;
  contentType?: string;
}

export interface IRequestError {
  statusCode: number;
  message: string;
  timeStamp: Date;
  status: boolean;
  data?: any;
}

export interface IRequestSuccess<T> {
  statusCode: number;
  message: string;
  timeStamp: Date;
  status: boolean;
  data: T;
}

export interface IServerRequestSuccess {
  status?: boolean;
  data: any;
  message?: string;
}

export interface IServerRequestError {
  status?: boolean;
  code?: number;
  success?: boolean;
  message: string;
  error?: Record<string, any>;
  data?: Record<string, any>;
}