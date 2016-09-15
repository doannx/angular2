export class Album {
  constructor(
    public id: number,
    public name: string,
    public type: string,
    public albumType: string,
    public image?: string
  ) {}
}
