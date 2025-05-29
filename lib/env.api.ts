export const projectId = "2iczu3ec";
export const dataset = "production";
export const token = "skB3aFqSxUiWHFuf81MjrPKtox4noqLooyg8SJxly2n5j1v8h6ZSmDEtdHeohiV4MKEcpEkHSTFavFD2n2chFDJTlck0UKK6M2JoCxzkgUzQobhE9UPMbRa1Qjiv8gHpnFT9srous1oHWaLNPU54u1vfs2fdVIxuxeL0orSprbhgkqAJaW0H";
export const mode = process.env.NODE_ENV;
export const hookSecret = process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET;

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-07-21";

export const giscusRepoId = checkValue(
  process.env.NEXT_PUBLIC_GISCUS_REPOID,
  "NEXT_PUBLIC_GISCUS_REPOID",
  "https://giscus.app/"
);

export const giscusCategoryId = checkValue(
  process.env.NEXT_PUBLIC_GISCUS_CATEGORYID,
  "NEXT_PUBLIC_GISCUS_CATEGORYID",
  "https://giscus.app/"
);

export const umamiSiteId = checkValue(
  process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  "NEXT_PUBLIC_UMAMI_WEBSITE_ID",
  "https://umami.is"
);

// Validate env varaibles
function checkValue<T>(
  value: T | undefined,
  errorMsg: string,
  url?: string
): T {
  if (value === undefined) {
    throw new Error(
      `Missing Environment Variable: ${errorMsg}\n\nVist ${url} to learn how you can generate your own API keys`
    );
  }
  return value;
}
