import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ldb-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name:'bunnix',
    power: 2000,
  }];

  // onDelete = Index value : number
  @Output() onDelete = new EventEmitter<string>();

deleteCharacter(id?: string):void {
  // TODO: Emitir el ID del personaje
  if (!id) return;
  this.onDelete.emit(id);
}


}
