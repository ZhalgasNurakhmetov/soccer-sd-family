import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityListService {

  cities = ['Нур-Султан', 'Алматы'];
  feet = ['Правая', 'Левая'];
  teams = ['2000', '2001', '2002', '2003'];
  positions = ['Вратарь', 'Защитник', 'Полузащитник', 'Нападающий'];

  constructor() { }
}
