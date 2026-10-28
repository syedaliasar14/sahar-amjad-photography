import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './site-settings'
import { aboutPage } from './about-page'
import {
  heroSection,
  homePage,
  portfolioSection,
  servicesSection,
  testimonialsSection,
} from './home-page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homePage,
    aboutPage,
    heroSection,
    portfolioSection,
    testimonialsSection,
    servicesSection,
  ],
}
