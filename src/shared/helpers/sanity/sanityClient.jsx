import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});
