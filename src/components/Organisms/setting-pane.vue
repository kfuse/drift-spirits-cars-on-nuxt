<template>
  <section>
    <p class="text">初期レアリティ別に表示しています。レアリティや＋を指定したり、パーツ、愛車レベルを入力して戦闘力のシミュレーションができます。<br>※星7は解禁/未解禁も含めて計算上の値を表示しています。</p>
    <h2 class="titleSetting">表示設定</h2>
    <ul class="viewSetting clearfix">
    <li><a href="#" :class="[shownNitroless === true ? 'btnViewSetting on' : 'btnViewSetting']" @click="toggleNitroless"><span></span>ニトロ抜き</a></li>
    <li><a href="#" :class="[shownPerformance === true ? 'btnViewSetting on' : 'btnViewSetting']" @click="togglePerformance"><span></span>コスパ</a></li>
    </ul>
    <label for="filteringText" class="text">車名で絞込み: </label><input type="text" id="filteringText" class="iptText" v-model="filteringText">
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['shownNitroless', 'shownPerformance']),
    filteringText: {
      get() {
        return this.$store.getters['getFilteringText']
      },
      set(value) {
        this.$store.commit('setFilteringText', value)
      }
    }
  },
  methods: {
    toggleNitroless(e) {
      e.preventDefault()
      this.$store.dispatch('setShownNitroless', !this.shownNitroless)
    },
    togglePerformance(e) {
      e.preventDefault()
      this.$store.dispatch('setShownPerformance', !this.shownPerformance)
    }
  }
}
</script>

<style scoped>
.titleSetting {
  padding: 5px;
  border-left: 4px solid #ccc;
  font-size: 14px;
}
.viewSetting {
  margin-bottom: 10px;
}
.viewSetting li {
  float: left;
  margin-right: 10px;
}
.btnViewSetting {
  display: block;
  width: 100px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #666;
  font-size: 14px;
}
.btnViewSetting.on {
  border: 1px solid #329e51;
  background: #329e51;
  color: #fff;
}
.btnViewSetting span {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-radius: 50%;
  background: #ccc;
}
.btnViewSetting.on span {
  background: #f9dc3b;
}
</style>
