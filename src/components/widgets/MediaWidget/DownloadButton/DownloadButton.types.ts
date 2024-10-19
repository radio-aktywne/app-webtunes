import { components } from "../../../../api/pelican";

export type DownloadButtonProps = {
  media: components["schemas"]["media_models_Media"];
  label: string;
};
