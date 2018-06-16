/**
 * 文件名称: oods.js
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
class Goods {
  constructor ({id, size, color}) {
    this.id = id
    this.size = size
    this.color = color
  }
  getSize () {
    return this.size
  }
  getColor () {
    return this.color
  }
}
export {Goods}
