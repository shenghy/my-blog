<template>
  <div class="info-card">
    
    <div
      class="info-card-header"
      :style="headerStyle"
    >
      <img
        class="info-avatar"
        :src="avatar"
        :alt="nickname"
      >
    </div>

    <div class="info-card-body">
      <section class="info-nickname">
        {{ nickname }}
      </section>

      <section
        v-if="description"
        class="info-desc"
        v-html="description"
      />
      <!--
      <section class="info-contact">
        <section v-if="location">
          <IconInfo
            class="info-location"
            type="location"
            :title="location"
          >
            {{ location }}
          </IconInfo>
        </section>
        -->
        <!--
        <section v-if="organization">
          <IconInfo
            class="info-organization"
            type="organization"
            :title="organization"
          >
            {{ organization }}
          </IconInfo>
        </section>
       
        <section v-if="email">
          <IconInfo
            class="info-email"
            type="email"
            :href="`mailto:${email}`"
            :title="email"
          >
            {{ email }}
          </IconInfo>
        </section>
        
      </section>
       -->
    </div>

    <div
      v-if="sns"
      class="info-card-footer"
    >
      <section class="info-sns clearfix">
        <a
          v-for="(item, name) of sns"
          :key="name"
          :href="item.link"
          class="sns-link"
          target="_blank"
        >
          <IconSns
            :name="name"
            :account="item.account"
            size="1.5em"
          />
        </a>
      </section>
    </div>
    <div>

      
      <div class="qq-info">
         <div>
           <svg t="1538013544186" width="12" height="12" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23556" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs><style type="text/css"></style></defs>
            <path d="M902.60033922 650.96445566c-18.0718526-100.84369837-94.08399771-166.87723736-94.08399771-166.87723737 10.87530062-91.53186599-28.94715402-107.78733693-28.94715401-107.78733691C771.20003413 93.08221664 517.34798062 98.02553561 511.98620441 98.16348824 506.65661791 98.02553561 252.75857992 93.08221664 244.43541101 376.29988138c0 0-39.79946279 16.25547094-28.947154 107.78733691 0 0-75.98915247 66.03353901-94.0839977 166.87723737 0 0-9.63372291 170.35365477 86.84146124 20.85850523 0 0 21.70461757 56.79068296 61.50407954 107.78733692 0 0-71.1607951 23.19910867-65.11385185 83.46161052 0 0-2.43717093 67.16015592 151.93232126 62.56172014 0 0 108.5460788-8.0932473 141.10300432-52.14626271H526.33792324c32.57991817 44.05301539 141.10300431 52.1462627 141.10300431 52.14626271 154.3235077 4.59843579 151.95071457-62.56172013 151.95071457-62.56172014 6.00095876-60.26250183-65.11385185-83.46161053-65.11385185-83.46161052 39.77647014-50.99665395 61.4810877-107.78733693 61.4810877-107.78733692 96.45219231 149.49514952 86.84146124-20.85850523 86.84146125-20.85850523" p-id="23557" fill="#5c5c5c"></path>
           </svg>
           <a href="https://shang.qq.com/wpa/qunwpa?idkey=44d1981b55656057a605c875d943d32791f0aaeaa1d1824e7e2b86d4dc80f45a" target="_blank">
           前端群：524520566 <span class="qq-info-btn">点击加入</span></a>
         </div>
         <div>
           <svg t="1538013544186" width="12" height="12" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23556" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs><style type="text/css"></style></defs>
            <path d="M902.60033922 650.96445566c-18.0718526-100.84369837-94.08399771-166.87723736-94.08399771-166.87723737 10.87530062-91.53186599-28.94715402-107.78733693-28.94715401-107.78733691C771.20003413 93.08221664 517.34798062 98.02553561 511.98620441 98.16348824 506.65661791 98.02553561 252.75857992 93.08221664 244.43541101 376.29988138c0 0-39.79946279 16.25547094-28.947154 107.78733691 0 0-75.98915247 66.03353901-94.0839977 166.87723737 0 0-9.63372291 170.35365477 86.84146124 20.85850523 0 0 21.70461757 56.79068296 61.50407954 107.78733692 0 0-71.1607951 23.19910867-65.11385185 83.46161052 0 0-2.43717093 67.16015592 151.93232126 62.56172014 0 0 108.5460788-8.0932473 141.10300432-52.14626271H526.33792324c32.57991817 44.05301539 141.10300431 52.1462627 141.10300431 52.14626271 154.3235077 4.59843579 151.95071457-62.56172013 151.95071457-62.56172014 6.00095876-60.26250183-65.11385185-83.46161053-65.11385185-83.46161052 39.77647014-50.99665395 61.4810877-107.78733693 61.4810877-107.78733692 96.45219231 149.49514952 86.84146124-20.85850523 86.84146125-20.85850523" p-id="23557" fill="#5c5c5c"></path>
           </svg>
           <a href="https://shang.qq.com/wpa/qunwpa?idkey=c7c837559072636d856e3f775d2d54e05981e4aff9466c5e42709deeba105dd7" target="_blank">
           React群：159579268  <span class="qq-info-btn">点击加入</span></a>
         </div>
         <div>
            <svg t="1538013544186" width="12" height="12" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23556" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs><style type="text/css"></style></defs>
            <path d="M902.60033922 650.96445566c-18.0718526-100.84369837-94.08399771-166.87723736-94.08399771-166.87723737 10.87530062-91.53186599-28.94715402-107.78733693-28.94715401-107.78733691C771.20003413 93.08221664 517.34798062 98.02553561 511.98620441 98.16348824 506.65661791 98.02553561 252.75857992 93.08221664 244.43541101 376.29988138c0 0-39.79946279 16.25547094-28.947154 107.78733691 0 0-75.98915247 66.03353901-94.0839977 166.87723737 0 0-9.63372291 170.35365477 86.84146124 20.85850523 0 0 21.70461757 56.79068296 61.50407954 107.78733692 0 0-71.1607951 23.19910867-65.11385185 83.46161052 0 0-2.43717093 67.16015592 151.93232126 62.56172014 0 0 108.5460788-8.0932473 141.10300432-52.14626271H526.33792324c32.57991817 44.05301539 141.10300431 52.1462627 141.10300431 52.14626271 154.3235077 4.59843579 151.95071457-62.56172013 151.95071457-62.56172014 6.00095876-60.26250183-65.11385185-83.46161053-65.11385185-83.46161052 39.77647014-50.99665395 61.4810877-107.78733693 61.4810877-107.78733692 96.45219231 149.49514952 86.84146124-20.85850523 86.84146125-20.85850523" p-id="23557" fill="#5c5c5c"></path>
           </svg>
           <a href="https://shang.qq.com/wpa/qunwpa?idkey=cc5d5a59fd34dc8b5dd18617f50e9cc6624ebb758fd8963ff34b4a56219b36b2" target="_blank">
           Flutter-1群：674639629  <span class="qq-info-btn">点击加入</span></a>
         </div>
         <div>
            <svg t="1538013544186" width="12" height="12" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23556" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs><style type="text/css"></style></defs>
            <path d="M902.60033922 650.96445566c-18.0718526-100.84369837-94.08399771-166.87723736-94.08399771-166.87723737 10.87530062-91.53186599-28.94715402-107.78733693-28.94715401-107.78733691C771.20003413 93.08221664 517.34798062 98.02553561 511.98620441 98.16348824 506.65661791 98.02553561 252.75857992 93.08221664 244.43541101 376.29988138c0 0-39.79946279 16.25547094-28.947154 107.78733691 0 0-75.98915247 66.03353901-94.0839977 166.87723737 0 0-9.63372291 170.35365477 86.84146124 20.85850523 0 0 21.70461757 56.79068296 61.50407954 107.78733692 0 0-71.1607951 23.19910867-65.11385185 83.46161052 0 0-2.43717093 67.16015592 151.93232126 62.56172014 0 0 108.5460788-8.0932473 141.10300432-52.14626271H526.33792324c32.57991817 44.05301539 141.10300431 52.1462627 141.10300431 52.14626271 154.3235077 4.59843579 151.95071457-62.56172013 151.95071457-62.56172014 6.00095876-60.26250183-65.11385185-83.46161053-65.11385185-83.46161052 39.77647014-50.99665395 61.4810877-107.78733693 61.4810877-107.78733692 96.45219231 149.49514952 86.84146124-20.85850523 86.84146125-20.85850523" p-id="23557" fill="#5c5c5c"></path>
           </svg>
           <a href="https://shang.qq.com/wpa/qunwpa?idkey=dc11d4e479e4f82deba1b43fe5da6d9445058362ed727e1820ad738f34a21f8c" target="_blank">
           Flutter-2群：806799257  <span class="qq-info-btn">点击加入</span></a>
         </div>
         <div>
            <svg t="1538013544186" width="12" height="12" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23556" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs><style type="text/css"></style></defs>
            <path d="M902.60033922 650.96445566c-18.0718526-100.84369837-94.08399771-166.87723736-94.08399771-166.87723737 10.87530062-91.53186599-28.94715402-107.78733693-28.94715401-107.78733691C771.20003413 93.08221664 517.34798062 98.02553561 511.98620441 98.16348824 506.65661791 98.02553561 252.75857992 93.08221664 244.43541101 376.29988138c0 0-39.79946279 16.25547094-28.947154 107.78733691 0 0-75.98915247 66.03353901-94.0839977 166.87723737 0 0-9.63372291 170.35365477 86.84146124 20.85850523 0 0 21.70461757 56.79068296 61.50407954 107.78733692 0 0-71.1607951 23.19910867-65.11385185 83.46161052 0 0-2.43717093 67.16015592 151.93232126 62.56172014 0 0 108.5460788-8.0932473 141.10300432-52.14626271H526.33792324c32.57991817 44.05301539 141.10300431 52.1462627 141.10300431 52.14626271 154.3235077 4.59843579 151.95071457-62.56172013 151.95071457-62.56172014 6.00095876-60.26250183-65.11385185-83.46161053-65.11385185-83.46161052 39.77647014-50.99665395 61.4810877-107.78733693 61.4810877-107.78733692 96.45219231 149.49514952 86.84146124-20.85850523 86.84146125-20.85850523" p-id="23557" fill="#5c5c5c"></path>
           </svg>
          <a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=21d97d9a1cda64a77006f66bb521fa0bc1701d6b36a0db6b6c0dfe6d8b4f58d5">
           黑群晖群：652031815  <span class="qq-info-btn">点击加入</span></a>
         </div>

      </div>

     
  </div>
     <!--打赏特权-->
    <div class="dashang-side">
        <div>
           <img src="https://jspang.com/images/zhishixingqiu.png" width="100%" /> 
        </div>
        <div>
          <p><b>50元/年进圈后,你将得到:</b></p>
          <p>1.免费视频离线高清版下载（共300集）</p>
          <p>2.技术胖每周两篇软技能文章分享</p>
          <p>3.收费视频半价购买特权(最高省302元)</p>
          <p>4.收费课发布期间享受5折优惠特权</p>
          <p>5.其它平台课程推荐返现特权</p>
          <p>不再接受打赏，我给你提供价值</p>
          <p style="color:red">[直接扫码进圈]</p>
        </div>
    </div>

    <!--Flutter实战课程-->
    <div class="ad-side">
      <a href="https://jspang.com/posts/2019/03/01/flutter-shop.html" target="_blank">
        <img src="http://blogimages.jspang.com/flutter_ad2.jpg" width="100%" />
      </a>
      <div class="ad-tag">
        广告
      </div>
    </div>

    <!--Vue+Koa2实战广告-->
    <div class="ad-side">
      <a href="https://jspang.com/posts/2018/04/28/vue-koa2.html" target="_blank">
        <img src="http://blogimages.jspang.com/Vue_koa_ad1.jpg" width="100%" />
      </a>
      <div class="ad-tag">
        广告
      </div>
    </div>


    <div class="ad-side">
      <a href="http://www.zhufengpeixun.cn/main/course/index.html?ref=jsp" target="_blank">
        <img src="http://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" />
      </a>
      <div class="ad-tag">
        广告
      </div>
    </div>
   


  </div>


 

