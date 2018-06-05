<template>
 <section class="page page-project" >
   <div class="page-project-detail project-name">
     <h3 class="project-name-text">{{project.name}}</h3>
    </div>
   <ul class="page-project-detail project-data">
     <li class="project-data-list" v-for="(item,index) in project.data" :key="index">
       <img :src="item.img" class="list-img">
       <div class="list-description">{{item.description}}</div>
       <div class="list-link">
         <a :href="item.source.name" class="list-link-detail" target="_blank">{{item.source.name}}</a>
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
}
@media screen and (max-width: 760px) {
  .page-project {
    min-height: 230vh;
  }
}
@media screen and (max-height: 600px) {
  /*Nokia Lumia 520*/
  .page-project {
    /* min-height: 270vh; */
  }
}
.page-project .page-project-detail {
  flex: 1 1 auto;
}
.page-project .project-name {
  display: flex;
  align-items: center;
}
.project-name .project-name-text {
  font-size: 30px;
  font-weight: 900;
}
.page-project .project-data {
  display: flex;
  align-content: center;
  flex-flow: row nowrap;
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
  flex-flow: column nowrap;
  justify-content: space-between;

  box-sizing: border-box;
  width: 250px;
  max-width: 450px;
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
  overflow: hidden;

  max-height: 200px;
  margin: 20px 0;
}
.project-data-list .list-link {
  display: flex;
  flex-flow: row nowrap;
}
.list-link .list-link-detail {
  display: block;
  flex: 1 0 auto;

  margin: 0 10px;

  border: 1px solid black;
  border-radius: 20px;

  line-height: 30px;
}
.page-project .project-hint {
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: center;
}
.project-hint .project-hint-link:hover {
  cursor: pointer;
}
.project-hint-link .link-img {
  display: block;

  width: 25px;
  height: 25px;
  margin: 0 15px;

  border-radius: 50%;
}
.project-hint .project-hint-name {
  margin: 0 10px;
}

</style>
