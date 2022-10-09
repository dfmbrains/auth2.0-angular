import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-box',
  templateUrl: './form-box.component.html',
  styleUrls: ['./form-box.component.scss']
})
export class FormBoxComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
