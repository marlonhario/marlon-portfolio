import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function decodeCfEmail(encoded: string) {
  const key = parseInt(encoded.substring(0, 2), 16);
  let email = "";

  for (let i = 2; i < encoded.length; i += 2) {
    const charCode = parseInt(encoded.substring(i, i + 2), 16) ^ key;
    email += String.fromCharCode(charCode);
  }

  return email;
}

