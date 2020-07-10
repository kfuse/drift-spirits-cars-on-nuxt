<template>
<section id="threeStars">
<h3 class="titleStar">初期レアリティ☆☆☆ (星3)</h3>
<input type="text" v-model="filteringText" class="hiddenText">
<div class="carListTool">
<span class="labelStatus">ステータス:</span>
<a href="#" class="btnStars starStatus{{stars}}" v-on:click="incrementStar"></a>
<a href="#" class="btnPlus plusStatus{{plus}}" v-on:click="incrementPlus"><span class="firstPlus">+</span><span class="secondPlus">+</span></a>
<a href="#" class="btnParts" v-on:click="toggleParts">パーツ</a>
</div>
<div class="parts clearfix close" id="threeStarsParts">
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
<dd>サイズ: <input type="tel" v-model="parts.engine.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="parts.engine.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>トランスミッション</dt>
<dd>サイズ: <input type="tel" v-model="parts.transmission.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="parts.transmission.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>タイヤ</dt>
<dd>サイズ: <input type="tel" v-model="parts.tire.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="parts.tire.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>ニトロ</dt>
<dd>サイズ: <input type="tel" v-model="parts.nitro.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="parts.nitro.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>ECU</dt>
<dd>サイズ: <input type="tel" v-model="parts.ecu.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="parts.ecu.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>フリー</dt>
<dd class="freeType">種類: <select v-model="parts.free1.selected">
<option v-for="option in parts.free1.type" v-bind:value="option.value">{{option.text}}</option>
</select></dd>
<dd>サイズ: <input type="tel" v-model="parts.free1.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="parts.free1.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>フリー</dt>
<dd class="freeType">種類: <select v-model="parts.free2.selected">
<option v-for="option in parts.free2.type" v-bind:value="option.value">{{option.text}}</option>
</select></dd>
<dd>サイズ: <input type="tel" v-model="parts.free2.size" class="iptParts"></dd>
<dd>レベル: <input type="tel" v-model="parts.free2.level" class="iptParts"></dd>
</dl>
</li>
<li>
<dl class="clearfix">
<dt>仲間</dt>
<dd>高速: <input type="tel" v-model="parts.nakama.speed" class="iptParts"></dd>
<dd>加速: <input type="tel" v-model="parts.nakama.acceleration" class="iptParts"></dd>
<dd>ハンドリング: <input type="tel" v-model="parts.nakama.handling" class="iptParts"></dd>
</dl>
</li>
</ul>
<div class="btns">
<a href="#" v-on:click="saveParts" class="btnSave">反映</a>
<span class="saveMessage">{{saveMessage}}</span>
</div>
</div>
<div class="tableWrapper">
<table class="carList">
<tr>
<th>車名</th>
<th>戦闘力</th>
<th>高速</th>
<th>加速</th>
<th>ハンドリング</th>
<th>ニトロ</th>
<th>燃費</th>
<th v-if="shownNitroless" class="nitroless">ニトロ抜き</th>
<th v-if="shownPerformance" class="performance">コスパ</th>
</tr>
<tr v-for="car in filteredCars">
<td><a href="{{car.link}}" v-if="car.link !== undefined" target="_blank">{{car.name}}</a><span v-else>{{car.name}}</span></td>
<td>{{car.power}}</td>
<td>{{car.speed}}</td>
<td>{{car.acceleration}}</td>
<td>{{car.handling}}</td>
<td>{{car.nitro}}</td>
<td>{{car.efficiency}}</td>
<td v-if="shownNitroless" class="nitroless">{{(car.speed + car.acceleration + car.handling) / 20}}</td>
<td v-if="shownPerformance" class="performance">{{(car.power / car.efficiency).toFixed(2)}}</td>
</tr>
</table>
</div>
</section>
</template>
