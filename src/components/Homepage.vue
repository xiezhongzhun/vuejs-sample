<template>
  <div>
    <panel v-if="allData.good_classes"
      v-for="goodClass in allData.good_classes"
      :classData="goodClass"
      :key="goodClass.id">
    </panel>
  </div>
</template>

<script>
import panel from './class/Panel'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'homepage',
  components: { panel },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('suggestions', ['loadSuggestions'])
  },
  computed: {
    ...mapState('suggestions', ['allData']),
    ...mapState('suggestions', ['selectItems'])
  },
  mounted () {
    this.loadSuggestions()
  }
}
</script>

<style scoped>

</style>
