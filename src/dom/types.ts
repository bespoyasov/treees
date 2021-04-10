export interface ElementSource {
  getElement(id: string): Nullable<HTMLElement>;
}

export interface PixelRatioSource {
  devicePixelRatio?: number;
}
