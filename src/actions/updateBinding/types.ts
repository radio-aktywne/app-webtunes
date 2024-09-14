export type UpdateBindingProps = {
  id: string;
  update: {
    id?: string;
    playlist?: string;
    media?: string;
    rank?: string;
  };
};
