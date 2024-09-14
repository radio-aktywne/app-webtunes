import { components } from "../../../api/emitunes";

export type BindingListWidgetProps = {
  bindings: components["schemas"]["BindingList"];
  page: number;
  perPage: number;
};
