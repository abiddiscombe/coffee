# coffee

A web map of coffee shops with support for location filtering.\
Built with [NextJS](https://nextjs.org/docs), [Tailwind CSS](https://tailwindcss.com/docs/styling-with-utility-classes), [MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/), and Ordnance Survey's [NGD Tiles API](https://www.ordnancesurvey.co.uk/products/os-ngd-api-tiles).

> Disclaimer: The accuracy of information within this application represents a best-effort and is not guaranteed.

## Rationale

- I like coffee and enjoy discovering new places.
- This tool might help advertise local independent businesses.
- A nice opportunity to play with MapLibre GL JS and the use of a CMS.

## Development

Run the local development server with `pnpm dev`.

For production, this project builds the NextJS app inside a [docker](https://nextjs.org/docs/app/getting-started/deploying#docker) with standalone export mode. The steps to create a new container image are currently manual - if this project gains traction I'll seek to enhance the CI/CD. For now, I'm currently pushing the images to a private self-hosted OCI registry.

### Environment Variables

`NEXT_PRIVATE_CMS_HOST` \
[ Required ] The hostname of the CMS service instance.

`NEXT_PRIVATE_CMS_TOKEN` \
[ Required ] A valid CMS user token with read/write access to the relevant collection(s).

`NEXT_PRIVATE_CMS_COLLECTION` \
[ Required ] The CMS Collection name / identifier which contains the location data.

`NEXT_PRIVATE_OS_API_KEY` \
[ Required ] A valid Ordnance Survey API Key which provides access to the NGD Tiles API.
