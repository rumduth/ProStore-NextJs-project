import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert prisma object into a regular JS object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const stringValue = Number(num).toString(2);
  const [intPart, decimalPart] = stringValue.split(".");
  return decimalPart
    ? `${intPart}.${decimalPart.padEnd(2, "0")}`
    : `${intPart}.00`;
}
