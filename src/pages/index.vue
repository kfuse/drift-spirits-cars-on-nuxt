<template>
  <div>
    <global-header />
    <div id="content">
      <setting-pane />
    </div>
    <global-footer />
  </div>
</template>

<script>
import globalHeader from '~/components/Organisms/header'
import settingPane from '~/components/Organisms/setting-pane'
import globalFooter from '~/components/Organisms/footer'

export default {
  components: {
    'global-header': globalHeader,
    'setting-pane': settingPane,
    'global-footer': globalFooter
  }
}
</script>
