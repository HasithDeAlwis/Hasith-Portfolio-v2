export function formatUrl(blogTitle: string) {
  return blogTitle.toLowerCase().split(' ').join('-')
}

export function getOriginalTitle(formattedUrl: string) {
  return formattedUrl.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
