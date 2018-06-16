/**
 * 文件名称: List
 * 创建时间: 2018/06/16 16:03
 * 创建用户: Yatoo2018
 * 用户邮箱: tanpf2018@163.com
 * 所属项目: zhenchuanx
 * 项目路径：
 *
 * 修改原因: xxx
 * 修改时间: xxx
 * 修改人名: xxx
 */
class List extends Map {
  addList (arr) {
    arr.map(item => {
      this.add(item)
    })
    return this
  }
  add (val) {
    this.set(val.id, val)
    return this
  }
}
export {List}
