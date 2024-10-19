import { GetBindingProps } from "../../actions";
import { components } from "../../api/pelican";

export type Binding = components["schemas"]["bindings_models_Binding"];

export type UseGetBindingProps = GetBindingProps & {
  interval?: number;
};
