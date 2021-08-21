
// post, slide, work entries
export type Entry = {
  id: string
  to: string
  tags: string[]
  title: string
  date: string
  fixed: boolean
  draft: boolean
}

export type Post
  = Entry
  & {
    html: string
  }