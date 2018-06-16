/**
 * 文件名称: utils
 * 创建时间: 2018/06/16 16:13
 * 创建用户: Yatoo2018
 * 用户邮箱: tanpf2018@163.com
 * 所属项目: zhenchuanx
 * 项目路径：
 *
 * 修改原因: xxx
 * 修改时间: xxx
 * 修改人名: xxx
 */
// eslint-disable-next-line
import {ColorType_en, ColorType_zh, SizeType_en, SizeType_zh} from './config'
function getColorZhType (type) {
  switch (type) {
    case ColorType_zh.BLACK:
      return ColorType_zh.BLACK
    case ColorType_zh.YELLOW:
      return ColorType_zh.YELLOW
    default: return ColorType_zh.OTHER
  }
}
function getSizeEnType (type) {
  switch (type) {
    case SizeType_en.BIG:
      return SizeType_en.BIG
    case SizeType_en.MIDDLE:
      return SizeType_en.MIDDLE
    default: return SizeType_en.SMALL
  }
}
export function getType (attr, type) {
  if (attr === 'color') {
    return getColorZhType(type)
  } else {
    return getSizeEnType(type)
  }
}
