import { Core } from "../core";

const data = new Core().with.label("Kameron Kales").and.isEditable();

console.log({ data });

console.log(data.getLabel());

const newerData = data.and.editableWhen(() => false);

console.log({ newerData });

console.log("editable", newerData.getEditStatus());

console.log("data is still editable", data.getEditStatus());

const notVisible = newerData.with.visibleWhen(() => false);

console.log("notVisible", notVisible.getVisibleStatus());

const visibleNow = notVisible.with.isVisible();

console.log("visible can be seen", visibleNow.getVisibleStatus());
