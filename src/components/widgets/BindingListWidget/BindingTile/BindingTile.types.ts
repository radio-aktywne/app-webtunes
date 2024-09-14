import { components } from "../../../../api/emitunes";

export type BindingTileLabels = {
  text: (id: string) => string;
};

export type BindingTileProps = {
  binding: components["schemas"]["bindings_models_Binding"];
  labels: BindingTileLabels;
};