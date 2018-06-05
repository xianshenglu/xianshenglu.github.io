<template>
 <nav class="unit unit-nav" @click="navChange">
  <ul class="nav-data">
    <li :class="nav.checked+' nav-data-list'" :data-target-nav-id="nav.id" v-for="(nav,index) in navs" :key="index">
        <span class="list-info" :data-target-nav-id="nav.id">{{nav.name}}</span>
        <svg :class="'icon list-img '+nav.icon" aria-hidden="true" :data-target-nav-id="nav.id" >
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
  position: fixed;
  z-index: 99;
  top: 50%;
  right: 20px;

  transform: translateY(-50%);

  font-size: 14px;
}
@media screen and (max-width: 1050px) {
  .unit-nav {
    display: none;
  }
}
.nav-data .nav-data-list {
  position: relative;

  width: 40px;
  height: 40px;

  cursor: pointer;
}
.nav-data .nav-data-list::before {
  content: "";

  width: 15px;
  height: 15px;

  transform: translate(-50%, -50%) scale(1);

  background: #eee;
}

.nav-data .nav-data-list::before,
.nav-data-list .list-info,
.nav-data-list .list-img {
  position: absolute;
  top: 50%;
  left: 50%;
}
.nav-data .nav-data-list::before,
.nav-data-list .list-img {
  transition: transform 0.5s ease;

  border-radius: 50%;
}
.nav-data .nav-data-list:hover::before {
  transform: translate(-50%, -50%) scale(0);
}
.nav-data-list .list-info {
  left: 0;

  height: 20px;
  padding: 5px 5px;

  transition: transform 0.5s ease, background-color 0.5s ease, opacity 0.5s ease;
  transform: translate(0%, -50%);
  word-break: keep-all;

  opacity: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  line-height: 20px;
}
.nav-data-list:hover .list-info {
  transform: translate(calc(-100% - 5px), -50%);

  opacity: 1;
  background-color: lightblue;
}
.nav-data-list .list-info::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;

  width: 0;
  height: 0;

  transition: border-right-color 0.5s ease;
  transform: translateX(-100%);

  border: 15px solid transparent;
}
.nav-data-list:hover .list-info::before {
  border-right-color: lightblue;
}
.nav-data-list .list-img {
  width: 35px;
  height: 35px;

  transform: translate(-50%, -50%) scale(0);
}
.nav-data-list.checked .list-img,
.nav-data-list:hover .list-img {
  transform: translate(-50%, -50%) scale(1);
}

</style>
