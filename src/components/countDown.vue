<template>
  <div class="count-down-box">
    <p>{{ days }}</p>
    <p>D</p>
    <p>{{ hours }}</p>
    <p>H</p>
    <p>{{ min }}</p>
    <p>M</p>
    <p>{{ second }}</p>
    <p>S</p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        countDownTime: Date.parse(new Date("2022-07-13 00:00:00"))/1000 - Date.parse(new Date())/1000,
        days: null,
        hours: null,
        min: null,
        second: null,
        flag: true,
      }
    },
    created(){
      this.countDown();
    },
    methods: {
      countDown: function(){
        var self = this;
        self.days = Math.floor(self.countDownTime/60/60/24);
        self.hours = Math.floor(self.countDownTime/60/60%24);
        self.min = Math.floor(self.countDownTime/60%60);
        self.second = Math.floor(self.countDownTime%60);
        setInterval(function(){
          var currentSecond = --self.countDownTime;
          self.days = Math.floor(self.countDownTime/60/60/24);
          self.hours = Math.floor(currentSecond/60/60%24);
          self.min = Math.floor(currentSecond/60%60);
          self.second = Math.floor(currentSecond%60);
        },1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .count-down-box {
    width: 100%;
    height: 1.53rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e63838;
    p {
      min-width: .53rem;
      height: .53rem;
      text-align: center;
      font-size: 22px;
      line-height: .53rem;
      padding: .1em;
    }
    p:nth-child(odd) {
      background: #fff;
      font-weight: 800;
      color: rgba(240,46,73,1);
    }
    p:nth-child(even) {
      background: transparent;
      font-weight: 500;
      color: rgba(255,255,255,1);
    }
  }
</style>
