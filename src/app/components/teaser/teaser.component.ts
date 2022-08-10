import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {
  @Input() background!: string;
  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
