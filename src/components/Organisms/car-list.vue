<template>
<section>
<h3 v-if="data.id === 'threeStars'" class="titleStar">初期レアリティ☆☆☆ (星3)</h3>
<h3 v-if="data.id === 'fourStars'" class="titleStar">初期レアリティ☆☆☆☆ (星4)</h3>
<input type="text" v-model="data.filteringText" class="hiddenText">
<div class="carListTool">
<span class="labelStatus">ステータス:</span>
<a href="#" :class="`btnStars starStatus${data.stars}`" @click="incrementStar"></a>
<a href="#" :class="`btnPlus plusStatus${data.plus}`" @click="incrementPlus"><span class="firstPlus">+</span><span class="secondPlus">+</span></a>
<a href="#" :class="[isPartsOpen === true ? 'btnParts open' : 'btnParts']" @click="toggleParts">パーツ</a>
</div>
<slide-up-down :active="isPartsOpen" :duration="500" :id="`${data.id}Parts`">
<div class="parts clearfix">
<ul>
<li>
<dl class="clearfix">
<dt>愛車レベル</dt>
<dd>レベル: <input type="tel" v-model="carLevel" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>エンジン</dt>
<dd>サイズ: <input type="tel" v-model="engineSize" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="engineLevel" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>トランスミッション</dt>
<dd>サイズ: <input type="tel" v-model="data.parts.transmission.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="data.parts.transmission.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>タイヤ</dt>
<dd>サイズ: <input type="tel" v-model="data.parts.tire.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="data.parts.tire.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>ニトロ</dt>
<dd>サイズ: <input type="tel" v-model="data.parts.nitro.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="data.parts.nitro.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>ECU</dt>
<dd>サイズ: <input type="tel" v-model="data.parts.ecu.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="data.parts.ecu.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>フリー</dt>
<dd class="freeType">種類: <select v-model="data.parts.free1.selected">
<option v-for="option in data.parts.free1.type" :value="option.value">{{option.text}}</option>
</select></dd>
<dd>サイズ: <input type="tel" v-model="data.parts.free1.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="data.parts.free1.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>フリー</dt>
<dd class="freeType">種類: <select v-model="data.parts.free2.selected">
<option v-for="option in data.parts.free2.type" v-bind:value="option.value">{{option.text}}</option>
</select></dd>
<dd>サイズ: <input type="tel" v-model="data.parts.free2.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="data.parts.free2.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>仲間</dt>
<dd>高速: <input type="tel" v-model="data.parts.nakama.speed" class="iptParts"></dd>
<dd>加速: <input type="tel" v-model="data.parts.nakama.acceleration" class="iptParts"></dd>
<dd>ハンドリング: <input type="tel" v-model="data.parts.nakama.handling" class="iptParts"></dd>
</dl>
</li>
</ul>
<div class="btns">
<a href="#" @click="saveParts" class="btnSave">反映</a>
<span class="saveMessage">{{saveMessage}}</span>
</div>
</div>
</slide-up-down>
<div class="tableWrapper">
<table class="carList">
<thead>
<tr>
<th>車名</th>
<th>戦闘力</th>
<th>高速</th>
<th>加速</th>
<th>ハンドリング</th>
<th>ニトロ</th>
<th>燃費</th>
<th v-if="data.shownNitroless" class="nitroless">ニトロ抜き</th>
<th v-if="data.shownPerformance" class="performance">コスパ</th>
</tr>
</thead>
<tbody>
<tr v-for="car in data.cars">
<td><a :href="`${car.link}`" v-if="car.link !== undefined" target="_blank">{{car.name}}</a><span v-else>{{car.name}}</span></td>
<td>{{car.power}}</td>
<td>{{car.speed}}</td>
<td>{{car.acceleration}}</td>
<td>{{car.handling}}</td>
<td>{{car.nitro}}</td>
<td>{{car.efficiency}}</td>
<td v-if="data.shownNitroless" class="nitroless">{{(car.speed + car.acceleration + car.handling) / 20}}</td>
<td v-if="data.shownPerformance" class="performance">{{(car.power / car.efficiency).toFixed(2)}}</td>
</tr>
</tbody>
</table>
</div>
</section>
</template>

