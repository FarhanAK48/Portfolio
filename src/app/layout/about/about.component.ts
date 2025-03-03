import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor()  {
    this.applyAnimation = true;
   }
  applyAnimation = false;

  ngOnInit(): void {
  }
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Farhan.pdf'; // Path to the CV file
    link.download = 'My_CV.pdf'; // Name of the file when downloaded
    link.click();
  }

}
