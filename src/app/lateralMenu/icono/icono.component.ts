import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.component.html',
  styleUrls: ['./icono.component.sass']
})
export class IconoComponent implements OnInit {
  @Input() ticon:string
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
