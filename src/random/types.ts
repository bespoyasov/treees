export interface RandomSource {
  getValue(): number;
  getBetweenInclusive(min: number, max: number): number;
}
