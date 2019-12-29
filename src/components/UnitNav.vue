<template>
 <nav class="unit unit-nav" @click="navChange">
  <ul class="nav-data">
    <li :class="nav.checked+' nav-data-list'" :data-target-nav-id="nav.id" v-for="(nav,index) in navs" :key="index">
        <span class="list-info">{{nav.name}}</span>
        <svg :class="'icon list-img '+nav.icon" aria-hidden="true">
          <use :xlink:href="'#'+nav.icon"></use>
        </svg>
    </li>
  </ul>
 </nav>
</template>

<script>
export default {
  name: 'UnitForLang',
  props: ['navs'],
  methods: {
    navChange (event) {
      this.$emit('navChange', event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.unit-nav {

  font-size: 14px;
  position: fixed;
  right: 20px;
  top: 50%;

  transform: translateY(-50%);
  z-index: 99;
}
@media screen and (max-width: 1100px) {
  .unit-nav {
    display: none;
  }
}
.nav-data .nav-data-list {

  cursor: pointer;
  height: 40px;
  position: relative;

  width: 40px;
}
.nav-data .nav-data-list::before {

  background: rgb(238, 238, 238);
  content: '';
  height: 15px;

  transform: translate(-50%, -50%) scale(1);

  width: 15px;
}

.nav-data .nav-data-list::before,
.nav-data-list .list-info,
.nav-data-list .list-img {
  left: 50%;
  position: absolute;
  top: 50%;
}
.nav-data .nav-data-list::before,
.nav-data-list .list-img {

  border-radius: 50%;
  transition: transform 0.5s ease;
}
.nav-data .nav-data-list:hover::before {
  transform: translate(-50%, -50%) scale(0);
}
.nav-data-list .list-info {
  border: 1px solid rgb(0, 0, 0);
  border-bottom-right-radius: 5px;
  border-left: none;
  border-top-right-radius: 5px;

  height: 20px;
  left: 0;

  line-height: 20px;

  opacity: 0;
  padding: 5px;
  transform: translate(0%, -50%);

  transition: transform 0.5s ease, opacity 0.5s ease;
  word-break: keep-all;
}
.nav-data-list:hover .list-info {

  opacity: 1;
  transform: translate(-100%, -50%);
  transform: translate(calc(-100% - 5px), -50%);
}
.nav-data-list .list-info::before {

  border-bottom: 1px solid rgb(0, 0, 0);
  border-left: 1px solid rgb(0, 0, 0);
  content: '';
  height: 21px;
  left: 0;
  position: absolute;
  top: 50%;

  transform: translate(-50%, -50%) rotate(45deg);

  width: 21px;
}
.nav-data-list .list-img {
  height: 35px;

  transform: translate(-50%, -50%) scale(0);
  width: 35px;
}
.nav-data-list.checked .list-img,
.nav-data-list:hover .list-img {
  transform: translate(-50%, -50%) scale(1);
}
</style>
