export interface ICurrentUserInfo {
  id: number;
  username: string;
  email: string;
  password: string;
  img?: null;
}
export interface IAuthContextType {
  currentUser: ICurrentUserInfo;
  login: (inputs: any) => void;
  logout: (inputs: any) => void;
}
