import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

export interface PlayerCreateFormModel {
  givenName: string;
  lastName: string;
  fatherName: string;
  birthdate: NgbDate;
  city: string;
  height: string;
  weight: string;
  activeFoot: string;
  team: string;
}

export interface PlayerCreateModel {
  givenName: string;
  lastName: string;
  fatherName: string;
  birthdate: string;
  city: string;
  height: string;
  weight: string;
  activeFoot: string;
  team: string;
}
