export class Quote {
    showDetails: boolean;
    public upvotes: number;
    public downvotes: number;
    constructor(public id: number, public name: string, public quote: string, public author: string, public datePosted: Date){
        this.showDetails = false;
        this.upvotes = 0;
        this.downvotes = 0;
    }
}
