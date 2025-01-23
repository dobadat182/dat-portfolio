import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { projectType } from "./projectType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { Home } from "./home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, Home, projectType, categoryType, postType, authorType],
};
