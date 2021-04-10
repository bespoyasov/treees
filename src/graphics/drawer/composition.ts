import { container } from "../../composition";
import { CanvasDrawer } from "./implementation";
import { Drawer } from "./types";

container.registerSingleton<Drawer, CanvasDrawer>();
