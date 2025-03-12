export type ToolType = 'zoom-out' | 'zoom-in' | 'contraRotate' | 'clockwiseRotation' | 'download'

export const downloadFile = (url: string, name: string) => {
  const a = document.createElement('a')
  a.download = name
  a.href = url
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  const timer = setTimeout(() => {
    document.body.removeChild(a)
    clearTimeout(timer)
  }, 10)
}

/**
 * 获取滚动条的宽度
 */
export const getScrollWidth = () => {
  const scroll = document.createElement('div')
  const scrollIn = document.createElement('div')
  scroll.appendChild(scrollIn)
  scroll.style.width = '100px'
  scroll.style.height = '50px'
  scroll.style.overflow = 'scroll'
  scroll.style.marginLeft = '-100000px'
  document.body.appendChild(scroll)
  const scrollInWidth = scrollIn.offsetWidth
  const scrollWidth = scroll.offsetWidth
  const tmp = setTimeout(() => {
    document.body.removeChild(scroll)
    clearTimeout(tmp)
  }, 10)
  return scrollWidth - scrollInWidth
}
