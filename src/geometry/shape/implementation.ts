import { ShapeBuilder } from "./types";

export class CoreShapeBuilder implements ShapeBuilder {
  public createLine(start: Point, length: Length, angle: Angle = 0): Line {
    const radians = (angle * Math.PI) / 180;
    const end: Point = {
      x: start.x + length * Math.sin(radians),
      y: start.y - length * Math.cos(radians),
    };

    return { start, end };
  }
}
