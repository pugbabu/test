<template>
  <div class="aboutMe">
      <div class="headerTitle">关于</div>
      <div class="content">
        <div class="bg"></div>
        <div class="info clearfix">
          <div class="infoPic fl animated zoomInDown"></div>
          <div class="infoContent fl">
            <p>
              <b>雷大敏</b>
              <span>爱看悬疑惊悚、恐怖片的程序猿</span>
            </p>
            <p>
              <b>居住地</b>
              <span>浙江杭州市江干区</span>
            </p>
           <p>
              <b>所在行业</b>
              <span>互联网大数据分析</span>
            </p>
            <p>
              <b>教育经历</b>
              <span>西南大学 材料科学与工程学院</span>
            </p>
            <p>
              <b>个人简介</b>
              <span>倔强地活着</span>
            </p>
          </div>
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
  .content{
    width: 700px;
    margin: 20px auto;
    .bg{
      width: 100%;
      height: 150px;
      background: url("../assets/aboutMe.jpg") no-repeat center;
      background-size: cover; 
    }
  }
  .info{
    .infoPic{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: url("../assets/dalei.jpg") no-repeat center -10px;
      background-size:cover; 
      transform: translateY(-30px);
    }
    .infoContent{
      margin-left: 50px;
      font-size: 14px;
      color: #999;
      line-height: 2;
      padding: 20px 0;
      p{
        b{
          display: inline-block;
          width: 80px;
          color: #222;
          font-weight: 700;
          margin-right: 30px;
        }
      }
        
    }
  }
</style>

