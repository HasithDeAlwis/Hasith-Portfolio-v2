export interface BlogType {
  title: string
  byline: string
  date: Date
  tags: Array<TagType>
  thumbnail: string
  content?: Array<BlogContentType>
}

export interface BlogContentType {
  header: string
  image: string
  order: number
  caption: string
  content: string
}

export interface TagType {
  tagText: string
  tagValue: string
  isTechnical: boolean
}
