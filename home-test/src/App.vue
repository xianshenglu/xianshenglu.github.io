<template>
  <main id="app">
    <UnitLang :langs="authorData.langs" @langChange="langChangeHandler" />
    <UnitNav :navs="sections" @navChange="navChangeHandler"/>
    <Index :index="findSection('index')" id="index"/>
    <Introduction :introduction="findSection('introduction')"  id="introduction"/>
    <Skill :skill="findSection('skill')" id="skill"/>
    <Project :project="findSection('project')" id="project" />
  </main>
</template>

<script>
import authorData from './data/authorData.js'
import UnitLang from './components/UnitLang'
import UnitNav from './components/UnitNav'
import Index from './components/Index'
import Introduction from './components/Introduction'
import Skill from './components/Skill'
import Project from './components/Project'

export default {
  name: 'App',
  components: {
    UnitLang,
    Index,
    Introduction,
    Skill,
    Project,
    UnitNav
  },
  data: function () {
    return {
      viewportHeight: 100,
      htmlScrollTop: 100,
      currentNavId: 'index',
      authorData
    }
  },
  computed: {
    sections () {
      return this.authorData.langs.find(lang => lang.checked).sections
    }
  },
  beforeCreate () {
    authorData.langs[0].checked = 'checked'
  },
  created () {
    this.langBackToLast()
  },
  mounted () {
    this.$nextTick(function () {
      this.scrollToLastPos()
      this.updateViewportHeight()
      window.addEventListener('scroll', this.scrollHandlerGlobal, { capture: true }, true)
      window.addEventListener('resize', this.updateViewportHeight, { capture: true }, true)
    })
  },
  updated () {

  },
  methods: {
    findSection (id) {
      return this.sections.find(section => section.id === id)
    },
    updateViewportHeight () {
      this.viewportHeight = document.documentElement.clientHeight
    },
    langClear () {
      this.authorData.langs.forEach(lang => { lang.checked = '' })
    },
    langBackToLast () {
      this.langClear()
      let lastLangId = localStorage.getItem('lang')

      if (lastLangId) {
        this.authorData.langs.find(lang => lang.id === lastLangId).checked = 'checked'
      } else {
        this.authorData.langs[0].checked = 'checked'
      }
    },
    langChangeHandler (e) {
      this.langClear()
      let preferredLangId = e.target.getAttribute('data-preferred-lang-id')
      localStorage.setItem('lang', preferredLangId)
      let preferredLang = this.authorData.langs.find(lang => lang.id === preferredLangId)
      preferredLang.checked = 'checked'
      this.syncNavBetweenLangs()
    },
    syncNavBetweenLangs () {
      this.navClear()
      this.sections.find(section => section.id === this.currentNavId).checked = 'checked'
    },
    navClear () {
      this.sections.forEach(section => { section.checked = '' })
    },
    navUpdate (targetNavId) {
      this.sections.find(section => section.id === targetNavId)
        .checked = 'checked'
      this.currentNavId = targetNavId
    },
    navChangeHandler (e) {
      this.navClear()
      let targetNavId = e.target.getAttribute('data-target-nav-id')
      this.navUpdate(targetNavId)
      let pos = document.getElementById(targetNavId).getBoundingClientRect().top + this.htmlScrollTop
      window.scrollTo({
        top: pos,
        behavior: 'smooth'
      })
    },
    scrollHandlerGlobal () {
      this.htmlScrollTop = document.documentElement.scrollTop
      localStorage.setItem('htmlScrollTop', this.htmlScrollTop)
      this.scrollHandlerForSkill()
      this.scrollHandlerForNav()
    },
    scrollHandlerForSkill () {
      let skillBoundingClientTop = document.getElementById('skill').getBoundingClientRect().top
      let isInView = !!(skillBoundingClientTop >= -this.viewportHeight / 1.3 && skillBoundingClientTop <= this.viewportHeight / 2)
      showSkillPercent(isInView)

      function showSkillPercent (isInView) {
        let circleAction = Array.from(
          document.querySelectorAll('circle[data-percent]')
        )
        circleAction.forEach(ele => {
          let percent = ele.getAttribute('data-percent')
          ele.style.strokeDasharray = isInView ? percent + ' 100' : ''
        })
      }
    },
    scrollHandlerForNav () {
      this.navClear()
      let scrollPos = Math.round(this.htmlScrollTop / this.viewportHeight)
      this.currentNavId = this.sections[scrollPos].id
      this.sections[scrollPos].checked = 'checked'
    },
    scrollToLastPos () {
      let lastPos = Number(localStorage.getItem('htmlScrollTop'))
      if (lastPos) {
        document.documentElement.scrollTop = lastPos
      } else {
        this.sections[0].checked = 'checked'
      }
    }
  },
  destoryed () {
    window.removeEventListener('scroll', this.scrollHandlerGlobal, true)
    window.removeEventListener('resize', this.updateViewportHeight, true)
  }
}

</script>

<style>
#app {
  position: relative;

  box-sizing: border-box;
  width: 100%;
  height: 100%;

  text-align: center;

  color: #2c3e50;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
