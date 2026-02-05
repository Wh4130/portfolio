import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 這個函數確保 tailwind CSS 的 className，遇到衝突的屬性時，使用後面的來覆蓋前面的
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}