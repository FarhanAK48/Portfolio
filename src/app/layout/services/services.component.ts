import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  skillArray = ['HTML','CSS','Bootstrap','Tailwind Css','JavaScript','Angular','Ionic','Node js']
  ngOnInit(): void {
  }

}
