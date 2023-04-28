import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Paragraph} from "../model";


@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {

  @Input("rank")
  rank!: number

  @Input("paragraph")
  paragraph!: Paragraph

  @Input("focus")
  isFocus!: boolean

  @Output()
  onFocus = new EventEmitter();

  focusMe(){
    this.onFocus.emit(this.rank)
  }
}
