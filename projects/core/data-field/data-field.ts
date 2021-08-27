import { DataFieldModel } from "./data-field-model";

export class DataField implements DataFieldModel {
  f: any;
  constructor(field: any) {
    this.f = field;
  }

  getLabel(): string {
    return this.f.displayLabel;
  }

  getEditStatus(): boolean {
    if (typeof this.f.editable === "function") {
      return this.f.editable();
    }
    return this.f.editable;
  }

  getVisibleStatus(): boolean {
    if (typeof this.f.visible === "function") {
      return this.f.visible();
    }
    return this.f.visible;
  }
}
