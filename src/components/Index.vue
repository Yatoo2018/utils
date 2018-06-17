<template>
  <el-container v-loading="loading">
    <el-header class="header">我的常用功能函数</el-header>
    <el-main>
      <el-collapse  v-for="article in articles" v-model="activeNames" @change="handleChange" :key="article.id">
        <el-collapse-item :class="['page-article', 'page-' + article.id]" :title="article.title" :name="article.id">
          <component class="article-content" :is="article.component"></component>
        </el-collapse-item>
      </el-collapse>
    </el-main>
    <el-footer>@Yatoo2018</el-footer>
  </el-container>
</template>

<script>
import FormatFloat from './articles/FormatFloat'
import GoodsShow from './articles/shop/GoodsShow'
import articls from '../assets/mock/articles.json'
export default {
  name: 'Index',
  data () {
    return {
      activeNames: [],
      articles: articls,
      loading: true
    }
  },
  components: {
    FormatFloat,
    GoodsShow
  },
  mounted () {
    this.loading = false
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .header,.page-article{
    text-align: center;
  }
  .article-content{
    text-align: left;
  }

</style>
