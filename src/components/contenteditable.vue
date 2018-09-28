<template>
  <div
       v-text="innerText"
       :contenteditable = true
       @focus="isLocked = true"
       @blur="isLocked = false"
       @input="changeText">
  </div>
</template>

<script>
  export default{
    props: ['value'],
    data(){
      return {
        innerText: '',
        isLocked: ''
      }
    },
    watch: {
      value(){
        // console.log("begin"+!this.isLocked);
        // console.log(this.innerText.length);
        // console.log(!this.isLocked && !this.trim(this.innerText));
        if (!this.isLocked && !this.trim(this.innerText)) {
          this.innerText = this.value;
          console.log(this.innerText.length)
        }
      }
    },
    methods: {
      trim(str){
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
      },
      changeText(){
        this.$emit('input', this.$el.innerHTML);
      }
    }
  }
</script>
