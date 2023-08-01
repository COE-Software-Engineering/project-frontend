import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "byu7n5l4",
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: true,
  token:
    "skWPuyUxSHRKzhedkCMBd6hiQXQtsH9QEkKaZvl2jqpYs2cMHrT7dYVGyokKeuDvZeluI5T61Kh8oMk0BsWbc0E432svXAGt0WAovVEMrIDQEaFrorm6Z7PhBfQyap33n21sA6Gkku6IU08ilwNHLSofRJWs4v4ugzKeg6CrdZ29KrWolv09",
});
