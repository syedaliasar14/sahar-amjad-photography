import { defineQuery } from 'next-sanity'

export const SERVICE_OPTIONS_QUERY = defineQuery(
  `*[_type == "homePage"][0].services.services[].title`,
)
