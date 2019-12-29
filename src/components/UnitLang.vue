<template>
 <aside class="unit unit-lang" @click="langChange">
    <span v-for="(lang,index) in langs" :key="index"
    :class="lang.checked+' unit-lang-name'" :data-preferred-lang-id="lang.id">
      {{lang.name}}
    </span>
 </aside>
</template>

<script>
export default {
  name: 'UnitForLang',
  props: ['langs'],
  methods: {
    langChange (event) {
      this.$emit('langChange', event)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.unit-lang {

  font-size: 14px;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 99;
}
@media screen and (max-width: 760px) {
  .unit-lang {
    position: absolute;
    right: 5px;
  }
}
.unit-lang .unit-lang-name {

  cursor: pointer;

  opacity: 0.3;
  padding: 5px;
  transition: opacity 0.5s ease;
}
.unit-lang .unit-lang-name.checked {
  opacity: 1;
}

</style>
