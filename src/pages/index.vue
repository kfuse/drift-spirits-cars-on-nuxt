<template>
  <div>
    <global-header />
    <div id="content">
      <setting-pane />
    </div>
  </div>
</template>

<script>
import globalHeader from '~/components/Molecules/header'
import settingPane from '~/components/Organisms/setting-pane'

export default {
  components: {
    'global-header': globalHeader,
    'setting-pane': settingPane
  }
}
</script>
