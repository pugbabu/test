<template>
  <div class="classify">
    <div class="headerTitle">分类</div>
    <div class="classifyContent">
        <div class="classifyTitle">目前共计4个分类</div>
        <ul class="content">
          <li>
            <span>学习总结</span>
          </li>
          <li>
            <span>项目总结</span>
          </li>
          <li>
            <span>优美文章</span>
          </li>
          <li>
            <span>心理路程</span>
          </li>
        </ul>


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
  .classifyContent{
    text-align: center;
    .classifyTitle{
      color: #555;
      font-size: 14px;
      line-height: 2;
    }
    .content{
      width: 700px;
      font-size: 14px;
      line-height: 2;
      color: #555;
      margin: 0 auto;
      li{
        padding: 5px 10px;
        text-align: left;
      }
      span{
        border-bottom: 1px solid #999;
        cursor: pointer;

      }
    }
  }
</style>

