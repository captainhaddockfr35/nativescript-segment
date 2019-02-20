import { Observable } from 'tns-core-modules/data/observable';
import { Segment } from 'nativescript-segment';

export class HelloWorldModel extends Observable {
  public message: string;
  private segment: Segment;

  constructor() {
    super();

    this.segment = new Segment();
    this.segment.init("3c1qI1Kp8S0C7ryPRS3c56nTlF9cbM6k"); // pwuIG8SKeZy1G9hi2oHcHgWBNhhF4VZZ
    this.segment.track();
    this.message = this.segment.message;
  }
}
