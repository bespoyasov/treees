import { container } from "../composition";

export type AppSettings = {
  canvasSize: Size;

  rules: RuleSet;
  initiator: Axiom;
  iterations: IterationsCount;

  stemLength: Length;
  jointAngle: Angle;

  leafWidth: PixelsAmount;
  stemWidth: PixelsAmount;
};

export const settings: AppSettings = {
  canvasSize: {
    width: 800,
    height: 600,
  },

  iterations: 12,
  initiator: "22220",
  rules: {
    "1": "21",
    "0": "1[20]20",
  },

  stemLength: 10,
  jointAngle: 16,
  leafWidth: 4,
  stemWidth: 16,
};

container.registerSingleton<AppSettings>(() => settings);
