<template>
 <section class="page page-project" >
   <div class="page-project-detail project-name">
     <h3 class="project-name-text">{{project.name}}</h3>
    </div>
   <ul class="page-project-detail project-data">
     <li class="project-data-list" v-for="(item,index) in project.data" :key="index">
       <img :src="item.img" class="list-img">
       <div class="list-description">
         <h5 class="list-description-detail description-title">{{item.description.title}}</h5>
         <ul class="list-description-detail description-highlight">
           <li class="description-highlight-list"  v-for="(highlight,hlIndex) in item.description.highlights" :key="'highlight'+hlIndex">
             <span class="highlight-list-icon"></span>
             <span class="highlight-list-text">{{highlight}}</span>
           </li>
         </ul>
       </div>
       <div class="list-link">
         <a :href="item.source.url" class="list-link-detail" target="_blank">{{item.source.name}}</a>
         <a :href="item.preview.url" class="list-link-detail" target="_blank">{{item.preview.name}}</a>
       </div>
     </li>
   </ul>
   <div class="page-project-detail project-hint">
     <span class="project-hint-name">{{project.more.name}}</span>
     <a :href="project.more.url" class="project-hint-link" target="_blank">
      <svg :class="'icon link-img '+project.more.icon" aria-hidden="true">
          <use :xlink:href="'#'+project.more.icon"></use>
      </svg>
     </a>
   </div>
 </section>
</template>

<script>
export default {
  name: 'Project',
  props: ['project']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-project {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: center;
  height: auto;
  min-height: 100vh;
}
_:-ms-lang(x),
.page-project {
  /*IE10 and Edge will ignore flex property with height:auto*/
  height: 100vh;
}
.page-project .page-project-detail {
  flex: 1 1 auto;
}
.page-project .project-name {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 760px) {
  .page-project .project-name {
    margin: 5px 0 15px;
  }
}
.project-name .project-name-text {
  font-size: 30px;
  font-weight: 900;
}
.page-project .project-data {
  display: flex;
  align-content: center;
  justify-content: center;

  width: 100%;
}
@media screen and (max-width: 760px) {
  .page-project .project-data {
    align-items: center;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
}
.project-data .project-data-list {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;

  box-sizing: border-box;
  width: 250px;
  margin: 10px 20px;
  padding: 10px 20px;
}
@media screen and (max-width: 760px) {
  .project-data .project-data-list {
    width: 100%;
  }
}
.project-data-list .list-img {
  width: 200px;
  height: 200px;
  margin: 0 auto;

  transition: 1s transform ease;
}
.project-data-list .list-img:hover {
  transform: scale(1.1);
}
.project-data-list .list-description {
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  width: 95%;
  max-width: 250px;
  max-height: 200px;
  margin: 20px 20px;

  line-height: 1.5;
}

.list-description .description-title {
  align-self: center;

  height: 50px;

  line-height: 50px;
}
.list-description .description-highlight {
  display: flex;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  justify-content: center;
}
.description-highlight .description-highlight-list {
  text-align: left;
}
.description-highlight-list .highlight-list-icon {
  margin-right: 5px;
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #000;
  vertical-align: middle;
  vertical-align: 2px;
}
.project-data-list .list-link {
  display: flex;
  max-width: 300px;
  width: 100%;
}
.list-link .list-link-detail {
  display: block;
  flex: 1 0 auto;

  margin: 0 10px 0 0;

  border: 1px solid black;
  border-radius: 20px;

  line-height: 30px;
}
.list-link .list-link-detail:last-child {
  margin-right: 0;
}
.page-project .project-hint {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.project-hint .project-hint-link:hover {
  cursor: pointer;
}
.project-hint .project-hint-link {
  display: inline-block;
  vertical-align: top;
}
.project-hint-link .link-img {
  display: block;

  width: 25px;
  height: 25px;
  margin: 0;

  border-radius: 50%;
}
.project-hint .project-hint-name {
  margin: 0 10px;
}
</style>
