import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Derrick', 'The way I see it, every life is a pile of good things and bad things. The good things don’t always soften the bad things, but vice versa, the bad things don’t always spoil the good things and make them unimportant.', 'Doctor Who', new Date(2021,2,25)),
    new Quote(2, 'Daniel', 'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.', 'Maya Angelou', new Date(2021,2,27)),
    new Quote(3, 'Maria', 'There’s more to life than basketball. The most important thing is your family and taking care of each other and loving each other no matter what.', 'Stephen Curry', new Date(2021,2,22)),
    new Quote(4, 'Nico', 'Get busy living or get busy dying.', 'Stephen King', new Date(2021,1,18)),
    new Quote(5, 'Vanessa', 'Many of life’s failures are people who did not realize how close they were to success when they gave up.', 'Thomas A. Edison', new Date(2021,0,7)),
    new Quote(6, 'Emenalo', 'You can’t put a limit on anything. The more you dream, the farther you get.', 'Michael Phelps', new Date(2021,0,21)),
    new Quote(7, 'Ciku', 'I believe you make your day. You make your life. So much of it is all perception, and this is the form that I built for myself. I have to accept it and work within those compounds, and it’s up to me.', 'Brad Pitt', new Date(2021,1,4)),
    new Quote(8, 'Waiyaki', 'IA lot of people give up just before they’re about to make it. You know you never know when that next obstacle is going to be the last one.', 'Cuck Norris', new Date(2021,2,3)),
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }

  toggleQuote(index){
    this.quotes[index].showDetails =! this.quotes[index].showDetails;
  }

  deleteThis(toDelete, index){
    if(toDelete){
      let destroy= confirm(`Are you sure you want to delete this Goal?`)

      if (destroy){
      this.quotes.splice(index, 1);
      }
    }
  }

  upvote(i) {
    this.quotes[i].upvotes ++;
  }
  downvote(i) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
