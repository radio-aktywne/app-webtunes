import { notFound } from "next/navigation";
import { getBinding } from "../../../actions";
import { BindingWidget } from "../../../components";

type BindingPageParams = Readonly<{
  id: string;
}>;

export type BindingPageProps = Readonly<{
  params: BindingPageParams;
}>;

export const dynamic = "force-dynamic";

export default async function BindingPage({ params }: BindingPageProps) {
  const { data: binding, error } = await getBinding({ id: params.id });

  if (error !== undefined) throw new Error(error);
  if (binding === undefined) notFound();

  return <BindingWidget binding={binding} />;
}
