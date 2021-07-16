import {BaseDataset} from "../../dataset";

export interface _Dataset {
  id: string;
  date: Date;
  name: string;
  sectionBSpecificFieldX: number;
  sectionBSpecificFieldY: number;
}

export class Dataset extends BaseDataset {
  sectionBSpecificFieldX: number;
  sectionBSpecificFieldY: number;

  constructor(dataset: _Dataset) {
    super(dataset);
    this.sectionBSpecificFieldX = dataset.sectionBSpecificFieldX;
    this.sectionBSpecificFieldY = dataset.sectionBSpecificFieldY;
    this.doBSomethingSpecific();
  }

  doBSomethingSpecific() {
    console.log("doing something specific")
  }
}
