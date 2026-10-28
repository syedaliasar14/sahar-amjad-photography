import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

const imageArray = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'array',
    of: [
      defineArrayMember({
        type: 'image',
        options: { hotspot: true },
        fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
      }),
    ],
  })

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [imageArray('images', 'Images')],
})

export const portfolioSection = defineType({
  name: 'portfolioSection',
  title: 'Portfolio Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'text', title: 'Text', type: 'text', rows: 3 }),
    imageArray('images', 'Images'),
  ],
})

export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'testimonial',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'text', title: 'Text', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'name', subtitle: 'text' } },
        }),
      ],
    }),
  ],
})

export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'service',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
            }),
            defineField({ name: 'price', title: 'Price', type: 'text', rows: 3 }),
            defineField({ name: 'footnote', title: 'Footnote', type: 'string' }),
          ],
          preview: { select: { title: 'title', subtitle: 'price', media: 'image' } },
        }),
      ],
    }),
  ],
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({ name: 'hero', title: 'Hero Section', type: 'heroSection' }),
    defineField({ name: 'portfolio', title: 'Portfolio Section', type: 'portfolioSection' }),
    defineField({ name: 'testimonials', title: 'Testimonials Section', type: 'testimonialsSection' }),
    defineField({ name: 'services', title: 'Services Section', type: 'servicesSection' }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
})
