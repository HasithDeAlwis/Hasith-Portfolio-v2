export const globalKeys = {
  API_BASE_URL: import.meta.env.API_BASE_URL,
  GRAPHQL_PATH: import.meta.env.GRAPHQL_PATH,
  GRAPHQL_URL: `${import.meta.env.API_BASE_URL}${import.meta.env.GRAPHQL_PATH}`,
}
