import { components } from "../../../../api/pelican";

export type UploadButtonProps = {
  media: components["schemas"]["media_models_Media"];
  label: string;
  onUpload?: (payload: File | null) => Promise<void>;
};
