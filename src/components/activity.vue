<template>
  <div class="rules-box">
    <div class="close-button"></div>
    <div class="top-des">
      <p>This October, SHEIN is officially turning 10 years old! We would love to invite you to celebrate the big day with us!</p>
      <p>From Oct.20-Oct 27</p>
    </div>
    <p class="title-one">{{rulesData.topic}}</p>
    <p class="title-two">{{rulesData.topicSub}}</p>
    <div class="three-box">
      <p v-for="item in rulesData.pointsClass">
        <span>{{item.rank}}</span>
        <span>{{item.point}}</span>
      </p>
    </div>
    <div v-for="item in rulesData.allRules">
      <p class="title-one">{{item.titleOne}}</p>
      <div v-for="subItem in item.content">
        <p v-if="subItem.titleTwo" class="title-two">{{subItem.titleTwo}}</p>
        <div>
          <p class="text" v-if="subItem.text" v-for="(testItem,index) in subItem.text" :index="index+1">. {{testItem}}</p>
        </div>
      </div>
    </div>
    <div class="upload-photo">Upload Photo</div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        rulesData:{
          topic: 'Prizes',
          topicSub: 'A Total of 20,000 Points for The Top 100 People!',
          pointsClass: [
            {
              rank: 'Top 10',
              point: '500 Points',
            },{
              rank: 'Top 11 - 40',
              point: '300 Points',
            },{
              rank: 'Top 40 - 100',
              point: '100 Points',
            }
          ],
          allRules: [
            {
              titleOne: 'How To Win',
              content: [
                {
                  titleTwo: null,
                  text: [
                    'Upload a photo of yourself with an outfit that represents the SHEIN style',
                    'Get as many votes as possible to win!'
                  ]
                }
              ]
            },{
              titleOne: 'How To Vote',
              content: [
                {
                  titleTwo: 'Vote For Yourself',
                  text: [
                    '20 votes available every 24 hours, 5 extra votes for sharing; 25 votes max',
                    'You can use the available votes all for your entry, or also share them for other entries',
                    'Your votes will expire every 24 hours, to win we suggest you use them all everyday'
                  ]
                },{
                  titleTwo: 'Get Others To Vote',
                  text: [
                    'Share your entry to your friends to get more votes',
                    'Each person you share with has 20 votes available every 24 hours, 5 extra votes for sharing,25 votes max',
                    '25 votes can be used on 1 single entry or shared upon several entries.'
                  ]
                },{
                  titleTwo: 'Now, Upload one of your SHEIN style photos and share to get more votes!',
                  test: null
                }
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss">
  .rules-box {
    width: 100%;
    .close-button{
      position: fixed;
      top: .44rem;
      right: .32rem;
      width: .8rem;
      height: .8rem;
      background:rgba(255,255,255,1);
      box-shadow:0 0 8px 0 rgba(0,0,0,0.3);
      border-radius: 50%;
      transform: rotate(45deg);
      &:before {
        content:"";
        display: block;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        width: .5rem;
        height: .027rem;
        background: #000;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
      }
      &:after {
        content:"";
        display: block;
        overflow: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        height: .5rem;
        width: .027rem;
        background: #000;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
      }
    }
    .top-des {
      width: 100%;
      height: 4.9333rem;
      background:linear-gradient(316deg,rgba(242,141,96,1) 0%,rgba(240,46,73,1) 100%);
      overflow: hidden;
      p:nth-child(1){
        width: 8.72rem;
        margin: 1.46667rem auto .45333rem;
        font-size: 34px;
        /*.font-dpr(34px);*/
        font-weight: 500;
        color: rgba(255,255,255,1);
        line-height: 46px;
      }
      p:nth-child(2){
        font-size: 28px;
        /*.font-dpr(28px);*/
        font-weight: 500;
        color: rgba(255,255,255,1);
        line-height: .506667rem;
        padding-left: .64rem;
      }
    }
    .title-one {
      margin-left: .64rem;
      margin-top: .8rem;
      width: 8.72rem;
      font-size: 48px;
      /*.font-dpr(48px);*/
      font-weight: 800;
      color: rgba(34,34,34,1);
      line-height: .88rem;
    }
    .title-two {
      margin-left: .64rem;
      margin-top: .533rem;
      width: 8.72rem;
      font-size: 28px;
      /*.font-dpr(28px);*/
      font-weight: 800;
      color: rgba(34,34,34,1);
      line-height: .50667rem;
    }
    .three-box {
      width: 8.72rem;
      margin: .533rem auto 0;
      p{
        width: 100%;
        height: 1.1733rem;
        line-height: 1.1733rem;
        font-size: 0;
        margin-bottom: .10667rem;
        span {
          box-sizing: border-box;
          padding: 0 .4rem;
          font-size: 34px;
          /*.font-dpr(34px);*/
          display: inline-block;
          width: 50%;
          font-weight:800;
          color:rgba(255,255,255,1);
        }
        span:nth-child(1){
          text-align: left;
        }
        span:nth-child(2){
          text-align: right;
        }
      }
      p:nth-child(1){
        background:linear-gradient(135deg,rgba(250,103,64,1) 0%,rgba(255,210,128,1) 100%);
      }
      p:nth-child(2){
        background:linear-gradient(135deg,rgba(130,143,172,1) 0%,rgba(183,213,231,1) 100%);
      }
      p:nth-child(3){
        background:linear-gradient(135deg,rgba(211,147,89,1) 0%,rgba(250,173,161,1) 100%);
        margin-bottom: 0;
      }
    }
    .text {
      width: 8.72rem;
      margin: .32rem auto 0;
      font-size:28px;
      /*.font-dpr(28px);*/
      color: rgba(34,34,34,1);
      line-height: .50667rem;
      text-indent: .6em;
      position: relative;
      &:before {
        content: attr(index);
        display: block;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: -.6em;
        font-weight: 800;
      }
    }
    .upload-photo {
      width: 8.56rem;
      height: 1.06667rem;
      margin: .8rem auto 1.17333rem;
      background: linear-gradient(135deg,rgba(242,141,96,1) 0%,rgba(240,46,73,1) 100%);
      font-size: 34px;
      /*.font-dpr(34px);*/
      font-weight: 800;
      color:rgba(255,255,255,1);
      line-height: 1.06667rem;
      text-align: center;
    }
  }

</style>
