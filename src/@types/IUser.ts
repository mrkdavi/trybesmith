export interface IUser {
  id: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserModelReturn {
  id: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserDataRequest {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserTokenData {
  id: number;
}