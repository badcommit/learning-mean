import { Component } from '@angular/core';
import {MOCK_PARAGRAPHS, Paragraph} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  paragraphs!: Paragraph[]
  title!: string
  selected!: number


  ngOnInit(){
    this.paragraphs = MOCK_PARAGRAPHS
    this.selected = 0
    this.title = this.paragraphs[this.selected].title
  }

  onChildFocus(rank: number) {
    this.selected = +rank
  }

}
