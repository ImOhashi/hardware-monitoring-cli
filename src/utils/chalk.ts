import chalk from "chalk";

/**
 * Return a painted text
 *
 * @param {string} text
 * @param {string} color
 * @returns {string}
 */
export function paintText(text: string, color: string): string {
  try {
    return chalk[color](text);
  } catch (err) {
    throw new Error(err);
  }
}
