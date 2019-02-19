<template>
  <b-row>
    <b-col class="item" cols="12" @mouseover="showButton=true" @mouseleave="showButton=false">
      <div class="float-left">
        <span v-text="item.name"></span>
      </div>
      <div class="float-right" v-if="showButton">
        <span>+</span>
        <span>search</span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'suggestion-item',
  props: ['item'],
  data () {
    return {
      showButton: false
    }
  }
}
</script>

<style lang="sass?outputStyle=expanded" scoped>
  .item {
    padding: 5px 10px;
    border-bottom: 1px solid gray;

    div {
      display: inline;
    }
  }
  .item:hover {
    background-color: lightgray;
    color: red;
  }
</style>
