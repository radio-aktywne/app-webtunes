import { components } from "../../../api/pelican";

export type BindingListWidgetProps = {
  bindings: components["schemas"]["BindingList"];
  page: number;
  perPage: number;
};
