import { globalKeys } from '$lib/keys'
import type { BlogType } from '$lib/models/blogs'
import type { Blog } from '$lib/models/generated-types'

export async function getBlogsData() {
  const query = `
    query {
        Blogs {
            docs {
                date 
                title
                byline
                thumbnail {
                    url
                    alt
                }
                tags {
                    tagText
                    tagValue
                    isTechnical
                }
                technicalBlog
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

    const data = await response.json()
    const blogsData: Array<BlogType> = data.data.Blogs.docs.map(
      (blog: Blog) => {
        return {
          title: blog.title,
          byline: blog.byline,
          date: new Date(blog.date),
          tags: blog.tags,
          thumbnail: `${globalKeys.API_BASE_URL}${blog.thumbnail.url}`,
        }
      },
    )

    return { blogsData }
  }
  catch (error) {
    console.error('Error:', error)
    return { blogsData: [] }
  }
}
