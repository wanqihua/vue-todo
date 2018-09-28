<template>
  <div>
    <div class="test">TODO</div>
    <div class="input_box">
      <!--<input class="input_todo" type="text" placeholder="please input something ..."/>-->
      <div class="input_todo" contenteditable="true"></div>
      <div class="enter_input" @click="save">保存</div>
    </div>
    <div class="todo_box">
      <div v-for="item in todoList">
        <div class="had_done" :class="{'done_btn':item.done===true}" @click="doneEvent(item.tiemId)"></div>
        <p class="todo_time" :class="{'done':item.done===true}">截止时间 {{item.deadline}} </p>
        <p class="todo_detail" :class="{'done':item.done===true}">{{item.todoItem}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        todoList:[
          {
            "tiemId": "2354sdfh23",
            "done": true,
            "deadline": "18:00",
            "todoItem": "今天下午需要把相关的需求文档熟悉一遍并完成60%的相关功能",
          },
          {
            "tiemId": "2354sdfh24",
            "done": false,
            "deadline": "18:00",
            "todoItem": "今天下午需要把相关的需求文档熟悉一遍并完成60%的相关功能",
          },
          {
            "tiemId": "2354sdfh25",
            "done": false,
            "deadline": "18:00",
            "todoItem": "今天下午需要把相关的需求文档熟悉一遍并完成60%的相关功能",
          }
        ],
      }
    },
    methods:{
      // 保存
      save: function(){

      },
      // 已完成点击事件
      doneEvent(id){
        for(let item of this.todoList){
          if( item.tiemId === id ){
            if( item.done === false ){
              this.$set(item, "done", true)
            }else{
              this.$set(item, "done", false)
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .test {
    @include font($font-size-40, 2em, $color-33, center);
    @include wh(100%, 2em);
    margin: 1em auto .3em;
  }

  .input_box {
    @include font($font-size-32, 2em, $color-33, center);
    @include wh(92%, 7em);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $background-color-f8;
    border-radius:  .5em;
    margin: 0 auto;
    /*padding*/
    .input_todo {
      @include font($font-size-32, 1.5em, $color-33, center);
      width: 70%;
      max-height: 7em;
      display: block;
      box-sizing: border-box;
      @include border-dpr(border, 1px, $color-topic);
      border-radius: .5em;
      padding: .25em;
      min-height: 2em;
      outline: 0;
      word-wrap: break-word;
      overflow-x: hidden;
      overflow-y: auto;
      /*解决ios无法输入的问题*/
      -webkit-user-select: text;
    }
    .enter_input {
      @include font($font-size-32, 2em, $color-ff, center);
      box-sizing: border-box;
      height: 2em;
      padding: 0 1em;
      margin-left: 1em;
      background: $color-topic;
      border-radius: .5em;
    }
  }

  .todo_box {
    box-sizing: border-box;
    width: 92%;
    margin: 4vw auto;
    @include font($font-size-28, 2em, $color-33, left);
    border-radius:  .5em;
    background: $background-color-f8;
    >div {
      @include border-dpr(border-bottom, 1px, #999);
      padding: 1em 0;
      position: relative;
      .had_done {
        position: absolute;
        z-index: 2;
        @include wh(1.25em, 1.25em);
        top: 1em;
        right: 4vw;
        border-radius: 50%;
        border: 1px solid #666;
      }
      .done_btn {
        &:after {
          content: "";
          display: block;
          position: absolute;
          @include wh(.75em, .75em);
          border-radius: 50%;
          top: .25em;
          right: .25em;
          background: #666;
        }
      }
      .todo_time {
        box-sizing: border-box;
        @include font($font-size-28, 1.25em, $color-33, left);
        @include wh(100%, 1.25em);
        font-weight: 500;
        padding-left: 8vw;
        margin-bottom: 1em;
        position: relative;
        &:after {
          content: "";
          display: block;
          position: absolute;
          @include wh(.2em, 1.25em);
          top: 0;
          left: 4vw;
          background: #3388ff;
        }
      }
      .todo_detail {
        box-sizing: border-box;
        @include wh(100%, 2em);
        font-weight: 400;
        padding-left: 4vw;
        padding-right: 4vw;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    >div:last-child {
      border-bottom: none;
    }
  }

  /*已完成的样式*/
  .done {
    text-decoration: line-through!important;
    color: $color-99!important;
  }


  /*1px极细线的问题*/
  .borBot {
    overflow: hidden;
    position: relative;
    border: none!important;
    &:before {
      content: ".";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #222;
      -webkit-transform-origin: 0 0; /*缩放后依旧是top left*/
      transform-origin: 0 0;
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }

</style>
