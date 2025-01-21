import { globalKeys } from '$lib/keys'
import type { Project } from '$lib/models/generated-types'
import type { ProjectType } from '$lib/models/projects'

// TODO: Add types for the response data
// TODO: Refactor to use the Generated types from Payload instead of the custom types
export async function getProjectsData(): Promise<ProjectType[]> {
  const query = `
        query {
        Projects(sort: "createdAt:DESC" ) {
            docs {
            projectImage {
                url
                alt
            }
            title
            description
            demoLink
            readMoreLink
            sourceLink
            videoLink
            createdAt 
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

    const data = await response.json() as { data: { Projects: { docs: Project[] } } }
    const skillsLogoData: ProjectType[] = data.data.Projects.docs.map((project) => {
      return {
        title: project.title,
        description: project.description,
        sourceLink: project.sourceLink,
        demoLink: project.demoLink || null,
        readMoreLink: project.readMoreLink || null,
        alt: project.projectImage?.alt || null,
        picture: project.projectImage?.url ? project.projectImage.url : null,
        video: project.videoLink || null,
      }
    })
    return skillsLogoData
  }
  catch (error) {
    console.error('Error:', error)
    return []
  }
}
