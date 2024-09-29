import type { CollectionConfig } from 'payload/types'

const AboutMeDescription: CollectionConfig = {
  slug: 'about-me-description',
  fields: [
    {
      name: 'aboutMeDescription',
      type: 'text',
      required: true,
    },
    {
      name: 'aboutMeSubheader',
      type: 'text',
      required: true,
    },
  ],
}

export default AboutMeDescription
