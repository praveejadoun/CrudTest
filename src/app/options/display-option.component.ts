
import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../models/Option.model';

@Component({
  selector: 'app-display-option',
  templateUrl: './display-option.component.html',
  styleUrls: ['./display-option.component.css']
})
export class DisplayOptionComponent implements OnInit {
  @Input() option:Option;
  constructor() { }

  ngOnInit() {
  }

}
