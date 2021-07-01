<template>
  <div>
    <span v-bind:title="message">
      鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <h3>
      {{ user }}
    </h3>
    <p id="p" v-if="seen">you can see me</p>
    <p v-for="todo in todos" :key="todo">
      {{ todo.text }}
    </p>
    <button v-on:click="my_first_click">reverse message</button>
    <button v-on:click="loadData">loadData</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '页面加载于' + new Date().toLocaleDateString(),
      user: 'I am xu jianglei',
      seen: false,
      todos: [{text: '学习 JavaScript'},
        {text: '学习 Vue'},
        {text: '整个牛项目'}],
    }
  }, methods: {
    my_first_click: function () {
      this.user = this.user.split('').reverse().join('')
    },
    loadData() {
      console.log('called')
      let _this = this;
      this.$ajax.get('http://localhost:8081/hello').then(
          function (res) {
            _this.user = res.data
          }
      ).catch(function (res) {
        console.log(res)
      })
    }
  },
  created: function () {
    console.log("init......")
    this.loadData();
  }
}
</script>

<style scoped>

</style>