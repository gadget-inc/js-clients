import type { GadgetBelongsToConfig, GadgetHasManyConfig, GadgetHasOneConfig } from "../../internal/gql/graphql.js";

export type RelationshipFieldConfig = GadgetBelongsToConfig | GadgetHasManyConfig | GadgetHasOneConfig;
