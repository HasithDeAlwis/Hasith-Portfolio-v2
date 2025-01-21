import { globalKeys } from '$lib/keys'
import type { BlogType } from '$lib/models/blogs'
import type { Blog } from '$lib/models/generated-types'

export async function getBlogSlugs(): Promise<{ blogsData: Array<{ slug: string }> }> {
  const query = `
    query {
        Blogs {
            docs {
               slug
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
    const blogsData: Array<{ slug: string }> = data.data.Blogs.docs.map(
      (blog: Blog) => {
        return {
          slug: blog.slug,
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

export async function getBlogBySlug(slug: string): Promise<Blog | undefined> {
  const variables = { slug }
  const query = `
  query BlogsQuery($slug: String) {
    Blogs(where:{slug: {equals:$slug}}) {
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
        paragraph
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
    const blogContent = blogData.blogContent.map((content) => {
      if (content.image) {
        return { ...content, image: { ...content.image, url: content.image.url } }
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
                slug
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
          thumbnail: blog.thumbnail.url || '',
          slug: blog.slug,
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
