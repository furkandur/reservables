export const APOLLO_CLIENT_URI =
  import.meta.env.VITE_APOLLO_CLIENT_URI ??
  (() => {
    throw new Error(
      "VITE_APOLLO_CLIENT_URI is not defined in environment variables"
    );
  })();
