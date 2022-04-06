// post, slide, work entries
export type Entry = {
  id: string
  // url
  to: string
  tags: string[]
  title: string
  date: string
  fixed: boolean
  draft: boolean
}

// entry with mdx
export type Post = Entry & {
  body: string
  inbounds: Entry[]
  outbounds: Entry[]
}
