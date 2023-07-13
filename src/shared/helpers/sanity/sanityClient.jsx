import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "f4ws2hr0",
  dataset: "production",
  apiVersion: "2023-06-22",
  useCdn: true,
  token:
    "skLKIzw9MYVwhbvCJQeRK6DafAUIDBh6BvtynwQDgYhI27QO4naRZGTDkiPupBFOxyIV9Ozx7TUE5nAElk4XdXkq9V1RaGsYfuxbFxAVAG8VFJLA4XEvram7ZF9T2Z17QOqK7eyPyBrejYAYAu4Ffp9TrX6umqjMthmNwJir4OFtzLcOPcgg",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
