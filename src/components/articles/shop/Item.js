/**
 * 文件名称: Item
 * 创建时间: 2018/06/16 15:49
 * 创建用户: Yatoo2018
 * 用户邮箱: tanpf2018@163.com
 * 所属项目: zhenchuanx
 * 项目路径：
 *
 * 修改原因: xxx
 * 修改时间: xxx
 * 修改人名: xxx
 */
export class Item extends Object {
  constructor ({isSelect, isEnable}) {
    super()
    this._isSelect = isSelect
    this._isEnable = isEnable
  }

  get isSelect () {
    return this._isSelect
  }

  set isSelect (value) {
    this._isSelect = value
  }

  get isEnable () {
    return this._isEnable
  }

  set isEnable (value) {
    this._isEnable = value
  }
}
