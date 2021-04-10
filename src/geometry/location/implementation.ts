import { AppSettings } from "../../settings";
import { StartSelector } from "./types";

export class StartPointSelector implements StartSelector {
  constructor(private settings: AppSettings) {}

  public selectStart(): Point {
    const { width, height } = this.settings.canvasSize;

    return {
      x: Math.round(width / 2),
      y: height,
    };
  }
}
