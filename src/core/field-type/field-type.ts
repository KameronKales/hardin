import { FieldTypeModel, additionalInfo } from "./field-type-model";

export class FieldType implements FieldTypeModel {
  editable: boolean = false;
  visible: boolean = true;
  url: string | undefined = undefined;
  part1: string | undefined = undefined;
  part2: string | undefined = undefined;
  with: this;
  and: this;
  thatIs: this;
  displayLabel: string | undefined = undefined;
  _this: this = this;
  constructor() {
    this.with = this.copy();
    this.and = this.with;
    this.thatIs = this.and;
    this._this = this;
  }
  copy(): this {
    this._this = Object.assign(
      Object.create(Object.getPrototypeOf(this)),
      this
    );
    return this;
  }

  label(label: string): this {
    this.copy();
    this.displayLabel = label;
    this.copy();
    return this._this;
  }

  isEditable(): this {
    this.copy();
    this.editable = true;
    this.copy();
    return this._this;
  }

  editableWhen(editFunc): this {
    this.copy();
    this.editable = editFunc;
    this.copy();
    return this._this;
  }

  isVisible(): this {
    this.copy();
    this.visible = true;
    this.copy();
    return this._this;
  }

  visibleWhen(visibleFunc: any): this {
    this.copy();
    this.visible = visibleFunc;
    this.copy();
    return this._this;
  }

  additionalInfo(data: additionalInfo): this {
    this.copy();
    this.part1 = data.part1;
    this.part2 = data.part2;
    this.copy();
    return this._this;
  }
}
