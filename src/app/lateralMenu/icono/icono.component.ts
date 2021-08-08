import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icono',
  templateUrl: './icono.component.html',
  styleUrls: ['./icono.component.sass']
})
export class IconoComponent implements OnInit {
  @Input() ticon:string
  @Input() route:string
  constructor(private router:Router) {
   }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate([this.route])
  }

}
