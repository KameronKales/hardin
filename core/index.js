import { CompositeMixins } from "./composite-core";

export class Field extends CompositeMixins() {
  constructor() {
    super();
    this.editable = false;
    this.visible = true;
    this.url = null;
    this.displayLabel = null;
    this.part1 = null;
    this.part2 = null;
    this.with = this.copy();
    this.and = this.with;
    this.thatIs = this.and;
    this._this = this;
  }
}
