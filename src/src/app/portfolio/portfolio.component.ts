import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  src: string = '';
  showImage: boolean = false;


  displayData(imgSrc: string) {
    this.src = imgSrc;
    this.showImage = true;
  }

}
