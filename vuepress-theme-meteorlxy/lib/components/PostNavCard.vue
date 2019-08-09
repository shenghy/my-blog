<template>
  <div
    v-if="showContents || showComments"
    class="post-nav-card"
    :style="style"
  >
    <div class="pnc-ad">
      <span>
        <a class="pnc-link" href="https://jspang.com/posts/2019/06/28/zsxq.html" target="_blank">小密圈成立，前端高手都加入啦!</a>
      </span>
    </div>
    <div
      v-if="showContents"
      class="post-nav-contents"
    >
      <Icon name="book" />

      <span>{{ $themeConfig.lang.toc }}</span>

      <TOC class="post-nav-toc" />
    </div>

    <div
      v-if="showComments"
      class="post-nav-comments"
    >
      <Icon name="comment" />

      <RouterLink to="#post-comments">
        {{ $themeConfig.lang.comments }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce'
import Icon from './Icon.vue'

export default {
  name: 'PostNavCard',

  components: {
    Icon,
  },

  data () {
    return {
      fixed: false,
      width: 0,
      scrollListener: throttle(() => {
        this.fixed = this.infoCardDom.getBoundingClientRect().bottom < this.navbarHeight
      }, 100),
      resizeListener: debounce(() => {
        this.width = this.getWidth()
      }, 100),
    }
  },

  computed: {
    style () {
      return {
        'position': this.fixed ? 'fixed' : 'relative',
        'top': this.fixed ? `${this.navbarHeight}px` : 0,
        'width': `${this.width}px`,
      }
    },

    infoCardDom () {
      return document.querySelector('#app .info-card')
    },

    navbarHeight () {
      return document.querySelector('.navbar').clientHeight
    },

    showContents () {
      return this.$page.headers && this.$page.headers.filter(h => h.level === 2).length > 0
    },

    showComments () {
      return this.$themeConfig.comments !== false && this.$frontmatter['vssue'] !== false && (
        this.$frontmatter['vssue-id'] || this.$frontmatter['vssue-title'] || this.$frontmatter['title']
      )
    },
  },

  mounted () {
    this.width = this.getWidth()

    window.addEventListener('scroll', this.scrollListener)
    window.addEventListener('resize', this.resizeListener)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollListener)
    window.removeEventListener('resize', this.resizeListener)
  },

  methods: {
    getWidth () {
      return this.infoCardDom.clientWidth
    },
  },
}
</script>

<style lang="stylus">
@require '~@theme/styles/variables'

.pnc-ad
  font-size 1rem
  border-bottom 1px solid $accentColor
  padding-bottom 0.7rem

.pnc-link
  color red
.post-nav-card
  padding 1rem
  color $grayTextColor
  word-break break-all
  line-height 160%
  overflow-y auto
  max-height 40rem
  .icon
    fill $grayTextColor
  .post-nav-toc > ul
      word-break normal
      margin 0.2rem 0
      padding-left 1rem
      font-size 0.7rem
      overflow hidden
      text-overflow ellipsis
      white-space nowrap

      ul
        display none
        padding-left 0.8rem
        font-size 0.4rem
        li >  a 
          color $lightTextColor
  .post-nav-comments a
    color $grayTextColor
    &:hover
      text-decoration underline
</style>
