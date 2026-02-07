import { getAll } from "@/data/cms";
import { LocationFeature } from "@/utilities/types/location";

export const GET = async () => {
  const [status, body] = await getAll();

  if (status !== 200 || !body) {
    return Response.json(
      {
        error: "Upstream service unavailable.",
      },
      { status: 500 },
    );
  }

  const responseBody: {
    type: "FeatureCollection";
    features: LocationFeature[];
  } = {
    type: "FeatureCollection",
    features: body.data.map((location) => ({
      type: "Feature",
      properties: {
        id: location.id,
        name: location.name,
        metadata: {
          tags: location.metadata_tags ?? [],
        },
      },
      geometry: {
        type: "Point",
        coordinates: location.location.coordinates,
      },
    })),
  };

  return Response.json(responseBody);
};
