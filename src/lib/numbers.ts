import numeral from "numeral";

export function humanReadableNumber(value: number): string {
  return numeral(value).format("0.[0]a");
}
