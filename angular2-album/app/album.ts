export class Album {
  constructor(
    public id: string,
    public name: string,
    public type: string,
    public albumType: string,
    public image?: string
  ) {}
}
