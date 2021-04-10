import { container } from "./core";

import "../settings";
import "../app/composition";
import "../dom/composition";
import "../random/composition";

import "../geometry/location/composition";
import "../geometry/shape/composition";
import "../l-system/composition";

import "../graphics/context/composition";
import "../graphics/drawer/composition";
import "../interpreter/stack/composition";
import "../interpreter/composition";

container.registerSingleton<Window>(() => window);
export { container };
