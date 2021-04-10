// The `Instruction` type would be more extensible
// if settings were grouped in a sub-object.

export type Instruction = {
  line: Line;
  color?: Color;
  width?: PixelsAmount;
};

export interface SystemInterpreter {
  translate(expression: Expression): List<Instruction>;
}
