import type { SchemaTypeDefinition } from "sanity";

import { hero } from "./hero";
import { about } from "./about";
import { contact } from "./contact";
import { industry } from "./industry";
import { project } from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about, contact, industry, project],
};
