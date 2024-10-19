import { GetMediaProps } from "../../actions";
import { components } from "../../api/pelican";

export type Media = components["schemas"]["media_models_Media"];

export type UseGetMediaProps = GetMediaProps & {
  interval?: number;
};
