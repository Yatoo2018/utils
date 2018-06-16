/**
 * 文件名称: GoodsList.js
 * 创建时间: 2018/06/16 13:56
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
import {Goods} from './Goods'

class GoodsList extends List {
  constructor (arr) {
    super()
    this.init(arr)
  }
  init (arr) {
    arr.map(item => {
      this.add(new Goods({id: item.id, size: item.size, color: item.color}))
    })
  }
}
export {GoodsList}
