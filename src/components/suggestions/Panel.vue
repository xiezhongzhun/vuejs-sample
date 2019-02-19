<template>
  <div class="hello">
      <item v-for="(item, index) in itemList"
        :item="item"
        v-if="index < recordCount || recordCount == 0"
        :key="item.id">
      </item>
  </div>
</template>

<script>
import item from './Item.vue'

export default {
  name: 'panel',
  components: { item },
  props: ['itemList', 'recordCount'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
