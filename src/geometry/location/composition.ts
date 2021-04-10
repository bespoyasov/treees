import { container } from "../../composition";
import { StartPointSelector } from "./implementation";
import { StartSelector } from "./types";

container.registerSingleton<StartSelector, StartPointSelector>();

/**
 * The `StartPointSelector` class is a standard implementation of `StartSelector`.
 * It can be used and registered without an interface to keep clearer names
 * if it won't or can't get any additional implementations.
 */
