import { container } from "../composition";
import { Builder } from "./implementation";
import { SystemBuilder } from "./types";

container.registerSingleton<SystemBuilder, Builder>();

/**
 * The `Builder` class is a standard implementation of `SystemBuilder`.
 * It can be used and registered without an interface to keep clearer names
 * if it won't or can't get any additional implementations.
 */
