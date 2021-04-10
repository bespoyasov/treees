import { RandomSource } from "./types";

export class Random implements RandomSource {
  public getValue(): number {
    return Math.random();
  }

  public getBetweenInclusive(min: number, max: number): number {
    return Math.floor(this.getValue() * (max - min + 1) + min);
  }
}
