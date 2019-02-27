import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-key-link',
  templateUrl: './key-link.component.html',
  styleUrls: ['./key-link.component.scss']
})
export class KeyLinkComponent implements OnInit {

  @Input() src = '';
  @Input() link = '#';
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
