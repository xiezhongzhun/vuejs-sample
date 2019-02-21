<template>
  <b-row>
    <b-col class="item"
      :class="{'select-item':isSeleted}"
      cols="12"
      @mouseover="showButton=true"
      @mouseleave="showButton=false">
      <div class="float-left">
        <span v-text="item.name"></span>
      </div>
      <div class="float-right" v-if="showButton || isSeleted">
        <div>
          <span v-if="isSeleted" @click="modifySelect()">-</span>
          <span v-if="!isSeleted" @click="modifySelect()">+</span>
        </div>
        <span>search</span>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'suggestion-item',
  props: ['item'],
  data () {
    return {
      showButton: false,
      isSeleted: false
    }
  },
  methods: {
    modifySelect () {
      this.isSeleted = !this.isSeleted
      if (this.isSeleted) {
        this.addNewSelect(this.item)
      } else {
        this.removeSelect(this.item)
      }
    },
    ...mapMutations('suggestions', ['addNewSelect', 'removeSelect'])
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

  .select-item {
    background-color: lightgray;
    color: gray;
  }

</style>
