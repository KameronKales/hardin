import { FieldType } from "@holdequity/hardin";

export const username = new FieldType().thatIs.required();

export const password = new FieldType().thatIs.required();

export const email = new FieldType().thatIs.required();
