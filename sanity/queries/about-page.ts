import { defineQuery } from 'next-sanity'

export const ABOUT_PAGE_QUERY = defineQuery(`*[_type == "aboutPage"][0]{
  sections[]{
    _key,
    title,
    text,
    buttonLabel,
    buttonLink,
    "image": image{ "url": asset->url, alt }
  }
}`)
