export interface IAuthContextType {
  currentUser: string | {};
  login: (inputs: any) => void;
  logout: (inputs: any) => void;
}
