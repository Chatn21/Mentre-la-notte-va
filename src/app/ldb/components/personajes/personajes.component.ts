import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ldb-addpersonajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

@Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter():void{


    if (this.character.name.length === 0)return;

    this.onNewCharacter.emit(this.character);


    this.character={ name: '', power: 0};
  }

}
