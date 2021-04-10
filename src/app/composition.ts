import { container } from "../composition";
import { App } from "./implementation";
import { Application } from "./types";

container.registerSingleton<Application, App>();
