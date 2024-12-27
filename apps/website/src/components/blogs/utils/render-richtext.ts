import sanitizeHTML from 'sanitize-html'
import type { ParagraphRichText } from '$lib/models/blogs'

interface RichTextChildren {
  type: string
  version: number
  [k: string]: unknown
}

export function renderRichText(paragraph: ParagraphRichText | undefined): string {
  if (!paragraph) {
    return ''
  }
  const { children } = paragraph.root as { children: RichTextChildren[] } // extract the children from the root
  return renderRichTextChildren(children)
}

function renderRichTextChildren(children: RichTextChildren[]): string {
  const richTextToHTML: string[] = children.map((node) => {
    // my interation only has paragraphs, headings, links
    if (!node.type) {
      return ''
    }
    switch (node.type) {
      case 'paragraph':
        return `<p class="text-p1-desktop text-primary-700">${renderRichTextChildren(node.children as RichTextChildren[])}</p>`
      case 'heading': {
        const heading = node.tag as string
        return `<${heading} class="text-h5-desktop font-bold text-primary-700" >${renderRichTextChildren(node.children as RichTextChildren[])}</${heading}>`
      }
      case 'link': {
        const { url } = node.fields as { url: string }
        return `<span><a href="${url}" target="_blank" class="text-blue-500 underline hover:text-blue-700">${renderRichTextChildren(node.children as RichTextChildren[])}</a></span>`
      }
      case 'linebreak': {
        return '<br>'
      }
      case 'text':
        return node.text as string
      default:
        return ''
    }
  })
  return sanitizeHTML(richTextToHTML.join(' '), {
    allowedAttributes: {
      div: ['class'],
      p: ['class'],
      a: ['href', 'target', 'class'],
      span: ['class'],
      h1: ['class'],
      h2: ['class'],
      h3: ['class'],
      h4: ['class'],
      h5: ['class'],
    },
  })
}
