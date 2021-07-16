import {BaseDataset} from "../../dataset";

export interface _Dataset {
  id: string;
  date: Date;
  name: string;
  sectionASpecificFieldX: string;
  sectionBSpecificFieldY: string;
}

export class Dataset extends BaseDataset {
  specificFieldX: string;
  specificFieldY: string;

  constructor(dataset: _Dataset) {
    super(dataset);
    this.specificFieldX = dataset.sectionASpecificFieldX;
    this.specificFieldY = dataset.sectionBSpecificFieldY;
    this.doASomethingSpecific();
  }

  doASomethingSpecific() {
    console.log("doing something specific")
  }
}
