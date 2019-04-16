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
         <div class="qi-title">学习QQ群：</div>
         <div><a href="https://shang.qq.com/wpa/qunwpa?idkey=44d1981b55656057a605c875d943d32791f0aaeaa1d1824e7e2b86d4dc80f45a" target="_blank">前端群：524520566 <span class='qq-info-co'>(2700/3000)</span> 点击加入</a></div>
         <div><a href="https://shang.qq.com/wpa/qunwpa?idkey=cc5d5a59fd34dc8b5dd18617f50e9cc6624ebb758fd8963ff34b4a56219b36b2" target="_blank">Flutter群：674639629 <span class='qq-info-co'>(2900/3000)</span> 点击加入</a></div>
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
    <!--打赏特权-->
    <div class="dashang-side">
        <div>
           <img src="http://blogimages.jspang.com/dashangwx.jpg" width="100%" /> 
        </div>
        <div>
          <p>打赏获得4项特权:</p>
          <p>1.免费视频离线高清版下载（共288集）</p>
          <p>2.加入微信群，享有更多互动和人脉资源</p>
          <p>3.和11年程序老兵成为微信好友</p>
          <p>4.收费课发布期间享受5折优惠特权;</p>
          <p>[ <a class="qi-title" href="https://jspang.com/posts/2016/01/01/about.html">打赏后获取特权方法</a> ]</p>
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
    padding 0.5rem
    position relative
    img
      border-radius  5px
    .ad-tag
      padding 0.2rem
      background-color $navbarColor
      opacity 0.6
      position absolute
      right 1rem
      bottom 1rem
      border-radius  2px
      font-size 0.8rem
      color red
  .dashang-side
    padding 0.8rem
    line-height 0.8rem
    font-size 0.8rem
    border-top 1px solid $borderColor
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
        font-size 0.5rem
        color $grayTextColor
       
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
