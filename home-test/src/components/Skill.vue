<template>
 <section class="page page-skill" >
   <div class="page-skill-detail skill-name">
     <h3 class="skill-name-text">{{skill.name}}</h3>
   </div>
   <ul class="page-skill-detail skill-native">
     <li class="native-list" v-for="(item,index) in skill.data.native" :key="index">
       <svg class="skill-percent-svg" viewBox="0 0 31.831 31.831">
        <circle class="percent-circle" r="15.9155" cx="15.9155" cy="15.9155" :data-percent="item.percent" />
       </svg>
       <img :src="item.icon" class="native-list-img">
     </li>
   </ul>
   <ul class="page-skill-detail skill-frame">
      <li class="frame-list" v-for="(item,index) in skill.data.frame" :key="index">
        <svg class="skill-percent-svg" viewBox="0 0 31.831 31.831">
          <circle class="percent-circle" r="15.9155" cx="15.9155" cy="15.9155" :data-percent="item.percent" />
        </svg>
        <img :src="item.icon" class="frame-list-img">
      </li>
   </ul>
 </section>
</template>

<script>
export default {
  name: 'Skill',
  props: ['skill']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-skill {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}
.page-skill .page-skill-detail {
  flex: 1 1 auto;
}
.page-skill .skill-name {
  display: flex;
  align-items: center;
  justify-content: center;
}
.skill-name .skill-name-text {
  font-size: 30px;
  font-weight: 900;
}
.page-skill .skill-native,
.page-skill .skill-frame {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.skill-native .native-list,
.skill-frame .frame-list {
  position: relative;

  width: 100px;
  height: 100px;
  margin: 10px 20px;
  padding: 10px;
}
@media screen and (max-width: 500px) {
  .skill-native .native-list,
  .skill-frame .frame-list {
    width: 80px;
    height: 80px;
  }
}
.skill-native .native-list .skill-percent-svg,
.skill-frame .frame-list .skill-percent-svg {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transform: rotate(-90deg);

  border-radius: 50%;
  background: #fff;
}
.skill-percent-svg .percent-circle {
  transition: stroke-dasharray 2s ease;

  fill: #fff;
  stroke: yellowgreen;
  stroke-width: 31.831;
  stroke-dasharray: 0 100;
}
.native-list .native-list-img,
.frame-list .frame-list-img {
  display: block;

  width: 100%;
  height: 100%;

  border-radius: 50%;
}

</style>
