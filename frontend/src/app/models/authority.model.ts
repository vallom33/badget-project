import { User } from './user.model';

export interface Authority {
  id: number;
  user: User;
  role: string;
}
