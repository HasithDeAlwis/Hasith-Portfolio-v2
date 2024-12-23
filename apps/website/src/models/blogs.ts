export interface BlogType {
  title: string
  byline: string
  date: Date
  tags: Array<TagType>
  thumbnail: string
}

export interface TagType {
  tagText: string
  tagValue: string
  isTechnical: boolean
}
