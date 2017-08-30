<template>
    <div class="searchWrapper">
      <div class="searchInner">
        <div class="searchHead">
            <div class="fl searchBtn">
              <i @click="search"></i>
            </div>
            <div class="fl search">
              <input type="text" placeholder="搜索..." name="search" autofocus="autofocus" autocomplete="off" v-model="searchValue" />
              <i @click="clearValue"></i>
            </div>       
            <!--<div class="fl closeBtn">
              <i @click="closeSearch"></i>
            </div>-->
        </div>
        <div class="seartText">
          <ul>
            <li>
              <h3>移动端兼容</h3>
              <div class="content">
                随着手机的普及，移动端的开发也成了一个重要的方向，但由于设备的不统一会造成一些兼容性问题
                安卓浏览器看背景图片，有些设备会模糊用同等比例的图片在PC机上很清楚，但是手机上很模糊，原因是什么呢？
                经过研究，是devicePixelRatio作怪，因为手机分辨率太小，如果按照分辨率来显示网
                页，这样字会非常小，所以苹果当初就把iPhone 4的960*640分辨率，在网页里只显示了
                480*320，这样devicePixelRatio＝2。现在android比较乱，有1.5的，有2的也有3的。
              </div>
            </li>
            <li>
              <h3>移动端兼容</h3>
              <div class="content">
                随着手机的普及，移动端的开发也成了一个重要的方向，但由于设备的不统一会造成一些兼容性问题
                安卓浏览器看背景图片，有些设备会模糊用同等比例的图片在PC机上很清楚，但是手机上很模糊，原因是什么呢？
                经过研究，是devicePixelRatio作怪，因为手机分辨率太小，如果按照分辨率来显示网
                页，这样字会非常小，所以苹果当初就把iPhone 4的960*640分辨率，在网页里只显示了
                480*320，这样devicePixelRatio＝2。现在android比较乱，有1.5的，有2的也有3的。
              </div>
            </li>
            <li>
              <h3>移动端兼容</h3>
              <div class="content">
                随着手机的普及，移动端的开发也成了一个重要的方向，但由于设备的不统一会造成一些兼容性问题
                安卓浏览器看背景图片，有些设备会模糊用同等比例的图片在PC机上很清楚，但是手机上很模糊，原因是什么呢？
                经过研究，是devicePixelRatio作怪，因为手机分辨率太小，如果按照分辨率来显示网
                页，这样字会非常小，所以苹果当初就把iPhone 4的960*640分辨率，在网页里只显示了
                480*320，这样devicePixelRatio＝2。现在android比较乱，有1.5的，有2的也有3的。
              </div>
            </li>
            <li>
              <h3>移动端兼容</h3>
              <div class="content">
                随着手机的普及，移动端的开发也成了一个重要的方向，但由于设备的不统一会造成一些兼容性问题
                安卓浏览器看背景图片，有些设备会模糊用同等比例的图片在PC机上很清楚，但是手机上很模糊，原因是什么呢？
                经过研究，是devicePixelRatio作怪，因为手机分辨率太小，如果按照分辨率来显示网
                页，这样字会非常小，所以苹果当初就把iPhone 4的960*640分辨率，在网页里只显示了
                480*320，这样devicePixelRatio＝2。现在android比较乱，有1.5的，有2的也有3的。
              </div>
            </li>
          </ul>
        </div>
        <div class="cancel">
          <button @click="closeSearch">取消</button>
        </div>
        
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  },  
  created() {

  },
  methods: {
    clearValue() {
      this.searchValue = '';
    },
    closeSearch() {
      this.$emit('closeSearch', false);
    },
    search() {
      console.log(11)
    }
  }
}
</script>
<style lang="scss">
  .searchWrapper{
    position: fixed;
    left: 0;
    top: 0;
    bottom:0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2001;
    .searchInner{
      position: absolute;
      width: 700px;
      height: 80%;
      left: 50%;
      top: 10%;
      background: #fff;
      margin-left: -350px;
      z-index: 2022;
      .searchHead{
        width: 100%;
        margin: 0 auto;
        height: 40px;
        padding: 20px 0;
        border-bottom: 1px solid #999;
        font-size: 14px;
        color: #999;
      }
      .searchBtn{
        height: 100%;
        width: 50px;
        i{
          cursor: pointer;
          width: 24px;
          height: 24px;
          background: url("../../static/images/search.png") no-repeat center;
          display: inline-block;
          margin-left: 20px;
          margin-top: 8px;
          
        }
      }
      .search{
        width: calc(100% - 100px);
        height: 40px;
        position: relative;
        input{
          float: left;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border: none;
          // border: 1px solid #999; 
          // border-radius: 5px;
          padding-left: 20px;
          padding-right: 25px;
        }
        input:focus{
          outline: none;
        }
        i{
            position: absolute;
            cursor: pointer;
            width: 16px;
            height: 16px;
            background: url("../../static/images/close3.png") no-repeat center;
            right: 5px;
            top: 12px;
        }
      }
    }
    .closeBtn{
      width: 50px;
      height: 100%;
      box-sizing: border-box;
      padding: 0 10px;
      i{
        cursor: pointer;
        width: 24px;
        height: 24px;
        margin-top: 8px;
        background: url("../../static/images/close2.png") no-repeat center;
        display: inline-block;
        // margin-left: 20px;
        // margin-top: 12px;
      }
    }
    .seartText{
      width: 100%;
      height: calc(100% - 153px);
      overflow: auto;
      ul{
        padding-left: 20px;
        li{
          list-style: circle ;
          margin-bottom: 20px;
          h3{
            font-size: 26px;
            line-height: 1.5;
            font-weight: 700;
            color: #555;
          }
          .content{
            font-size: 16px;
            font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
            line-height: 2;
            color: #555;
            padding: 10px;
            border-bottom: 1px dashed #999;
          }
        }
      }
    }
    .cancel{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 72px;
      padding:20px 20px;
      box-sizing: border-box;
      button{
        width: 70px;
        height: 32px;
        box-sizing: border-box;
        border:1px solid #e7e7e7;
        background: #66bb6a;
        color: #fff;
        text-align: center;
        line-height: 32px;
        border-radius: 4px;
        font-size: 12px;
        margin-right: 20px;
        cursor: pointer;
        float: right;
      }
    }
  }
</style>

