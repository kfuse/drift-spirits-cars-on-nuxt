<template>
  <div>
    <global-header />
    <div id="content">
      <setting-pane />
      <car-list :data="threeStars" />
    </div>
    <global-footer />
  </div>
</template>

<script>
import globalHeader from '~/components/Organisms/header'
import settingPane from '~/components/Organisms/setting-pane'
import carList from '~/components/Organisms/car-list'
import globalFooter from '~/components/Organisms/footer'

export default {
  computed: {
    threeStars() {
      return this.$store.state.threeStars
    }
  },
  components: {
    'global-header': globalHeader,
    'setting-pane': settingPane,
    'car-list': carList,
    'global-footer': globalFooter
  }
}
</script>
