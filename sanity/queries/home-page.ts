import { defineQuery } from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0]{
  hero{
    images[]{ "url": asset->url, alt }
  },
  portfolio{
    title,
    text,
    images[]{ "url": asset->url, alt }
  },
  testimonials{
    testimonials[]{ _key, name, text }
  },
  services{
    title,
    services[]{ _key, title, description, price, footnote, "image": image{ "url": asset->url, alt } }
  }
}`)
