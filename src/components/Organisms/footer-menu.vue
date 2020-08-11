<template>
  <div>
    <div id="footerMenu" :class="[footerMenuOpen === true ? 'open' : '']">
      <div class="container">
        <a href="#" id="btnCompare" @click="btnCompareClick">比較する</a>
      </div>
    </div>
    <div id="modal">
    <div class="modalBox">
    <a href="#" class="btnClose">x</a>
    <h3 class="titleCompare">比較</h3>
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
    <client-only><th v-if="shownNitroless" class="nitroless">ニトロ抜き</th></client-only>
    <client-only><th v-if="shownPerformance" class="performance">コスパ</th></client-only>
    </tr>
    </thead>
    <tbody v-html="carList">
    </tbody>
    </table>
    </div>
    </div>
    <div class="modalBg"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      carList: ''
    }
  },
  computed: {
    ...mapState(['shownNitroless', 'shownPerformance', 'footerMenuOpen'])
  },
  methods: {
    btnCompareClick: function(e) {
      e.preventDefault()
      let trs = document.getElementById('content').getElementsByClassName('selected'),
          carList = '',
          i = 0,
          modal = document.getElementById('modal');
      for (i = 0; i < trs.length; i++) {
        this.carList += trs[i].outerHTML;
      }
      modal.style.display = 'block'
      /*
      document.getElementById("compareDialog").innerHTML = modalTemplate.replace("{{carList}}", carList);
      document.getElementById("modal").style.display = "block";
      this.setView();
      // 背景をクリックでダイアログを閉じる
      Util.addListener(document.getElementById("modal"), "click", function(e) {
        document.getElementById("modal").style.display = "none";
        document.getElementById("compareDialog").innerHTML = "";
      });
      Util.addListener(Util.getElementsByClassName(document.getElementById("modal"), "btnClose", "div")[0], "click", function(e) {
        Util.preventDefault(e);
        document.getElementById("modal").style.display = "none";
        document.getElementById("compareDialog").innerHTML = "";
      });
      Util.addListener(Util.getElementsByClassName(document.getElementById("modal"), "modalBox", "div")[0], "click", function(e) {
        Util.stopPropagation(e);
      });
      */
    }
  }
}
</script>

<style>
#footerMenu {
  position: fixed;
  width: 100%;
  bottom: -92px;
  overflow: hidden;
}
#footerMenu.open {
  bottom: 0px;
}
#footerMenu .container {
  height: 42px;
  padding: 25px 20px 25px;
  background: rgba(0,0,0,0.4);
  transition-property: bottom;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  text-align: center;
}
#btnCompare {
  display: block;
  width: 120px;
  height: 28px;
  margin: 0 auto;
  padding-top: 10px;
  background: #329e51;
  border-bottom: 3px solid #237149;
  color: #fff;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
}
#modal {
  display: none;
}
.titleCompare {
    margin: 0 0 10px;
    padding: 10px;
    border-left: 4px solid #5d8596;
    font-size: 16px;
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
.modalBox {
    position: fixed;
    z-index: 2;
    top: 25%;
    left: 10px;
    margin: 0 auto;
    padding: 10px;
    background: #fff;
}
.modalBox .carList .selected td {
    background: #f8f8f8;
}
.modalBg {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
.btnClose {
    display: block;
    width: 20px;
    height: 20px;
    float: right;
    border: 1px solid #ccc;
    color: #666;
    font-family: arial;
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;
    text-align: center;
}
@media screen and (max-width: 500px) {
  .modalBox {
    top: 10%;
    width: 90vw;
  }
}
</style>
