import { getOne } from "@/data/cms";
import { LocationFeatureExtended } from "@/utilities/types/location";

export const GET = async (
  _: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const id = (await params).id;
  const [status, body] = await getOne(id);

  if (status !== 200) {
    return Response.json(
      {
        error:
          status === 404
            ? "Location not found."
            : "Upstream service unavailable.",
      },
      { status: status === 404 ? 404 : 500 },
    );
  }

  const responseBody: LocationFeatureExtended = {
    type: "Feature",
    properties: {
      id: body.data.id,
      name: body.data.name,
      metadata: {
        tags: body.data.metadata_tags ?? [],
        website: body.data.metadata_website,
        summary: body.data.metadata_summary,
      },
    },
    geometry: {
      type: "Point",
      coordinates: body.data.location.coordinates,
    },
  };

  return Response.json(responseBody);
};
