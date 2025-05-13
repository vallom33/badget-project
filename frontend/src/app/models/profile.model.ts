import { User } from './user.model';

export interface Profile {
  id?: number;
  libelle: string;
  nni: string;
  phone?: string;
  photoUrl?: string;
  // نُعرّف الـ user على أنه Partial<User> مع id إلزامي
  user: { id: number } & Partial<User>;
}
