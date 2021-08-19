export const ChangeFuncs = (coreClass) =>
  class extends coreClass {
    copy() {
      this._this = Object.assign(
        Object.create(Object.getPrototypeOf(this)),
        this
      );
      return this;
    }
    label(label) {
      this.copy();
      this.displayLabel = label;
      this.copy();
      return this._this;
    }

    isEditable() {
      this.copy();
      this.editable = true;
      this.copy();
      return this._this;
    }

    editableWhen(editFunc) {
      this.copy();
      this.editable = editFunc;
      this.copy();
      return this._this;
    }
    isVisible() {
      this.copy();
      this.visible = true;
      this.copy();
      return this._this;
    }

    visibleWhen(visibleFunc) {
      this.copy();
      this.visible = visibleFunc;
      this.copy();
      return this._this;
    }

    additionalInfo(data) {
      this.copy();
      this.part1 = data.part1;
      this._this.part2 = data.part2;
      this.copy();
      return this._this;
    }
  };