<script>
import List from '~/lib/list'

export default {
  props: {
    'id': String
  },
  data() {
    return {
      'isPartsOpen': false,
      'isAppliedParts': false,
      'saveMessage': ''
    }
  },
  computed: {
    data() {
      return this.$store.state[this.id]
    },
    carLevel: {
      get() {
        return this.$store.getters[`${this.id}/getCarLevel`]
      },
      set(value) {
        this.$store.commit(`${this.id}/setCarLevel`, value)
      }
    },
    engineSize: {
      get() {
        return this.$store.getters[`${this.id}/getEngineSize`]
      },
      set(value) {
        this.$store.commit(`${this.id}/setEngineSize`, value)
      }
    },
    engineLevel: {
      get() {
        return this.$store.getters[`${this.id}/getEngineLevel`]
      },
      set(value) {
        this.$store.commit(`${this.id}/setEngineLevel`, value)
      }
    }
  },
  methods: {
    incrementStar: function(e) {
      e.preventDefault()
      let reset = false;
      this.$store.commit(`${this.id}/incrementStars`)
      if (this.data.stars === 8) {
        reset = true;
      }
      List.updateStarStatus({
        id: this.data.id,
        originalCars: this.data.originalCars,
        stars: this.data.stars,
        originalStars: this.data.originalStars,
        reset: reset,
        store: this.$store
      });
      this.$store.commit(`${this.id}/setCars`, JSON.parse(JSON.stringify(this.data.originalCars)))
      if (this.isAppliedParts) {
        List.updateParts({
          id: this.data.id,
          cars: this.data.cars,
          originalCars: this.data.originalCars,
          carLevel: this.data.carLevel,
          parts: this.data.parts,
          store: this.$store,
          mode: "set"
        });
      }
    },
    incrementPlus: function() {
    },
    toggleParts: function(e) {
      e.preventDefault()
      if (this.isPartsOpen === false) {
        this.isPartsOpen = true
        this.isAppliedParts = true
        List.updateParts({
          id: this.data.id,
          cars: this.data.cars,
          originalCars: this.data.originalCars,
          carLevel: this.data.carLevel,
          parts: this.data.parts,
          store: this.$store,
          mode: "set"
        })
      } else {
        this.isPartsOpen = false
        this.isAppliedParts = false
        List.resetParts({
          id: this.data.id,
          cars: this.data.cars,
          originalCars: this.data.originalCars,
          store: this.$store
        })
      }
    },
    saveParts: function(e) {
      e.preventDefault()
      this.saveMessage = "反映しました。"
      setTimeout(() => {
        this.saveMessage = ""
      }, 2000)
      this.$store.dispatch(`${this.id}/setCarLevel`, this.data.carLevel)
      this.$store.dispatch(`${this.id}/setParts`, this.data.parts)
      List.updateParts({
        id: this.data.id,
        cars: this.data.cars,
        originalCars: this.data.originalCars,
        carLevel: this.data.carLevel,
        parts: this.data.parts,
        store: this.$store,
        mode: "set"
      })
    }
  }
}
</script>

