import { redirect } from "next/navigation";
import { listPlaylists } from "../../actions";
import { PlaylistListWidget } from "../../components";
import { createModifiedURLSearchParams } from "../../utils/url";

type PlaylistListPageSearchParams = Readonly<{
  page?: string | string[];
}>;

export type PlaylistListPageProps = Readonly<{
  searchParams: PlaylistListPageSearchParams;
}>;

export const dynamic = "force-dynamic";

const perPage = 5;

function redirectWithParams(params: URLSearchParams): never {
  redirect("/playlists?" + params.toString());
}

async function validatePage(params: PlaylistListPageSearchParams) {
  const page = params.page;

  if (page === undefined)
    redirectWithParams(createModifiedURLSearchParams(params, { page: "1" }));

  if (Array.isArray(page))
    redirectWithParams(
      createModifiedURLSearchParams(params, { page: page[0] }),
    );

  const parsedPage = parseInt(page, 10);

  if (isNaN(parsedPage) || parsedPage < 1)
    redirectWithParams(createModifiedURLSearchParams(params, { page: "1" }));

  const { data: checkPlaylists, error: checkError } = await listPlaylists({
    limit: 0,
  });

  if (checkError !== undefined) throw new Error(checkError);

  const offset = perPage * (parsedPage - 1);

  if (checkPlaylists.count > 0 && offset >= checkPlaylists.count)
    redirectWithParams(
      createModifiedURLSearchParams(params, {
        page: (Math.ceil(checkPlaylists.count / perPage) || 1).toString(),
      }),
    );

  return parsedPage;
}

export default async function PlaylistListPage({
  searchParams,
}: PlaylistListPageProps) {
  const page = await validatePage(searchParams);
  const limit = perPage;
  const offset = perPage * (page - 1);

  const { data: playlists, error } = await listPlaylists({ limit, offset });

  if (error !== undefined) throw new Error(error);

  return (
    <PlaylistListWidget playlists={playlists} page={page} perPage={perPage} />
  );
}
