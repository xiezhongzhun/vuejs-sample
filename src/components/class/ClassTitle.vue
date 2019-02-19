<template>
  <div class="title" @click="collapseData">
    <div>
      <div class="icon" v-text="classData.id"></div>
    </div>
    <div>
      <span v-text="classData.name"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'class-title',
  props: ['classData'],
  data () {
    return {
    }
  },
  methods: {
    collapseData () {
      this.$emit('collapseData')
    }
  }
}
</script>

<style lang="sass?outputStyle=expanded" scoped>
.title {
  .icon {
    width: 60px;
    height: 60px;
    font-size: 2.5em;
    border-radius: 30px;
    background-color: blue;
    color: white;
    display: inline-block;
    cursor: pointer;
  }
  div {
    height: 100%;
    display: inline;
  }
}

</style>
