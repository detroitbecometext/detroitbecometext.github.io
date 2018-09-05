export class Chapter 
{
    public Number: string;
    public Title: string;
    public Page: string;
    public Image: string;
    public Status: Status;

    constructor(number: string, title: string, page: string, image: string, status: Status) 
    {
        this.Number = number;
        this.Title = title;
        this.Page = "assets/html/" + page;
        this.Image = "assets/images/" + image;
        this.Status = status;
    }
}

export enum Status 
{
    Done,
    InProgress,
    NotStarted
}