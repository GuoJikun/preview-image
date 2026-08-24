export type ToolType =
  | 'zoom-out'
  | 'zoom-in'
  | 'contraRotate'
  | 'clockwiseRotation'
  | 'download'

export function type<T>(value: T): string {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

const triggerDownload = (href: string, name: string, cleanup?: () => void) => {
  const a = document.createElement('a')
  a.download = name
  a.href = href
  a.style.display = 'none'
  document.body.append(a)
  a.click()
  const timer = setTimeout(() => {
    a.remove()
    cleanup?.()
    clearTimeout(timer)
  }, 4000)
}

/**
 * 下载图片，同源直接下载，跨域先转为 blob（受 CORS 限制失败时回退为直接下载）
 */
export const downloadFile = async (url: string, name: string) => {
  if (/^(blob:|data:)/.test(url)) {
    triggerDownload(url, name)
    return
  }

  const isCrossOrigin = new URL(url, location.href).origin !== location.origin
  if (isCrossOrigin) {
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const blob = await response.blob()
      const objectUrl = URL.createObjectURL(blob)
      triggerDownload(objectUrl, name, () => URL.revokeObjectURL(objectUrl))
      return
    } catch {
      // CORS 或网络错误，回退为 <a> 直接下载
    }
  }

  triggerDownload(url, name)
}

let scrollWidthCache: number | null = null

/**
 * 获取滚动条的宽度（结果会被缓存）
 */
export const getScrollWidth = () => {
  if (scrollWidthCache !== null) return scrollWidthCache

  const outer = document.createElement('div')
  const inner = document.createElement('div')
  outer.append(inner)
  outer.style.width = '100px'
  outer.style.height = '50px'
  outer.style.overflow = 'scroll'
  outer.style.marginLeft = '-100000px'
  document.body.append(outer)

  scrollWidthCache = outer.offsetWidth - inner.offsetWidth
  outer.remove()
  return scrollWidthCache
}

export default type
