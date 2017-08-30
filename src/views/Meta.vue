<template>
  <div class="metaContent">
    <div class="headerTitle">标签</div>
    <div class="tagCloud">
        <div class="tagTitle">目前共计11个标签</div>
        <div class="tags">
            <span style="font-size: 21px; color: #6f6f6f">CSS</span>
            <span style="font-size: 12px; color: #ccc">Git</span>
            <span style="font-size: 16.5px; color: #9d9d9d">HTML</span>   
            <span style="font-size: 25.5px; color: #404040">JavaScript</span>
            <span style="font-size: 16.5px; color: #9d9d9d">Web前端</span>
            <span>设计模式</span>
            <span style="font-size: 25.5px; color: #404040">VUE</span>
            <span>NodeJS</span>
            <span>Webpack</span>
            <span>前端自动化</span>             
        </div>
    </div>


  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .headerTitle{
    font-size: 26px;
    text-align: center;
    color: #555;
    font-weight: 400;
    height: 39px;
    line-height: 39px;
    padding-top: 20px;
  }
  .tagCloud{
    text-align: center;
    .tagTitle{
      color: #555;
      font-size: 14px;
      line-height: 2;
    }
    .tags{
      width: 700px;
      margin: 0 auto;
      span{
        display: inline-block;
        margin: 10px;
        border-bottom: 1px solid #999;
        line-height: 2;
        cursor: pointer;
      }
      span:hover{
        border-bottom: 1px solid #222;
      }
    }
  }
</style>

