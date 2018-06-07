<template>
 <section class="page page-index" >
     <div class="page-index-detail index-avatar">
        <img :src="index.avatar" class="index-avatar-img">
     </div>
     <div class="page-index-detail index-author">{{index.author}}</div>
     <div class="page-index-detail index-career">{{index.career}}</div>
     <div class="page-index-detail index-social">
       <a v-for="(item,index) in index.social"
       :key="index"
       :href="item.url"
       class="social-link"
       target="_blank"
       >
        <svg :class="'icon social-link-img '+item.icon" aria-hidden="true">
          <use :xlink:href="'#'+item.icon"></use>
        </svg>
       </a>
     </div>
 </section>
</template>

<script>
export default {
  name: 'Index',
  props: ['index']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-index {
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  box-sizing: border-box;
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
  content: '⇣';
  position: absolute;
  right: 0;
  bottom: 40px;
  left: 0;

  width: 10px;
  height: 40px;
  margin: 0 auto;

  animation: 2s changeOpacity ease infinite;
  text-align: center;

  font-size: 30px;
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
  padding: 0 10px;

  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}
.page-index .index-avatar {
  width: 100px;
  height: 100px;
  margin-right: auto;
  margin-left: auto;
}

.index-avatar .index-avatar-img,
.social-link .social-link-img {
  display: block;

  width: 100%;
  height: 100%;

  border-radius: 50%;
}
.page-index .index-social {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  width: 100%;
}
.index-social .social-link {
  position: relative;

  display: inline-block;

  width: 40px;
  height: 40px;
  margin: 10px 20px;
}
.social-link .social-link-img {
  border-radius: 0;
}
.social-link:hover .icon-github {
  fill: #171515;
}
.social-link:hover .icon-blog {
  fill: #52c5f9;
}
.social-link:hover .icon-segmentfault {
  fill: #009a61;
}
.social-link:hover .icon-stackoverflow {
  fill: #f48024;
}
</style>
