export interface ShapeBuilder {
  createLine(start: Point, length: Length, angle?: Angle): Line;
}
