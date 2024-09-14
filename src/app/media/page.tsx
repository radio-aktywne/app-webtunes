import { redirect } from "next/navigation";
import { listMedia } from "../../actions";
import { MediaListWidget } from "../../components";
import { createModifiedURLSearchParams } from "../../utils/url";

type MediaListPageSearchParams = Readonly<{
  page?: string | string[];
}>;

export type MediaListPageProps = Readonly<{
  searchParams: MediaListPageSearchParams;
}>;

export const dynamic = "force-dynamic";

const perPage = 5;

function redirectWithParams(params: URLSearchParams): never {
  redirect("/media?" + params.toString());
}

async function validatePage(params: MediaListPageSearchParams) {
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

  const { data: checkMedia, error: checkError } = await listMedia({ limit: 0 });

  if (checkError !== undefined) throw new Error(checkError);

  const offset = perPage * (parsedPage - 1);

  if (checkMedia.count > 0 && offset >= checkMedia.count)
    redirectWithParams(
      createModifiedURLSearchParams(params, {
        page: (Math.ceil(checkMedia.count / perPage) || 1).toString(),
      }),
    );

  return parsedPage;
}

export default async function MediaListPage({
  searchParams,
}: MediaListPageProps) {
  const page = await validatePage(searchParams);
  const limit = perPage;
  const offset = perPage * (page - 1);

  const { data: media, error } = await listMedia({ limit, offset });

  if (error !== undefined) throw new Error(error);

  return <MediaListWidget media={media} page={page} perPage={perPage} />;
}
