export type additionalInfo = {
  part1?: string;
  part2?: string;
};

export type FieldTypeModel = {
  editable?: boolean | (() => boolean);
  visible?: boolean | (() => boolean);
  url?: string;
  displayLabel?: string;
  part1?: string;
  part2?: string;
  _this: any;
  copy: any;
  with: any;
  thatIs: any;
  label: (s: string) => any;
  isEditable: () => any;
  editableWhen: (fn: () => boolean) => any;
  isVisible: () => any;
  visibleWhen: (fn: () => boolean) => any;
  additionalInfo: (info: additionalInfo) => any;
};
