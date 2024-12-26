import { globalKeys } from '$lib/keys'
import type { BlogType } from '$lib/models/blogs'
import type { Blog } from '$lib/models/generated-types'

export async function getBlogTitles(): Promise<{ blogsData: Array<{ title: string }> }> {
  const query = `
    query {
        Blogs {
            docs {
                title
            }
        }
    }`
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
    const blogsData: Array<{ title: string }> = data.data.Blogs.docs.map(
      (blog: Blog) => {
        return {
          title: blog.title,
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

export async function getBlogByTitle(title: string): Promise<Blog | undefined> {
  const variables = { title }
  const query = `
  query BlogsQuery($title: String) {
    Blogs(where:{title: {equals:$title}}) {
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
        blogContent {
          header
          image {
            url
            alt
          }
          order
          caption
          content
        }
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

      body: JSON.stringify({ query, variables }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    const blogData: Blog = data.data.Blogs.docs[0]
    blogData.thumbnail.url = `${globalKeys.API_BASE_URL}${blogData.thumbnail.url}`
    const blogContent = blogData.blogContent.map((content) => {
      if (content.image) {
        return { ...content, image: { ...content.image, url: `${globalKeys.API_BASE_URL}${content.image.url}` } }
      }
      return content
    })

    return { ...blogData, blogContent }
  }
  catch (error) {
    console.error('Error:', error)
    return undefined
  }
}

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
