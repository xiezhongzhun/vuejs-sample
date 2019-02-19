<template>
  <b-row class="class-panel">
    <b-col cols="12" lg="2">
      <class-title :classData="classData" @collapseData="changeShowAll">
      </class-title>

      <button v-if="showAll" @click="changeShowAll">show fewer results</button>
      <button v-if="!showAll" @click="changeShowAll">show all results</button>
    </b-col>
    <b-col cols="12" lg="5" class="matches">
      <suggestion-panel
        v-if="classData.matches"
        :itemList="classData.matches"
        :recordCount="showCount">
      </suggestion-panel>
    </b-col>
    <b-col cols="12" lg="5">
      <suggestion-panel
        v-if="classData.suggestions"
        :itemList="classData.suggestions"
        :recordCount="showCount">
      </suggestion-panel>
    </b-col>
  </b-row>
</template>

<script>
import panel from '../suggestions/Panel'
import ClassTitle from './ClassTitle'
import { mapGetters } from 'vuex'
export default {
  name: 'class-panel',
  components: {'suggestion-panel': panel, ClassTitle},
  props: ['classData'],
  data () {
    return {
      showAll: false,
      showCount: 3
    }
  },
  methods: {
    changeShowAll () {
      this.showAll = !this.showAll
      if (this.showAll) {
        this.showCount = 0
      } else {
        this.showCount = this.getDefaultCount(this.classData.id)
      }
    }
  },
  mounted () {
    this.showCount = this.getDefaultCount(this.classData.id)
  },
  computed: {
    ...mapGetters('suggestions', ['getDefaultCount'])
  }
}
</script>

<style lang="sass?outputStyle=expanded" scoped>
.class-panel {
  border: 1px solid gray;
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  .matches {
    padding-right: 40px;
  }
}

</style>
