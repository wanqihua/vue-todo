<template>
  <div>
    <div class="test">test</div>
    <div class="input_box">
      <textarea class="input_todo" rows="3" placeholder="please input ..." v-model="newItem"></textarea>
      <div class="enter_input" @click="save">保存</div>
    </div>
    <div class="todo_box">
      <div class="sub_item" v-for="item in todoList" ref="touch" v-touch :key="item.id">
        <div class="had_done" :class="{'done_btn':item.done===true}" @click="doneEvent(item.tiemId)"></div>
        <p  :class="[ item.done===true ? 'done todo_time_done' : 'todo_time' ] " >deadline ~ {{item.deadline}} </p>
        <p class="todo_detail" :class="{'done':item.done===true}">{{item.todoItem}}</p>
        <div class="delete_btn">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { createCode } from '../common/js/tool.js';
  export default {
    data(){
      return {
        todoList: [
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
        newItem: '',
        expansion: null,
      }
    },
    methods:{
      trim(str){
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      },
      // 保存
      save(){
        if( this.trim(this.newItem).length > 0 ){
          let newList = {};
          newList.tiemId = createCode();
          newList.done = false;
          newList.deadline = '24:00';
          newList.todoItem = this.trim(this.newItem);
          this.todoList.push(newList);
          this.newItem = '';
        }
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
      },
    },
    components:{
    },
    directives:{
      touch: {
        bind: function(el){
          let initX;                 // 触摸位置X
          let initY;                 // 触摸位置Y
          let moveX;                 // 滑动时的位置X
          let moveY;                 // 滑动时的位置Y
          let X;                     // 移动距离
          let Y;                     // 移动距离
          let objX = 0;              // 目标对象位置
          let touchFlag = false;     // 判断是点击还是滑动
          let em;
          let swipeX;
          let swipeY;
          el.addEventListener('touchstart',function(event){
            em = 5 * parseInt(document.defaultView.getComputedStyle(el, null).fontSize);
            event.stopPropagation();    // 阻止冒泡
            touchFlag = false;
            swipeX = true;
            swipeY = true;
            initX = event.targetTouches[0].pageX;
            initY = event.targetTouches[0].pageY;
            objX = (el.style.transform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
            if( this.expansion && this.expansion !== event.currentTarget ){   //判断是否有展开，如果有展开则收起
              this.expansion.style.transform = "translateX(0px)";
            }
          },false);
          el.addEventListener('touchmove',function(event){
            moveX = event.targetTouches[0].pageX;
            moveY = event.targetTouches[0].pageY;
            X = moveX - initX;
            Y = moveY - initY;
            if( swipeX && Math.abs(X) > Math.abs(Y) ){
              event.stopPropagation();   // 阻止冒泡
              swipeY = false;
              touchFlag = true;
              if( objX === 0 ){       // 收起的状态
                if(X >= 0){
                  el.style.transform = "translateX(" + 0 + "px)";
                }else if (X < 0){
                  if (X < -em) {
                    X = -em;
                  }
                  el.style.transform = "translateX(" + X + "px)";
                }
              }else if( objX < 0 ){   // 展开的状态
                if(X >= 0){
                  if( (X - em) > 0 ){
                    X = em;
                  }
                  el.style.transform = "translateX(" + (X - em) + "px)";
                }else{                // 保持展开状态
                  el.style.transform = "translateX(-"+ em +"px)";
                }
              }
            }else if(swipeY && Math.abs(X) - Math.abs(Y) < 0){  //上下滑动
              touchFlag = true;
              swipeX = false;
              //上下滑动，使用浏览器默认的上下滑动
            }
          },false);
          el.addEventListener('touchend', function(event) {
            event.stopPropagation();   // 阻止冒泡
            if( touchFlag === false ){
              // code for noMove
              if( event.target.className === 'delete_btn' ){
                console.log(event.target.className)
                el.className += ' disappear';
                setTimeout(function(){
                  el.parentNode.removeChild(el);
                },400)
              }
            }else{
              objX = (el.style.transform.replace(/translateX\(/g, "").replace(/px\)/g, "")) * 1;
              if (objX > -em/2) {
                el.style.transform = "translateX(" + 0 + "px)";
              } else {
                this.expansion = el;
                el.style.transform = "translateX(" + -em + "px)";
              }
            }
          },false)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .test {
    @include font($font-size-40, 2em, $color-33, center);
    @include wh(100%, 2em);
    padding: 1em auto .3em;
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
      @include font($font-size-32, 1.5em, $color-33, left);
      width: 70%;
      max-height: 7em;
      display: block;
      box-sizing: border-box;
      @include border-dpr(border, 1px, $color-topic);
      border-radius: .5em;
      padding: 0 .5em;
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
    overflow-x: hidden;
    .sub_item {
      @include border-dpr(border-bottom, 1px, #999);
      box-sizing: border-box;
      height: 4.75em;
      padding: .5em 0;
      position: relative;
      .had_done {
        position: absolute;
        z-index: 2;
        @include wh(1.25em, 1.25em);
        top: .5em;
        right: 4vw;
        border-radius: 50%;
        border: 1px solid $color-99;
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
          background: $color-99;
        }
      }
      .todo_time {
        box-sizing: border-box;
        @include font($font-size-28, 1.25em, $color-33, left);
        @include wh(100%, 1.25em);
        font-weight: 500;
        padding-left: 8vw;
        margin-bottom: .5em;
        position: relative;
        transition: all 1s;
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
      .todo_time_done {
        box-sizing: border-box;
        @include font($font-size-28, 1.25em, $color-33, left);
        @include wh(100%, 1.25em);
        font-weight: 400;
        padding-left: 4vw;
        margin-bottom: .5em;
        position: relative;
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
        transition: all 1s;
      }
      .delete_btn {
        position: absolute;
        top: 0;
        right: -5em;
        height: 100%;
        width: 5em;
        background: #e63838;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .sub_item:last-child {
      border-bottom: none;
    }
  }

  /*已完成的样式*/
  .done {
    text-decoration: line-through!important;
    color: $color-99!important;
    transition: all 1s;
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

  .disappear {
    height: 0!important;
    padding: 0!important;
    overflow: hidden;
    -webkit-transition: height .4s ease-in-out, padding .4s ease-in-out;
            transition: height .4s ease-in-out, padding .4s ease-in-out;
  }

</style>
