import { redirect } from "next/navigation";
import { listBindings } from "../../actions";
import { BindingListWidget } from "../../components";
import { createModifiedURLSearchParams } from "../../utils/url";

type BindingListPageSearchParams = Readonly<{
  page?: string | string[];
}>;

export type BindingListPageProps = Readonly<{
  searchParams: BindingListPageSearchParams;
}>;

export const dynamic = "force-dynamic";

const perPage = 5;

function redirectWithParams(params: URLSearchParams): never {
  redirect("/bindings?" + params.toString());
}

async function validatePage(params: BindingListPageSearchParams) {
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

  const { data: checkBindings, error: checkError } = await listBindings({
    limit: 0,
  });

  if (checkError !== undefined) throw new Error(checkError);

  const offset = perPage * (parsedPage - 1);

  if (checkBindings.count > 0 && offset >= checkBindings.count)
    redirectWithParams(
      createModifiedURLSearchParams(params, {
        page: (Math.ceil(checkBindings.count / perPage) || 1).toString(),
      }),
    );

  return parsedPage;
}

export default async function BindingListPage({
  searchParams,
}: BindingListPageProps) {
  const page = await validatePage(searchParams);
  const limit = perPage;
  const offset = perPage * (page - 1);

  const { data: bindings, error } = await listBindings({ limit, offset });

  if (error !== undefined) throw new Error(error);

  return (
    <BindingListWidget bindings={bindings} page={page} perPage={perPage} />
  );
}
