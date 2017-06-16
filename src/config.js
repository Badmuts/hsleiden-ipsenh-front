function getEndpoint(env) {
  switch (env) {
    case "development":
      return "http://localhost:3000";
    case "staging":
      return "https://staging.api.ipsenh.daan.codes";
    case "production":
    default:
      return "https://api.ipsenh.daan.codes";
  }
}

export const ENDPOINT = getEndpoint(process.env.NODE_ENV);
