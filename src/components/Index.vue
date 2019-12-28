<template>
  <section class="page page-index">
    <div class="page-index-detail index-avatar">
      <img :src="index.avatar" class="index-avatar-img" />
    </div>
    <div class="page-index-detail index-author">{{ index.author }}</div>
    <div class="page-index-detail index-career">{{ index.career }}</div>
    <div class="page-index-detail index-social">
      <!-- eslint-disable -->
      <a
        v-for="(item, index) in index.social"
        :key="index"
        :href="item.url"
        class="social-link"
        target="_blank"
      >
        <!-- eslint-enable -->
        <svg :class="'icon social-link-img ' + item.icon" aria-hidden="true">
          <use :xlink:href="'#' + item.icon"></use>
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Index',
  // eslint-disable-next-line vue/require-prop-types
  props: ['index']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-index {
  box-sizing: border-box;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  position: relative;
}
@keyframes changeOpacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.page-index::after {
  animation: 2s changeOpacity ease infinite;
  bottom: 40px;
  content: '⇣';

  font-size: 30px;
  height: 40px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  text-align: center;

  width: 10px;
}
@media screen and (max-height: 600px) {
  /*iphone5*/
  .page-index::after {
    bottom: 20px;
  }
}
.page-index .page-index-detail {
  margin: 20px 0;
}
.page-index .index-author,
.page-index .index-career {
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  padding: 0 10px;
}
.page-index .index-avatar {
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
}

.index-avatar .index-avatar-img,
.social-link .social-link-img {
  border-radius: 50%;
  display: block;
  height: 100%;

  width: 100%;
}
.page-index .index-social {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  width: 100%;
}
.index-social .social-link {
  display: inline-block;
  height: 40px;
  margin: 10px 20px;
  position: relative;

  width: 40px;
}
.social-link .social-link-img {
  border-radius: 0;
}
.social-link:hover .icon-github {
  fill: rgb(23, 21, 21);
}
.social-link:hover .icon-blog {
  fill: rgb(82, 197, 249);
}
.social-link:hover .icon-segmentfault {
  fill: rgb(0, 154, 97);
}
.social-link:hover .icon-stackoverflow {
  fill: rgb(244, 128, 36);
}
</style>
