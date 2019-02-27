import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  linkedinUrl = 'https://www.linkedin.com/in/zakklefkowits/';
  githubUrl = 'https://github.com/zakkl13';
  projectUrl = '/projects';
  email = 'zakkl13@vt.edu';
  currentYear = (new Date()).getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
