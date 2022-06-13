// FIXME:
const visit = require('unist-util-visit')
// import { visit } from 'unist-util-visit'
const toString = require('mdast-util-to-string')
// import { toString } from 'mdast-util-to-string'

// TODO: refactoring
const plugin = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, 'paragraph', (node, index, parent) => {
    const paragraph = toString(node)
    const matches = Array.from(paragraph.matchAll(/#(\S+)/g))
    if (matches.length === 0) {
      return
    }

    matches.forEach(match => {
      let i = 0
      for (let child of node.children) {
        // avoid replacing into hashtags in non-text nodes such as inline code blocks
        if (child.type !== 'text') {
          return
        }
        if (!toString(child).includes(match[0])) {
          continue
        }

        child.value = child.value.replace(match[0], '')
        const tag = match[1]
        node.children.splice(i, 0, {
          type: 'hashtag',
          children: [
            {
              type: 'html',
              value: `<a href="${pluginOptions.toTag(tag)}">#${tag}</a>`,
            },
          ],
        })

        i++

        break
      }
    })
  })

  return markdownAST
}

module.exports = plugin
