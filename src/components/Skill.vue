<template>
 <section class="page page-skill" >
   <div class="page-skill-detail skill-name">
     <h3 class="skill-name-text">{{skill.name}}</h3>
   </div>
   <ul class="page-skill-detail skill-native">
     <li class="native-list" v-for="(item,index) in skill.data.native" :key="index">
       <svg class="frame-list-percent" viewBox="0 0 31.831 31.831">
        <circle class="percent-circle" r="15.9155" cx="15.9155" cy="15.9155"
        :data-percent="item.percent" :data-stroke="item.color" />
       </svg>
       <span class="native-list-name">
         {{item.name.toUpperCase()}}
       </span>
     </li>
   </ul>
   <ul class="page-skill-detail skill-frame">
      <li class="frame-list" v-for="(item,index) in skill.data.frame" :key="index">
        <svg class="frame-list-percent" viewBox="0 0 31.831 31.831">
          <circle class="percent-circle" r="15.9155" cx="15.9155" cy="15.9155"
          :data-percent="item.percent"  :data-stroke="item.color" />
        </svg>
        <span class="frame-list-name">
          {{item.name}}
        </span>
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

  font-size: 30px;
}
.page-skill .page-skill-detail {
  flex: 1 1 auto;
}
.page-skill .skill-name {
  display: flex;
  align-items: center;
  justify-content: center;
}
.skill-name .skill-name-text,
.native-list .native-list-name,
.frame-list .frame-list-name {
  font-size: inherit;
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

  display: flex;
  align-items: center;
  justify-content: center;

  width: 150px;
  height: 150px;
  margin: 10px 20px;
  padding: 10px;

  word-wrap: break-word;
}
@media screen and (max-width: 500px) {
  .skill-native .native-list,
  .skill-frame .frame-list {
    width: 80px;
    height: 80px;

    font-size: 18px;
  }
}
.native-list .frame-list-percent,
.frame-list .frame-list-percent {
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
.frame-list-percent .percent-circle {
  transition: stroke-dasharray 2s ease;

  fill: #fff;
  /* stroke-width: 31.831; */
  stroke-width: 6;
  stroke-dasharray: 0 100;
}
</style>
