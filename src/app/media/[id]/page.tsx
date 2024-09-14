import { notFound } from "next/navigation";
import { getMedia } from "../../../actions";
import { MediaWidget } from "../../../components";

type MediaPageParams = Readonly<{
  id: string;
}>;

export type MediaPageProps = Readonly<{
  params: MediaPageParams;
}>;

export const dynamic = "force-dynamic";

export default async function MediaPage({ params }: MediaPageProps) {
  const { data: media, error } = await getMedia({ id: params.id });

  if (error !== undefined) throw new Error(error);
  if (media === undefined) notFound();

  return <MediaWidget media={media} />;
}
