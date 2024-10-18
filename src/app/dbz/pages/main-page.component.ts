import { Character } from './../interfaces/character.interfaces';
import { Component } from '@angular/core';
import { compileNgModule } from '@angular/compiler';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter( characters: Character): void{
   this.dbzService.addCharacter(characters);
  }

}
