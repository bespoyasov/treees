import { container } from "./composition";
import { Application } from "./app/types";

const app = container.get<Application>();
app.start();
