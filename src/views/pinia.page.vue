<script setup lang="ts">
import { ref, defineComponent, Ref } from 'vue'
import { useStore } from '../store/useStore'
const store = useStore()
const data = ref({ name: 'Dendi', age: 88 })
defineComponent({
  name: 'v-home',
})
const text: Ref<String> = ref('你好世界')
const handleIncrement = () => {
  store.counter++
}
</script>

<template>
  <div class="pinia">
    <p class="detail">{{ data.name }} - {{ data.age }}</p>
    <h2>{{ store.counter }}</h2>
    <el-button type="success" @click="handleIncrement">Increment++</el-button>
    <span>
      {{ text }}
    </span>
  </div>
</template>

<style lang="stylus" scoped>
.pinia {
  display flex
  justify-content space-evenly
  align-items center
  .detail {
    color: crimson
    font-size: 20px
    font-weight bold
  }
}
</style>
