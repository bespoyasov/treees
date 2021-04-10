import { container } from "../composition";
import { SystemInterpreter } from "./types";
import { SystemToGeometryMapper } from "./implementation";

container.registerSingleton<SystemInterpreter, SystemToGeometryMapper>();
