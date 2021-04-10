import { container } from "../composition/core";
import { Random } from "./implementation";
import { RandomSource } from "./types";

container.registerSingleton<RandomSource, Random>();
