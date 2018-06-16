<template>
  <div class="block">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item><a>商品列表</a></el-breadcrumb-item>
      <el-breadcrumb-item>商品详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>尺寸</span>
      </div>
      <el-radio-group v-model="size">
        <el-radio-button v-for="s in sizes" @click="clickItem(s, 'size')" :label="s.name" :name="s.name" :disbaled="s.isEnable" :key="s.name"></el-radio-button>
      </el-radio-group>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>颜色</span>
      </div>
      <el-radio-group v-model="color">
        <el-radio-button v-for="s in colors" @click="clickItem(s, 'color')" :label="s.name" :disbaled="s.isEnable" :key="s.name"></el-radio-button>
      </el-radio-group>
    </el-card>
    <el-input-number v-model="buyNum" :min="1" :max="10" label="数量"></el-input-number>
    <el-input-number :value="current" :disabled="true" label="库存"></el-input-number>
  </div>

</template>

<script>
import {ShowGoodsManager} from './ShowGoods'
import goods from './data'
export default {
  name: 'Goods',
  data () {
    return {
      originData: goods,
      size: '',
      color: '',
      buyNum: 0,
      attrs: ['color', 'size']
    }
  },
  mounted () {
    console.log(this.sizes, this.colors)
  },
  computed: {
    showData () {
      return new ShowGoodsManager(this.originData.goods)
    },
    sizes () {
      return [...this.showData.sizenamelist.values()]
    },
    colors () {
      return [...this.showData.colornamelist.values()]
    },
    sum () {
      return this.showData.goodlist.size
    },
    current () {
      return this.getGoodsByAttrs([{name: 'color', value: this.color}, {name: 'size', value: this.size}]).length
    }
  },
  methods: {
    check (item, attrs) {
      return [...attrs].every(attr => attr.value ? item[name] === attr.value : true)
    },
    getGoodsByAttrs (attrs) {
      return [...this.showData.goodlist.values()].filter(item => {
        return this.check(item, attrs)
      })
    },
    clickItem (item, attr) {
      console.log('click')
      if (item.isSelect) {
        this[attr] = ''
      } else {
        this[attr] = item.name
      }
      this.toggle(item, attr)
      this.update(attr)
    },
    toggle (item, attr) {
      item[attr] = !item[attr]
    },
    update (attr) {
      let attrs = [{name: attr, value: this[attr]}]
      let temps = this.getGoodsByAttrs(attrs)

      this.attrs.map(item => {
        if (item === attr) return ''
        this[attr + 's'].map(o => {
          o.isEnable = temps.filter(t => t[attr] === o.name).length > 0
          if (!o.isEnable) o.isSelect = false
        })
      })
      console.log(this.colors, this.sizes)
    }
  }
}
</script>

<style scoped>

</style>
