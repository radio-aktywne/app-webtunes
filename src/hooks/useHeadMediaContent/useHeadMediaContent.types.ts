import { GetMediaProps } from "../../actions";

export type Headers = {
  [key: string]: string;
};

export type UseHeadMediaContentProps = GetMediaProps & {
  interval?: number;
};
