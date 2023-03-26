export interface User {
  _id: string;
  email: string;
  name: string;
  avatar: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface UpdateProfileData {
  name: string;
  avatar: string;
}

export interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

export interface Room {
  _id: string;
  name: string;
  users: User[];
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface Message {
  _id: string;
  user: User;
  text: string;
  createdAt: string;
}