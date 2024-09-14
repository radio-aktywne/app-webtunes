import { GetBindingProps } from "../../actions";
import { components } from "../../api/emitunes";

export type Binding = components["schemas"]["bindings_models_Binding"];

export type UseGetBindingProps = GetBindingProps & {
  interval?: number;
};
