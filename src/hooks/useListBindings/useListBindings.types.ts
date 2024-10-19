import { ListBindingsProps } from "../../actions";
import { components } from "../../api/pelican";

export type BindingList = components["schemas"]["BindingList"];

export type UseListBindingsProps = ListBindingsProps & {
  interval?: number;
};
