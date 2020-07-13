<template>
<section>
<h3 v-if="data.id === 'threeStars'" class="titleStar">初期レアリティ☆☆☆ (星3)</h3>
<h3 v-if="data.id === 'fourStars'" class="titleStar">初期レアリティ☆☆☆☆ (星4)</h3>
<input type="text" v-model="data.filteringText" class="hiddenText">
<div class="carListTool">
<span class="labelStatus">ステータス:</span>
<a href="#" :class="`btnStars starStatus${data.stars}`" @click="incrementStar"></a>
<a href="#" :class="`btnPlus plusStatus${data.plus}`" @click="incrementPlus"><span class="firstPlus">+</span><span class="secondPlus">+</span></a>
<a href="#" class="btnParts" @click="toggleParts">パーツ</a>
</div>
<div class="parts clearfix close" :id="`${data.id}Parts`">
<ul>
<li>
<dl class="clearfix">
<dt>愛車レベル</dt>
<dd>レベル: <input type="tel" v-model="data.carLevel" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>エンジン</dt>
<dd>サイズ: <input type="tel" v-model="data.parts.engine.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="data.parts.engine.level" class="iptParts"></dd>
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
<a href="#" v-on:click="saveParts" class="btnSave">反映</a>
<span class="saveMessage">{{data.saveMessage}}</span>
</div>
</div>
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
export default {
  props: {
    'id': String
  },
  computed: {
    data() {
      return this.$store.state[this.id]
    }
  },
  methods: {
    incrementStar: function() {
    },
    incrementPlus: function() {
    },
    toggleParts: function(e) {
      e.preventDefault();
      var partsContainer = document.getElementById(this.data.id + "Parts");
      var parts;
      if (partsContainer.className.match(/close/)) {
        partsContainer.className = partsContainer.className.replace(/close/g, "");
        e.target.className += " iconOpened";
        this.$store.commit(this.data.id + '/setAppliedParts', true);
        if (localStorage.getItem("content.driftspirits.car.list." + this.data.stars + "stars.carLevel") !== null) {
          this.carLevel = JSON.parse(localStorage.getItem("content.driftspirits.car.list." + this.data.stars + "stars.carLevel"));
          parts = JSON.parse(localStorage.getItem("content.driftspirits.car.list." + this.data.stars + "stars.parts"));
          this.data.parts.engine = parts.engine;
          this.data.parts.transmission = parts.transmission;
          this.data.parts.tire = parts.tire;
          this.data.parts.nitro = parts.nitro;
          this.data.parts.ecu = parts.ecu;
          this.data.parts.free1 = parts.free1;
          this.data.parts.free2 = parts.free2;
          if (parts.nakama) {
            this.data.parts.nakama = parts.nakama;
          }
        }
        /*
        List.updateParts({
          cars: this.data.cars,
          originalCars: this.data.originalCars,
          carLevel: this.data.carLevel,
          parts: this.data.parts,
          mode: "set"
        });
        */
      } else {
        partsContainer.className += " close";
        e.target.className = e.target.className.replace(/iconOpened/g, "");
        this.$store.commit(this.data.id + '/setAppliedParts', false);
        // List.resetParts(this.data.cars, this.data.originalCars);
      }
    },
    saveParts: function() {
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
.iconOpened:after {
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
