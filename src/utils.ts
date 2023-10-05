/**
 * Type-guarded function for HTMLCanvasElement
 *
 * @param el - Unknown element
 * @returns
 */
function isHTMLCanvasElement(el: unknown): el is HTMLCanvasElement {
  return typeof el === 'object' && el !== null && 'width' in el && 'height' in el
}

/**
 * Smoothly scroll element into view
 *
 * @param identifier - CSS selector string, but must be prefixed with `.` or `#` for a singular selection
 */
function scrollElementIntoView(identifier: string): void {
  if (!identifier.startsWith('#'))
    throw Error(`Cannot select an element using "${identifier}" as a CSS selector string.`)

  document.querySelector(identifier)?.scrollIntoView({
    behavior: 'smooth'
  })
}

export { isHTMLCanvasElement, scrollElementIntoView }
