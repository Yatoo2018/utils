/**
 * 文件名称: Size
 * 创建时间: 2018/06/16 14:44
 * 创建用户: Yatoo2018
 * 用户邮箱: tanpf2018@163.com
 * 所属项目: zhenchuanx
 * 项目路径：
 *
 * 修改原因: xxx
 * 修改时间: xxx
 * 修改人名: xxx
 */
import {List} from './List'
import {Item} from './Item'
import {getType} from './utils'

let colorId = 0
class Size extends Item {
  constructor ({name, isSelect, isEnable}) {
    super({isSelect, isEnable})
    this.id = colorId++
    this.name = name
    this._name = getType('size', name)
  }
}
class SizeList extends List {
  constructor (arr) {
    super()
    this.init(arr)
  }
  init (arr) {
    arr.map(item => {
      this.add(new Size({name: item, isSelect: false, isEnable: false}))
    })
  }
}
export {Size, SizeList}