<style scoped>
.tableWrapper {
  width: 100%;
  overflow-x: scroll;
}
.titleStar {
    padding: 10px;
    border-left: 4px solid #5d8596;
    font-size: 16px;
}
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
.carListTool {
    height: 35px;
    margin-bottom: 1px;
    padding: 10px;
    background: #eee;
}
.labelStatus {
    display: block;
    float: left;
    margin-top: 8px;
    margin-right: 10px;
    font-size: 14px;
}
.btnStars {
    display: block;
    float: left;
    width: 120px;
    height: 28px;
    padding-top: 3px;
    background: #329e51;
    border-bottom: 3px solid #237149;
    /*
    border-radius: 5px;
    background: #00b3ff;
    */
    font-size: 14px;
    text-align: center;
    text-decoration: none;
}
.starStatus3:after {
    content: "★★★☆☆☆☆";
    color: #f9dc3b;
    line-height: 1.9;
}
.starStatus4:after {
    content: "★★★★☆☆☆";
    color: #f9dc3b;
    line-height: 1.9;
}
.starStatus5:after {
    content: "★★★★★☆☆";
    color: #f9dc3b;
    line-height: 1.9;
}
.starStatus6:after {
    content: "★★★★★★☆";
    color: #f9dc3b;
    line-height: 1.9;
}
.starStatus7:before {
    content: "★★★★★★";
    color: #f9dc3b;
    line-height: 1.9;
}
.starStatus7:after {
    content: "★";
    color: #bf0e0d;
    line-height: 1.9;
}
.btnPlus {
    display: block;
    float: left;
    width: 45px;
    height: 28px;
    padding-top: 3px;
    margin-left: 20px;
    padding-left: 15px;
    border-bottom: 3px solid #415d69;
    background: #5d8596;
    /*
    border-radius: 5px;
    background: #3f93b7;
    background: #6fbd5b;
    */
    color: #333;
    text-align: center;
    text-decoration: none;
}
.btnPlus span {
    display: block;
    float: left;
    width: 12px;
    height: 12px;
    margin-top: 7px;
    border-radius: 6px;
    background: #eee;
    color: #999;
    font-family: "arial", sans-serif;
    font-size: 12px;
    line-height: 1;
    text-align: center;
}
.btnPlus .firstPlus {
    margin-right: 5px;
}
.plusStatus1 .firstPlus {
    background: #5bff54;
    color: #333;
}
.plusStatus2 .firstPlus,
.plusStatus2 .secondPlus {
    background: #5bff54;
    color: #333;
}
.close {
    display: none;
}
.btnParts {
    float: right;
    border: 1px solid #ccc;
    padding: 5px;
    background: #fff;
    color: #333;
    font-size: 14px;
    text-decoration: none;
}
.btnParts:after {
    content: "▼";
    font-size: 8px;
    padding-left: 4px;
    color: #999;
}
.btnParts.open:after {
    content: "▲";
}
.btnSave {
    border: 1px solid #ccc;
    padding: 5px 20px;
    background: #fff;
    color: #333;
    font-size: 14px;
    text-decoration: none;
    text-align: center;
}
.saveMessage {
    margin-left: 10px;
    font-size: 12px;
}
.parts {
    padding: 10px;
    background: #f5f5f5;
    font-size: 14px;
}
.parts dl {
    margin: 0;
    padding: 0 0 10px;
}
.parts dt {
    float: left;
    width: 150px;
    margin:  0 20px 0 0;
    padding-right: 10px;
    border-right: 1px solid #ccc;
}
.parts dd {
    float: left;
    margin: 0 10px;
}
.parts .btns {
    clear: left;
}
@media screen and (max-width: 500px) {
    .parts dt {
        float: none;
        padding-left: 5px;
        border-left: 2px solid #ccc;
        border-right: none;
    }
    .parts dd {
    }
    .parts dd.freeType {
        float: none;
    }
    .carListTool {
        height: 55px;
    }
    .labelStatus {
        float: none;
        margin-top: 0;
    }
}
.iptParts {
    width: 40px;
}
.carList {
    width: 100%;
    border: 1px solid #ddd;
    border-collapse: collapse;
    font-size: 14px;
}
.carList th {
    padding: 5px;
    border: 1px solid #ddd;
    background: #888;
    color: #fff;
    /*
    background: #eaf7fd;
    */
}
.carList td {
    padding: 5px;
    border: 1px solid #ddd;
    background: #f8f8f8;
}
.carList .selected td {
    background: #d8f9f5;
}
</style>
