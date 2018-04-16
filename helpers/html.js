
export function createElement (markup) {
  const temp = document.createElement('div')
  temp.innerHTML = markup
  const frag = document.createDocumentFragment()
  const children = Array.prototype.slice.apply(temp.childNodes)
  children.map(el => frag.appendChild(el))
  return frag
}

export function insert (target, fragment, position) {
  if (!target) return
  let el
  if (typeof target === 'string') {
    el = document.querySelector(target)
  } else if (target.nodeName) {
    el = target
  }
  if (!position || position === 'append') {
    el.appendChild(fragment)
  } else if (position === 'prepend') {
    el.insertBefore(fragment, el.firstChild)
  } else if (position === 'before') {
    el.parentNode.insertBefore(fragment, el)
  } else if (position === 'after') {
    el.parentNode.insertBefore(fragment, el.nextElementSibling)
  }
}

export function render (data, template, node, position) {
  if (!template || !node) return
  let markup = (typeof data === 'string')
    ? template(data)
    : (typeof data === 'object' && !Array.isArray(data))
      ? template(data)
      : (Array.isArray(data))
        ? data.map(item => template(item)).join('')
        : null

  const element = createElement(markup)
  const insertelement = insert(node, element, position)
  return insertelement
}

function sanitize (data) {
  const tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '(': '%28',
    ')': '%29'
  }
  let str = JSON.stringify(data)
  const replaceTag = function (tag) {
    return tagsToReplace[tag] || tag
  }

  const safTagsReplace = function (str) {
    return str.replace(/[&<>\(\)]/g, replaceTag)
  }
  str = safTagsReplace(str)
  return JSON.parse(str)
}

export function html (literals, ...vars) {
  let raw = literals.raw
  let result = ''
  let i = 1
  let len = arguments.length
  let str
  let variable

  while (i < len) {
    str = raw[i - 1]
    variable = sanitize(vars[i - 1])
    result += str + variable
    i++
  }
  result += raw[raw.length - 1]
  return result
}
