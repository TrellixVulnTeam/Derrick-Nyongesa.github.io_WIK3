import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() toDelete = new EventEmitter<boolean>();
  quotes: any;

  deleteQuote(deleteNow:boolean){
    this.toDelete.emit(deleteNow);
  }

  upvotes=0;
  downvotes=0;

  constructor() { }

  ngOnInit(): void {
  }

}
