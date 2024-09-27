import type { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media', // Where the media will be served from
    staticDir: 'media', // Directory to store uploads
    mimeTypes: ['image/svg+xml', 'image/webp', 'video/mp4'], // Restrict file types to SVG and WEBP
  },
  fields: [
    {
      name: 'altText',
      type: 'text',
      label: 'Alt Text',
      admin: {
        description: 'Short description for accessibility purposes',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
      admin: {
        description: 'Optional caption for the media file',
      },
    },
  ],
}

export default Media
