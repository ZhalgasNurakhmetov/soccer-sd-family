export interface User {
  id: string;
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
  id: string;
  givenName: string;
  lastName: string;
  fatherName: string;
  birthdate: string;
  city: string;
  height: string;
  weight: string;
  activeFoot: string;
  team: string;
  coachId: string;
  coach: Coach;
  photo: string;
  position: string;
}

export interface Coach {
  id: string;
  givenName: string;
  lastName: string;
  fatherName: string;
  email: string;
  city: string;
  phone: string;
}
