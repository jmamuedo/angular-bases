import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  //esto me permite coger toda la información que esté emitiendo el Servicio
  constructor( private dbzService: DbzService){}

  get characters(): Character[] {
    // los puntos suspensivos hacen como una copia e los carateres que yo tenga en el Servicio
    return[...this.dbzService.characters];
  }

  onDeleteCharacter( id: string ):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( characters: Character ):void {
    this.dbzService.addCharacter(characters);
  }

}
