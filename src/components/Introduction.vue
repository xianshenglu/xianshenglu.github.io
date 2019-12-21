<template>
 <section class="page page-intro" >
   <div class="page-intro-detail intro-name">
     <h3 class="intro-name-text" >{{introduction.name}}</h3>
   </div>
   <div class="page-intro-detail intro-value">
     <div class="intro-value-text" >{{introduction.value}}</div>
   </div>
   <div class="page-intro-detail intro-data">
    <ul class="intro-data-detail intro-data-info">
      <li class="info-list" v-for="(info,index) in introduction.data.info"
    :key="index">
        <svg :class="'icon info-list-img '+info.icon" aria-hidden="true">
          <use :xlink:href="'#'+info.icon"></use>
        </svg>
        <span class="info-list-name">{{info.name}}</span>
        <span class="info-list-value">{{info.value}}</span>
      </li>
    </ul>
    <ul class="intro-data-detail intro-data-contact">
      <li class="contact-list" v-for="(contact,index) in introduction.data.contact"
    :key="index">
        <svg :class="'icon contact-list-img '+contact.icon" aria-hidden="true">
          <use :xlink:href="'#'+contact.icon"></use>
        </svg>
        <span class="contact-list-name">{{contact.name}}</span>
        <span class="contact-list-value">{{contact.value}}</span>
      </li>
    </ul>
   </div>
 </section>
</template>

<script>
export default {
  name: 'Introduction',
  props: ['introduction']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-intro {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
}
.page-intro .intro-name,
.page-intro .intro-value {
  display: flex;
  align-items: center;
  justify-content: center;
}
.page-intro .intro-name {
  flex: 0.7 1 auto;
}
.intro-name .intro-name-text {
  height: 40px;

  font-size: 30px;
  font-weight: 900;
}
.page-intro .intro-value {
  align-items: flex-start;
  flex: 0.45 0 auto;

  padding: 0 20px;
}
.intro-value .intro-value-text {
  align-self: flex-start;

  height: 20px;
}
.page-intro .intro-data {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  flex-flow: column nowrap;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  .page-intro .intro-data {
    margin-bottom: 30px;
  }
}
.intro-data .intro-data-detail {
  flex: 1 1 auto;
}
.intro-data .intro-data-info,
.intro-data .intro-data-contact {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
@media screen and (max-width: 600px) {
  .intro-data .intro-data-info,
  .intro-data .intro-data-contact {
    flex-flow: column nowrap;
    justify-content: space-around;
  }
}
.intro-data-info .info-list,
.intro-data-contact .contact-list {
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  flex-flow: column nowrap;

  min-width: 200px;
}
@media screen and (max-width: 600px) {
  .intro-data-info .info-list,
  .intro-data-contact .contact-list {
    flex-flow: row nowrap;
    justify-content: flex-start;

    min-width: 300px;

    line-height: 55px;
  }
}
.info-list .info-list-img,
.contact-list .contact-list-img {
  display: block;

  width: 50px;
  height: 50px;
  margin: 0 5px 5px 5px;
}
.info-list .info-list-name,
.contact-list .contact-list-name {
  display: none;
}
@media screen and (max-width: 600px) {
  .info-list .info-list-name,
  .contact-list .contact-list-name {
    display: inline;

    margin: 0 5px 0 10px;
  }
}
.info-list .info-list-name,
.info-list .info-list-value,
.contact-list .contact-list-name,
.contact-list .contact-list-value {
  line-height: 1.5;
}
.contact-list .contact-list-value {
  position: relative;
}
.contact-list .contact-list-value::before {
  content: " X";
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;

  transition: all 0.5s ease;

  opacity: 1;
  background: #fff;

  font-size: 1.1em;
}
@media screen and (max-width: 600px) {
  .contact-list .contact-list-value::before {
    text-align: left;
  }
}
.contact-list:hover .contact-list-value::before {
  opacity: 0;
  background: transparent;
}

</style>
