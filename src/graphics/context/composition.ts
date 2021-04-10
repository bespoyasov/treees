import { container } from "../../composition";
import { CanvasContextProvider } from "./implementation";
import { DrawingContextProvider } from "./types";

container.registerSingleton<DrawingContextProvider, CanvasContextProvider>();