</template>

<script>
import IconInfo from './IconInfo.vue'
import IconSns from './IconSns.vue'
import GeoPattern from 'geopattern'

export default {
  name: 'InfoCard',

  components: {
    IconInfo,
    IconSns,
  },

  computed: {
    info () {
      return this.$themeConfig.personalInfo || {}
    },

    nickname () {
      return this.info.nickname || 'Unknown'
    },

    description () {
      return this.info.description || null
    },

    location () {
      return this.info.location || null
    },

    email () {
      return this.info.email || null
    },

    organization () {
      return this.info.organization || null
    },

    avatar () {
      return this.info.avatar || '/assets/img/avatar_unknown.jpg'
    },

    sns () {
      return this.info.sns || null
    },

    headerStyle () {
      return {
        'background-image': !this.$ssrContext ? GeoPattern.generate(this.nickname, { color: '#eee' }).toDataUrl() : null,
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
@require '~@theme/styles/variables'

$headerBgHeight = 80px
$avatarHeight = 120px

.info-card
  padding 0
  a
    color $grayTextColor
    font-weight normal
  .ad-side
    padding 0.1rem 0.5rem
    position relative
    img
      border-radius  5px
    .ad-tag
      padding 0.1rem 0.2rem
      background-color $navbarColor
      opacity 0.6
      position absolute
      right 1rem
      bottom 1rem
      border-radius  2px
      font-size 0.4rem
      color $grayTextColor
  .dashang-side
    padding 0.5rem
    margin-bottom 0.3rem
    line-height 0.8rem
    font-size 0.8rem
    border-top 1px solid $borderColor
    border-bottom 1px solid $borderColor
    div > img 
      border-radius 5px;
  .info-card-header
    height $headerBgHeight
    border-radius 5px 5px 0px 0px
    margin-bottom $avatarHeight * 0.5
    .info-avatar
      display block
      width $avatarHeight
      height $avatarHeight
      margin 0 auto
      border 3px solid #fff
      border-radius 50% 
      box-shadow: 0 0 2px alpha(black, 0.2)
      transform translateY($headerBgHeight - $avatarHeight * 0.5)
  .qq-info
     border-top 1px solid $borderColor
     border-bottom 1px solid $borderColor
     padding 0.8rem
     font-size 0.8rem
     .qi-title
       text-align left 
       font-size 0.8rem
       color $accentColor
       margin-bottom 0.5rem
     .qq-info-co
        font-size 0.3rem
     .qq-info-btn
        font-size 0.5rem
        color $accentColor
  .info-card-body
    cursor default
    padding-top 0.3rem
    border-bottom 1px solid $borderColor
    text-align center
    .info-nickname
      display block
      font-size 1.5rem
      font-weight bold
      text-align center
    .info-desc
      margin 0.5rem 0
      font-size 0.7rem
      padding 1rem
      color $grayTextColor
    .info-contact
      color $grayTextColor
      word-break break-all
      line-height 160%
      .icon
        fill $grayTextColor
  .info-card-footer
    text-align center
    padding 1rem

</style>
