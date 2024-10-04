import type { CollectionConfig } from 'payload/types'

const AboutMeAsset: CollectionConfig = {
  slug: 'about-me-asset',
  fields: [
    {
      name: 'aboutMeOrder',
      type: 'number',
      required: true,
      admin: {
        description: 'What order should this svg appear in?',
      },
    },
    {
      name: 'aboutMeSVG',
      type: 'relationship',
      relationTo: 'media', // References the 'media' collection
      label: 'Media File',
      admin: {
        description: 'Select a svg that represents an trait about you',
      },
      required: true,
    },
  ],
}

export default AboutMeAsset
