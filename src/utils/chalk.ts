import chalk from "chalk";

export function paintText(text: string, color: string): string {
  return chalk[color](text);
}
