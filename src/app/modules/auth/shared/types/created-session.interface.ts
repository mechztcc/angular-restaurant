export interface ICreatedSession {
  user?: {
    id: number;
    email: string;
    password: string;
    status: string;
    roles: string;
  };
  token: string;
}
