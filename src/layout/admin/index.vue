<template>
  <div>
    <div class="layout_left">123</div>
    <div class="layout_top">456</div>
    <div class="layout_main">789
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped lang='scss'>
.layout_left{
    background-color: lightblue;
    width: 260px;
    position: fixed;
    top: 50px;
    height: calc(100vh - 50px);
}

.layout_top{
    background-color: lightgreen;
    width: 100%;
    height:50px
}

.layout_main{
    background-color: lightpink;
    width: calc(100vw - 260px);
    height: calc(100vh - 50px);
    position: relative;
    left: 260px;
    padding: 10px;
    overflow: auto;
}
</style>