export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type SearchParamsChanges = {
  [key: string]: string | undefined;
};

export function createURLSearchParams(searchParams: SearchParams) {
  return new URLSearchParams(
    Object.entries(searchParams).flatMap(([key, value]) =>
      value === undefined
        ? []
        : Array.isArray(value)
        ? value.map((item) => [key, item])
        : [[key, value]],
    ),
  );
}

export function createModifiedURLSearchParams(
  params: SearchParams,
  changes: SearchParamsChanges,
) {
  const newParams = createURLSearchParams(params);
  for (const key in changes) {
    const value = changes[key];
    if (value === undefined) newParams.delete(key);
    else newParams.set(key, value);
  }
  return newParams;
}
