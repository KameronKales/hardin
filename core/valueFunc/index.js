export const ValueFuncs = (superClass) =>
  class extends superClass {
    getLabel() {
      return this.displayLabel;
    }

    getEditStatus() {
      if (typeof this.editable === "function") {
        return this.editable();
      }
      return this.editable;
    }

    getVisibleStatus() {
      if (typeof this.visible === "function") {
        return this.visible();
      }
      return this.visible;
    }
  };
