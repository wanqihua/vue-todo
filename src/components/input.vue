<template>
  <div>
    <div class="test">TODO</div>
    <div class="input_box">
      <input class="input_todo" type="text" placeholder="please input something ..."/>
      <div class="enter_input" @click="save">保存</div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      //保存
      save: function(){

      }
    }
  }
</script>

<style lang="scss" scoped>
  .test {
    @include font($font-size-40, 2em, $color-33, center);
    @include wh(100%, 2em);
    margin: 1rem auto .3rem;
  }

  .input_box {
    @include font($font-size-32, 2em, $color-33, center);
    @include wh(92%, 7em);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $background-color-f8;
    margin: 0 auto;
    /*padding*/
    .input_todo {
      @include font($font-size-32, 2em, $color-33, center);
      @include wh(70%, 2em);
      display: block;
      box-sizing: border-box;
      border: 1px solid #0b6173;
      border-radius: .5em;
    }
    .enter_input {
      @include font($font-size-32, 2em, $color-ff, center);
      box-sizing: border-box;
      height: 2em;
      padding: 0 .5em;
      margin-left: 1em;
      background: #034d8d;
      border-radius: .5em;
    }
  }



</style>
