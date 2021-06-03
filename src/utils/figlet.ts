import figlet from "figlet";

import { paintText } from "./";

/**
 * Print a title on console
 *
 * @param {string} anyText
 * @param {string} color
 * @returns {void}
 */
export function writeTitle(anyText: string, color: string): void {
  console.log(paintText(figlet.textSync(anyText), color));
}
