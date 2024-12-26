import { formatUrl } from './format-url'
import { getBlogTitles } from '$lib/api/blogs-api'

export async function createStaticRoutes() {
  const blogTitles = await getBlogTitles()
  return blogTitles.blogsData.map((blog: { title: string }) => {
    const formattedTitle = formatUrl(blog.title)
    return {
      params: { blog: formattedTitle },
    }
  })
}
