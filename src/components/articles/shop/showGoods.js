/**
 * 文件名称: showGoods.js
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
import {GoodsList} from './GoodsList'
import {ColorList} from './Color'
import {SizeList} from './Size'

class ShowGoodsManager {
  get colornamelist () {
    return this._colornamelist
  }

  set colornamelist (value) {
    this._colornamelist = value
  }

  get sizenamelist () {
    return this._sizenamelist
  }

  set sizenamelist (value) {
    this._sizenamelist = value
  }
  constructor (arr) {
    this.goodlist = new GoodsList(arr)
    // console.log(this.goodlist,[...this.goodlist.values()])
    this._colornamelist = []
    this._sizenamelist = []
    this.colors = {}
    this.sizes = {}
    this.init(arr)
  }
  getUniqueList (arr, attr) {
    if (attr === 'color') {
      return [...new Set(
        [...this.goodlist.values()].map(goods => {
          let color = goods.getColor()
          if (this.colors[color] === undefined) {
            this.colors[color] = {
              text: color,
              ids: []
            }
          }
          this.colors[color].ids.push(goods.id)
          return goods.getColor()
        })
      )]
    } else {
      return [...new Set(
        [...this.goodlist.values()].map(goods => {
          let size = goods.getSize()
          if (this.sizes[size] === undefined) {
            this.sizes[size] = {
              text: size,
              ids: []
            }
          }
          this.sizes[size].ids.push(goods.id)
          return goods.getSize()
        })
      )]
    }
  }
  init (arr) {
    this._colornamelist = new ColorList(this.getUniqueList(arr, 'color'))
    this._sizenamelist = new SizeList(this.getUniqueList(arr, 'size'))
  }
}
export {ShowGoodsManager}
