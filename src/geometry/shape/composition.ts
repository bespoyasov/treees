import { container } from "../../composition";
import { CoreShapeBuilder } from "./implementation";
import { ShapeBuilder } from "./types";

container.registerSingleton<ShapeBuilder, CoreShapeBuilder>();

/**
 * The `LineBuilder` class is a standard implementation of `ShapeBuilder`.
 * It can be used and registered without an interface to keep clearer names
 * if it won't or can't get any additional implementations.
 */
