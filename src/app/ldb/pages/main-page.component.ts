import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { ldbService } from '../services/ldb.service';

@Component({
  selector: 'app-ldb-main-name',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent  {
constructor ( private ldbService: ldbService   ) {

}
get character():Character[]{
  return [...this.ldbService.characters];
}

onDeleteCharacter(id: string):void {
this.ldbService.onDeleteCharacter(id)
}

onNewCharacter( character: Character) {
  this.ldbService.addCharacter(character);
}
}
