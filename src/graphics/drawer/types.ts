export type BrushSettings = {
  color?: Color;
  width?: PixelsAmount;
};

export interface Drawer {
  drawLine(line: Line, settings?: BrushSettings): void;
}
