import chalk from "chalk";

/**
 * Return a painted text
 *
 * @param {string} text
 * @param {string} color
 * @returns {string}
 */
export function paintText(text: string, color: string): string {
  return chalk[color](text);
}
