<template>
  <div>
    <global-header />
    <div id="content">
      <setting-pane />
      <car-list :id="'threeStars'" />
      <car-list :id="'fourStars'" />
      <car-list :id="'fiveStars'" />
      <car-list :id="'sixStars'" />
      <car-list :id="'sevenStars'" />
    </div>
    <global-footer />
    <footer-menu />
  </div>
</template>

<script>
import globalHeader from '~/components/Organisms/header'
import settingPane from '~/components/Organisms/setting-pane'
import carList from '~/components/Organisms/car-list'
import globalFooter from '~/components/Organisms/footer'
import footerMenu from '~/components/Organisms/footer-menu'

export default {
  components: {
    'global-header': globalHeader,
    'setting-pane': settingPane,
    'car-list': carList,
    'global-footer': globalFooter,
    'footer-menu': footerMenu
  }
}
</script>
