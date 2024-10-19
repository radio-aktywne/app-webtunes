import { components } from "../../../api/pelican";

export type MediaListWidgetProps = {
  media: components["schemas"]["MediaList"];
  page: number;
  perPage: number;
};
