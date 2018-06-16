<template>
  <div class="articles">
    <el-form ref="form" :model="form" :rules="rules" :inline-message="true" :status-icon="true" label-width="120px">
      <el-form-item label="浮点数" prop="num">
        <el-input v-model="form.num" @change="generateBinaryString"></el-input>
      </el-form-item>
      <el-form-item label="二进制" prop="radix">
        <el-input :disabled="true" v-model="form.radix" @change="generateBinaryString"></el-input>
      </el-form-item>
      <el-form-item label="二进制字符串" prop="binaryString">
        <el-input v-text="binaryString" :style="{textAlign:'left'}"></el-input>
      </el-form-item>
      <el-form-item label="等式显示" prop="showString">
        <el-input v-text="form.showString" :style="{textAlign:'left'}"></el-input>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: 'FormatFloat',
  data () {
    let checkNum = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('浮点数不能为空'))
      }
      setTimeout(() => {
        if (isNaN(value)) {
          callback(new Error('请输入浮点数'))
        } else {
          if (value > 1 && value < 0) {
            callback(new Error('0<n<1'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    return {
      form: {
        num: 0.1,
        radix: 2,
        str: '',
        showString: ''
      },
      rules: {
        num: [
          { validator: checkNum, trigger: 'blur' }
        ]

      }
    }
  },
  computed: {
    binaryString: {
      set (val) {
        this.form.str = val
      },
      get () {
        return this.form.str
      }
    }
  },
  mounted () {
    this.generateBinaryString()
    console.log(this.binaryString)
  },
  methods: {
    generateBinaryString () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          let o = this.toFormatString(this.form.num, this.form.radix)
          this.binaryString = o.num
          this.form.showString = o.show
        } else {
          console.log('error!!')
          return false
        }
      })
    },
    toFormatString (num, radix) {
      let str = num + '(10)='
      let sum = 0
      function cb (i) {
        let c = ''
        if (sum + Math.pow(2, -i) > num) {
          c += '0'
        } else {
          c += '1'
          sum += Math.pow(2, -i)
        }
        if (sum === num || i > 52) return c
        // eslint-disable-next-line
        return c + cb(++i)
      }
      // eslint-disable-next-line
      let r = cb(1)
      while (r.length < 52) {
        r += '0'
      }
      str += r + '(' + radix + ')'
      console.log(str)
      return {
        num: r,
        show: str
      }
    }
  }
}
</script>

<style scoped>

</style>
