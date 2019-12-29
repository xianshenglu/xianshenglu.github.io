<template>
 <section class="page page-skill" >
   <div class="page-skill-detail skill-name">
     <h3 class="skill-name-text">{{skill.name}}</h3>
   </div>
   <ul class="page-skill-detail skill-native">
     <li v-for="(item,index) in skill.data.native" :key="index" class="native-list">
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
      <li v-for="(item,index) in skill.data.frame" :key="index" class="frame-list">
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

  font-size: 30px;
  justify-content: space-around;
}
.page-skill .page-skill-detail {
  flex: 1 1 auto;
}
.page-skill .skill-name {
  align-items: center;
  display: flex;
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
  align-items: center;

  display: flex;
  height: 150px;
  justify-content: center;
  margin: 10px 20px;
  padding: 10px;
  position: relative;

  width: 150px;

  word-wrap: break-word;
}
@media screen and (max-width: 500px) {
  .skill-native .native-list,
  .skill-frame .frame-list {

    font-size: 18px;
    height: 80px;
    width: 80px;
  }
}
.native-list .frame-list-percent,
.frame-list .frame-list-percent {
  background: rgb(255, 255, 255);

  border-radius: 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;

  transform: rotate(-90deg);

  width: 100%;
  z-index: -1;
}
.frame-list-percent .percent-circle {

  fill: rgb(255, 255, 255);
  stroke-dasharray: 0 100;
  /* stroke-width: 31.831; */
  stroke-width: 6;
  transition: stroke-dasharray 2s ease;
}
</style>
