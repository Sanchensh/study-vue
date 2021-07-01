<template>
  <div>
    <hello msg="hello world"/>
    <demo message="replace origin message"/>
  </div>
</template>

<script>
import hello from './components/Hello.vue'
import demo from './components/Demo.vue'

export default {
  components: {
    hello,
    demo
  }
}
</script>

<style>

</style>
