import type { CollectionConfig } from 'payload/types'

const AboutMeDescription: CollectionConfig = {
  slug: 'about-me-description',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'aboutMeDescription',
      type: 'textarea',
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
