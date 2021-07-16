export interface _Dataset {
  id: string;
  date: Date;
  name: string;
}

export class BaseDataset {
  id: string;
  date: Date;
  name: string;

  constructor(dataset: _Dataset) {
    this.id = dataset.id;
    this.date = dataset.date;
    this.name = dataset.name;
  }
}
