import { globalKeys } from '$lib/keys'
import type { CurrentlyLearningSkill, LearnedSkillLogo } from '$lib/models/generated-types'
import type { CurrentlyLearningSkillType, LearnedSkillLogoType } from '$lib/models/skills'

// TODO: Add types for the response data
// TODO: Refactor to use the Generated types from Payload instead of the custom types
export async function getLearnedSkillsData(): Promise<LearnedSkillLogoType[]> {
  const query = `
    query {
  LearnedSkillLogos(limit: 12, sort: "skillOrder") {
    docs {
      skillLogo {
        url
        alt
      }
      skillHref
      skillOrder
    }
  }
}
    `
  const endpoint = `${globalKeys.GRAPHQL_URL}`
  try {
    const response = await fetch(endpoint, {
      method: 'POST', // Changed to POST
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ query }), // Send query in body
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json() as { data: { LearnedSkillLogos: { docs: LearnedSkillLogo[] } } }
    const skillsLogoData: LearnedSkillLogoType[] = data.data.LearnedSkillLogos.docs.map((skill) => {
      return {
        url: `${globalKeys.API_BASE_URL}${skill.skillLogo.url}`,
        alt: skill.skillLogo.alt,
        link: skill.skillHref,
      }
    })
    return skillsLogoData
  }
  catch (error) {
    console.error('Error:', error)
    return []
  }
}

// TODO: Add types for the response data
export async function getCurrentlyLearningSkillsData(): Promise<CurrentlyLearningSkillType[]> {
  const query = `
    query {
      CurrentlyLearningSkills {
        docs {
          currentSkillLogo {
            url
            alt
          }
          currentSkillDescription
          currentSkillName
          currentSkillHref
        }
      }
    }
    `
  const endpoint = `${globalKeys.GRAPHQL_URL}`
  try {
    const response = await fetch(endpoint, {
      method: 'POST', // Changed to POST
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ query }), // Send query in body
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json() as { data: { CurrentlyLearningSkills: { docs: CurrentlyLearningSkill[] } } }

    const skillsLogoData: CurrentlyLearningSkillType[] = data.data.CurrentlyLearningSkills.docs.map((skill) => {
      return {
        picUrl: `${globalKeys.API_BASE_URL}${skill.currentSkillLogo.url}`,
        alt: skill.currentSkillLogo.alt,
        link: skill.currentSkillHref,
        description: skill.currentSkillDescription,
        name: skill.currentSkillName,
      }
    })
    return skillsLogoData
  }
  catch (error) {
    console.error('Error:', error)
    return []
  }
}
