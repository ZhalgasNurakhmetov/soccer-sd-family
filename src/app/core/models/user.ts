export interface User {
  id: number;
  username: string;
  givenName: string;
  lastName: string;
  fatherName?: string;
  role: string;
  email: string;
  city?: string;
  phone?: string;
  userInfo?: string;
  players?: Player[];
}

export interface Player {
  id: number;
  givenName: string;
  lastName: string;
  fatherName: string;
  birthdate: string;
  city: string;
  height: string;
  weight: string;
  activeFoot: string;
  team: string;
  coachId: number;
  coach: Coach;
  photo: string;
  position: string;
}

export interface Coach {
  id: number;
  givenName: string;
  lastName: string;
  fatherName: string;
  email: string;
  city: string;
  phone: string;
}
