import { ListBindingsProps } from "../../actions";
import { components } from "../../api/emitunes";

export type BindingList = components["schemas"]["BindingList"];

export type UseListBindingsProps = ListBindingsProps & {
  interval?: number;
};
