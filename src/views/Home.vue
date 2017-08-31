<template>
  <div id="home-page">
    <div class="headLine"></div>
    <header>
      <div class="headerInner">
        <div class="title animated bounceInDown">
          <span>巴布的小天地</span>
          <p>pugbabu</p>
        </div>
        <nav class="animated bounceInRight">
          <ul> 
            <li v-for="(item, index) in navList" :key="item.key" @click="change(index)">
                <i class="icon" :class="ind == index ? 'iconActive'+index : 'icon'+index"></i>
                <p :class="ind == index ? 'activeP' : ''">{{item.text}}</p>
            </li>        
          </ul>
        </nav>
      </div>
    </header>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer>
      <div class="footerInner">
          <div class="copyRight">© 2017 <span class="loveIcon"></span> 雷大敏</div>
          <div class="count">本站访客数 1 人次  本站总访问量 1</div>
      </div>

    </footer>
    <div class="sideBar" @click="showTheSide">
      <span class="topLine"></span>
      <span class="midLine"></span>
      <span class="botLine"></span>
    </div>
    <div class="sideContent animated" v-show="isShowSide" :class="isShowSide ? 'bounceInRight': 'bounceOutDown'">
      <div class="author">
        <div class="headImg"></div>
        <p>巴布</p>
        <p>天空之下，我们轻得像羽毛</p>
      </div>
      <nav>
          <div class="siteState">
              <span>0</span>
              <p>日志</p>
          </div>
          <div class="siteState">
              <span>4</span>
              <p>分类</p>
          </div>
          <div class="siteState">
              <span>11</span>
              <p>标签</p>
          </div>
      </nav>
      <div class="linkAuthor">
          <div class="github" @click="toGithub">
              <i></i>
              <span>Github</span>
          </div>
          <div class="weibo" @click="toWeibo">
              <i></i>
              <span>微博</span>
          </div>
          <div class="weixin" @click="showWeixin">
              <i></i>
              <span>微信</span>
          </div>
      </div>
      <div class="weChat" v-show="isShowWechat"></div>
      <div class="close" @click="hideTheSide"></div>
    </div>
    <search v-show="showSearch" v-on:closeSearch="closeSearch"></search>
    <!--<div class="pug"></div>-->
  </div>
</template>
<script>
  import Search from './Search.vue'
  export default {
    data() {
      return {
        navList:[
          {'text': '首页', 'key': 1},
          {'text': '分类', 'key': 2},
          {'text': '关于', 'key': 3},
          {'text': '标签', 'key': 4},
          {'text': '搜索', 'key': 5} 
        ],
        ind: 0,
        isShowSide: false,
        isShowWechat: false,
        showSearch: false,
        routePath: ''    
      }
    }, 
    components:{
      Search
    },
    created(){
      this.$router.push('/index')
    },
    methods:{
      change(index) {
        this.ind = index;
        switch (index) {
          case 0:
            this.$router.push('/index')
            break;
          case 1:
            this.$router.push('/class')
            break;
          case 2:
            this.$router.push('/about')
            break;
          case 3:
            this.$router.push('/meta')
            break;
          case 4:
            this.routePath = String(this.$router.app._route.path)
            this.showSearch = true;
            document.body.style.overflow = 'hidden';
            break;
          default:
            break;
        }
      },
      showTheSide() {
        this.isShowSide = true;
      },
      hideTheSide() {
        this.isShowSide = false;
      },
      toGithub() {
        window.open('https://github.com/pugbabu');
      },
      toWeibo() {
        window.open('https://weibo.com/5684093068/profile?rightmod=1&wvr=6&mod=personinfo');
      },
      showWeixin() {
        this.isShowWechat = true;
        setTimeout(() => {
          this.isShowWechat = false;
        },3000)
      },
      closeSearch(data) {
        switch (this.routePath) {
          case '/index':
            this.ind = 0;
            break;
          case '/class':
            this.ind = 1;
            break;
          case '/about':
            this.ind = 2;
            break;
          case '/meta':
            this.ind = 3;
            break;
          default:
            break;
        }
        this.$router.push(this.routePath);
        this.showSearch = data;
        document.body.style.overflow = 'auto';        
      }

    }
    
  }
