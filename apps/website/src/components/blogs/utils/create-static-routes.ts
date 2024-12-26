import { getBlogSlugs } from '$lib/api/blogs-api'

export async function createStaticRoutes() {
  const blogSlugs = await getBlogSlugs()
  return blogSlugs.blogsData.map((blog: { slug: string }) => {
    return {
      params: { blog: blog.slug },
    }
  })
}
