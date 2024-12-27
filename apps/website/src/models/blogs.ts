export interface BlogType {
  title: string
  byline: string
  date: Date
  slug: string
  tags: Array<TagType>
  thumbnail: string
  content?: Array<BlogContentType>
}

export interface ParagraphRichText {
  root: {
    type: string
    children: {
      type: string
      version: number
      [k: string]: unknown
    }[]
    direction: ('ltr' | 'rtl') | null
    format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | ''
    indent: number
    version: number
  }
  [k: string]: unknown
}

export interface BlogContentType {
  header: string
  paragraph: string
  image: string
  order: number
  caption: string
}

export interface TagType {
  tagText: string
  tagValue: string
  isTechnical: boolean
}
