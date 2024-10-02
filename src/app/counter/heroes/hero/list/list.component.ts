import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesNames : string[]= ['Tormenta','Magneto','Sakura','Jill','Spiderman'];
  public deletedHero?: string;

  removeLasHero():void{
    this.deletedHero = this.heroesNames.pop();
  }

}
