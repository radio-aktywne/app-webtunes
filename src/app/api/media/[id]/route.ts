import { emitunes } from "../../../../api";

type Params = {
  id: string;
};

type Context = {
  params: Params;
};

function createBadRequestResponse(error?: string) {
  return Response.json(
    { error: error || "Invalid request." },
    { status: 400, statusText: "Bad Request" },
  );
}

function createGenericErrorResponse(error?: string) {
  return Response.json(
    { error: error || "Internal Server Error." },
    { status: 500, statusText: "Internal Server Error" },
  );
}

function createNotFoundResponse(error?: string) {
  return Response.json(
    { error: error || "Media not found." },
    { status: 404, statusText: "Not Found" },
  );
}

export async function GET(request: Request, { params }: Context) {
  try {
    const { data, error, response } = await emitunes.GET(
      "/media/{id}/content",
      {
        params: {
          path: { id: params.id },
        },
        parseAs: "stream",
      },
    );

    if (error) {
      if (response.status === 404) return createNotFoundResponse();
      return createGenericErrorResponse("Downloading media content failed.");
    }

    const headers = new Headers();
    const keepHeaders = [
      "Content-Length",
      "Content-Type",
      "ETag",
      "Last-Modified",
    ];

    for (const key of keepHeaders) {
      const value = response.headers.get(key);
      if (value !== null) headers.set(key, value);
    }

    const options = { status: 200, statusText: "OK", headers: headers };

    return new Response(data, options);
  } catch (error) {
    return createGenericErrorResponse("Downloading media content failed.");
  }
}

export async function PUT(request: Request, { params }: Context) {
  const contentType = request.headers.get("Content-Type");
  if (contentType === null)
    return createBadRequestResponse("Content-Type header is missing.");

  try {
    const { error, response } = await emitunes.PUT("/media/{id}/content", {
      params: {
        path: { id: params.id },
        header: { "Content-Type": contentType },
      },
      body: request.body as unknown as undefined,
      bodySerializer: (body) => body,
      duplex: "half",
    });

    if (error) {
      if (response.status === 404) return createNotFoundResponse();
      if (response.status === 400) return createBadRequestResponse();
      return createGenericErrorResponse("Uploading media content failed.");
    }

    const options = { status: 204, statusText: "No Content" };

    return new Response(null, options);
  } catch (error) {
    return createGenericErrorResponse("Uploading media content failed.");
  }
}
