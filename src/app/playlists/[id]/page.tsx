import { notFound } from "next/navigation";
import { getPlaylist } from "../../../actions";
import { PlaylistWidget } from "../../../components";

type PlaylistPageParams = Readonly<{
  id: string;
}>;

export type PlaylistPageProps = Readonly<{
  params: PlaylistPageParams;
}>;

export const dynamic = "force-dynamic";

export default async function PlaylistPage({ params }: PlaylistPageProps) {
  const { data: playlist, error } = await getPlaylist({ id: params.id });

  if (error !== undefined) throw new Error(error);
  if (playlist === undefined) notFound();

  return <PlaylistWidget playlist={playlist} />;
}
