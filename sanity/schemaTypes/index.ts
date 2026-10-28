import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './site-settings'
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
    heroSection,
    portfolioSection,
    testimonialsSection,
    servicesSection,
  ],
}
