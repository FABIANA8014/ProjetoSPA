import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {

  aba1 = "Comedia";
  aba2 = "Romance";
  aba3 = "Terror";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goComedia();
  }

  goComedia() {
    this.router.navigate(['comedia'])
  }
  
  goRomance() {
    this.router.navigate(['romance'])
  }

  goTerror() {
    this.router.navigate(['terror'])
  }

}
