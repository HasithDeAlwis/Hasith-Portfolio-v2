import type { CollectionConfig } from 'payload/types'

const CurrentlyLearning: CollectionConfig = {
  slug: 'currently-learning',
  fields: [
    {
      name: 'currentSkill',
      type: 'text',
    },
    {
      name: 'currentSkillDescription',
      type: 'textarea',
    },
  ],

}

export default CurrentlyLearning
