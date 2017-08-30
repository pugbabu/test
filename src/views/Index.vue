<template>
  <div class="indexContent">
    <section class="article">
      <div class="articleHead">
        <h1>移动端兼容</h1>
        <div class="publish">
          <i style="icon"></i>
          <span>发表于2017-08-25</span>
        </div>
      </div>
      <div class="articleContent">
        <p style="font-weight:700;">随着手机的普及，移动端的开发也成了一个重要的方向，但由于设备的不统一会造成一些兼容性问题</p>
        <p style="font-weight:700;">1、安卓浏览器看背景图片，有些设备会模糊</p>
        <p>用同等比例的图片在PC机上很清楚，但是手机上很模糊，原因是什么呢？</p>
        <p>经过研究，是devicePixelRatio作怪，因为手机分辨率太小，如果按照分辨率来显示网
          页，这样字会非常小，所以苹果当初就把iPhone 4的960*640分辨率，在网页里只显示了
          480*320，这样devicePixelRatio＝2。现在android比较乱，有1.5的，有2的也有3的。
        </p>
        <div class="readBtn">
          <a href="##">阅读全文 »</a>
        </div>
      </div>
    </section>
    <section class="article">
      <div class="articleHead">
        <h1>移动端兼容</h1>
        <div class="publish">
          <i style="icon"></i>
          <span>发表于2017-08-25</span>
        </div>
      </div>
      <div class="articleContent">
        <p style="font-weight:700;">随着手机的普及，移动端的开发也成了一个重要的方向，但由于设备的不统一会造成一些兼容性问题</p>
        <p style="font-weight:700;">1、安卓浏览器看背景图片，有些设备会模糊</p>
        <p>用同等比例的图片在PC机上很清楚，但是手机上很模糊，原因是什么呢？</p>
        <p>经过研究，是devicePixelRatio作怪，因为手机分辨率太小，如果按照分辨率来显示网
          页，这样字会非常小，所以苹果当初就把iPhone 4的960*640分辨率，在网页里只显示了
          480*320，这样devicePixelRatio＝2。现在android比较乱，有1.5的，有2的也有3的。
        </p>
        <div class="readBtn">
          <a href="##">阅读全文 »</a>
        </div>
      </div>
    </section>
    <section class="article">
      <div class="articleHead">
        <h1>webpack构建vue项目（配置篇）</h1>
        <div class="publish">
          <i style="icon"></i>
          <span>发表于2017-08-25</span>
        </div>
      </div>
      <div class="articleContent">     
        <p>一.新建一个项目目录，cd /d 定位进去，然后输入npm init，会提示你填写一些项目的信息，一直回车默认就好了，或者直接执行npm init -y 直接跳过，这样就在项目目录下生成了一个package.json文件。
          二、接下来就是通过npm安装项目依赖项，命令行输入：npm install babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015 babel-preset-stage-0 babel-runtime 
          vue-loader vue-html-loader vue-hot-reload-api css-loader style-loader webpack webpack-dev-server --save-dev ，继续输入npm install vue@^1.0.26 --save 。
        </p>
        <div class="readBtn">
          <a href="##">阅读全文 »</a>
        </div>
      </div>
    </section>

  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .article{
    width: 700px;
    margin: 0 auto;
    padding: 30px 0;
    .articleHead{
      margin-bottom: 40px;
      h1{
        font-size: 26px;
        line-height: 1.5;
        font-weight: 700;
        color: #555;
        text-align: center;
      }
      .publish{
        height: 28px;
        line-height: 28px;
        text-align: center;
        i{
          display: inline-block;
          width: 16px;
          height: 16px;
          background: url("../../static/images/book.png") no-repeat center;
          vertical-align: -4px;
        }
        span{
          font-size: 12px;
          color: #999;
          line-height: 2;
        }
      }
    }
    .articleContent{
      font-size: 14px;
      line-height: 2;
      color: #555;
      p{
          font-size: 16px;
          font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
        }
      .readBtn{
        text-align: center;
        margin-top: 50px;
        a{
          display: inline-block;
          font-size: 14px;
          line-height: 2;
          color: #fff;
          background: #222;
          padding: 0 20px;
          text-align: center;
        }
      }
    }
  }
  
</style>

