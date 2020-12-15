import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-comp',
  templateUrl: './interpolation-comp.component.html',
  styleUrls: ['./interpolation-comp.component.scss']
})
export class InterpolationCompComponent implements OnInit {

  constructor() { }
  //rootName="CocoBen";//definition des variables
  @Input() rootName: string ;//definition d(une propriete personnalisée)
  lalalind="Montenegro"

  ngOnInit(): void {
  }
  getName(){//definition d'une meth'
  return this.lalalind;
  }
}
