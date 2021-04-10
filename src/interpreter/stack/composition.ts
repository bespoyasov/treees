import { container } from "../../composition";
import { JointsStack } from "./implementation";
import { Stack } from "./types";

container.registerSingleton<Stack<TreeJoint>, JointsStack>();
