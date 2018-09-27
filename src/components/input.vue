<template>
  <div>
    <div class="test">TODO</div>
    <div class="input_box">
      <input class="input_todo" type="text" placeholder="please input something ..."/>
      <div class="enter_input" @click="save">保存</div>
    </div>
    <div class="todo_box">
      <div v-for="item in todoList">
        <p class="todo_time">截止时间 {{item.deadline}} </p>
        <p class="todo_detail">{{item.todoItem}}</p>
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
            "deadline": "18:00",
            "todoItem": "今天下午需要把相关的需求文档熟悉一遍并完成60%的相关功能",
          },
          {
            "deadline": "18:00",
            "todoItem": "今天下午需要把相关的需求文档熟悉一遍并完成60%的相关功能",
          },
          {
            "deadline": "18:00",
            "todoItem": "今天下午需要把相关的需求文档熟悉一遍并完成60%的相关功能",
          }
        ]
      }
    },
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
    @include wh(100%, 7em);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e8e8e8;
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
      padding: 0 1em;
      margin-left: 1em;
      background: #034d8d;
      border-radius: .5em;
    }
  }

  .todo_box {
    box-sizing: border-box;
    width: 92%;
    margin: 4vw auto;
    @include font($font-size-28, 2em, $color-33, left);
    border-radius:  .5em;
    background: #d4d4d4;
    >div {
      border-bottom: 1px solid #999;
      padding: 1em 0;
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


</style>