</script>
<style lang="scss">
  #home-page{
    min-height: 100%;
    position: relative;
    background: #f0f0f0;   
    // background: #262a30;
    .headLine{
      height: 3px;
      background: #222;
    }
    header{
      .headerInner{
        margin: 0 auto;
        width: 700px;
        padding-top: 100px;
        height: 350px;
        box-sizing: border-box;
        .title{
          text-align: center;
          span{
            display: inline-block;
            width: 220px;
            height: 36px;
            line-height: 36px;
            background: #222;
            color: #fff;
            padding: 0 40px;
            box-sizing: border-box;
            font-weight: 700;
            font-size: 20px;
          }
          p{
            color: #999;
            font-size: 18px;
            margin-top: 10px;
            margin-bottom: 25px;
            height: 26px;
            line-height: 26px;           
          }        
        }
        nav{        
          text-align: center; 
          li{
            display: inline-block;
            margin: 0 10px;      
            padding-bottom: 5px;    
            cursor: pointer;          
            font-size: 13px;
            .icon{
              display: inline-block;
              width: 16px;
              height: 16px;
              margin-bottom: 10px;
              background-repeat: no-repeat;
              background-position: center center;
            }
            .icon0{
              background-image: url('../../static/images/home.png')
            }
            .iconActive0{
              background-image: url('../../static/images/homeActive.png')  
            }
            .icon1{
              background-image: url('../../static/images/class.png')
            }
            .iconActive1{
              background-image: url('../../static/images/classActive.png')  
            }
            .icon2{
              background-image: url('../../static/images/about.png')
            }
            .iconActive2{
              background-image: url('../../static/images/aboutActive.png')  
            }
            .icon3{
              background-image: url('../../static/images/meta.png')
            }
            .iconActive3{
              background-image: url('../../static/images/metaActive.png')  
            }
            .icon4{
              background-image: url('../../static/images/search.png')
            }
            .iconActive4{
              background-image: url('../../static/images/searchActive.png')  
            }
            .activeP{
              color: #1296db;
            }
          }
          li:hover{
            border-bottom: 1px solid #707070;
          }
        }
      }
    }
    .main{
      width: 100%;
      background: #f0f0f0;
      box-sizing: border-box;
      height: 100%;
      padding-bottom: 96px;
    }


    footer{
      position: absolute;
      width: 100%;
      bottom: 0;
      height: 96px;
      left: 0;
      color: #999;
      // background: #222;
      .footerInner{
        width: 700px;
        margin: 20px auto;
        text-align: center;
        .loveIcon{
          display: inline-block;
          width: 16px;
          height: 16px;
          background: url("../../static/images/love1.png") no-repeat center;
          vertical-align: -1px;
        }
        .count{
          color: #999;
          font-size: 14px;
          height: 28px;
          line-height: 28px;
          margin-top: 10px;
        }
      }
    }
    .sideBar{
      position: fixed;
      right: 30px;
      bottom: 45px;
      box-sizing: border-box;
      width: 28px;
      height: 28px;
      padding: 2px;
      background-color: #222;;
      cursor: pointer;
      span{
        display:block;
        width: 24px;
        height: 2px;
        background: #fff;
        left: 2px;
        position: absolute;
      }
      .topLine{
        top: 6px;
      }
      .midLine{
        top:13px;
      }
      .botLine{
        top: 20px;
      }
    }
    .sideContent{
      position: fixed;
      height: 100%;
      width: 250px;
      right: 0;
      top:0;
      background: #222;
      box-shadow: inset 0 2px 6px #000;
      .author{
          text-align: center;
          p{
            color: #999;
            font-size: 14px;
            line-height: 2;
          }
          .headImg{
            display: inline-block;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 30px 0;
            background: url("../../static/images/pug.png") no-repeat center;
            background-size:cover; 
          }
      }
      nav{
        padding: 20px 0;
        text-align: center;
        .siteState{
          display: inline-block;
          font-size: 14px;
          color: #999;
          line-height: 2;
          padding: 0 10px;
          border-right: 1px solid;
          cursor: pointer;
          span{
              display: inline-block;
          }
        }
      }
      .linkAuthor{
        text-align: center;
        color: #999;
        font-size: 14px;
        span{
          display: inline-block;
          line-height: 24px;
        }
        div:hover{
          border-bottom: 1px solid #999;
        }
        div{
          height: 44px;
          box-sizing: border-box;
        }
        .github{  
            padding: 10px 10px;
            display: inline-block;
            cursor: pointer;
            i{
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url("../../static/images/github.png") no-repeat center;
              vertical-align: -2px;              
            }
        }
        .weibo{
            padding: 10px 10px;          
            display: inline-block;
            cursor: pointer;
            i{
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url("../../static/images/weibo.png") no-repeat center;
              vertical-align: -2px;
            }

        }
        .weixin{
            padding: 10px 10px;          
            display: inline-block;
            cursor: pointer;
            i{
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url("../../static/images/weixin.png") no-repeat center;
              vertical-align: -2px;
            }
        }
      }
      .weChat{
        width: 200px;
        height: 200px;
        background: url("../assets/weixin.jpg") no-repeat center;;
        margin: 30px auto;
        background-size: contain;

      }
      .close{
        width: 16px;
        height: 16px;
        background: url("../../static/images/close.png") no-repeat center;
        position: absolute; 
        right:30px;
        bottom: 45px;
        cursor: pointer;
      }
    }
    .pug{
      position: fixed;
      left: 0;
      bottom: 3px;
      width: 180px;
      height: 180px;
      background: url("../assets/pug.png") no-repeat center;
    }
   
  }
</style>
