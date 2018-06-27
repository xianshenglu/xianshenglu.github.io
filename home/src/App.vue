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
import authorData from './assets/js/authorData.js'
import UnitLang from './components/UnitLang'
import UnitNav from './components/UnitNav'
import Index from './components/Index'
import Introduction from './components/Introduction'
import Skill from './components/Skill'
import Project from './components/Project'
function $ (str) {
  return Array.from(document.querySelectorAll(str))
}

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
      currentNavId: 'index',
      animationFrameId: 1,
      authorData
    }
  },
  computed: {
    sections () {
      return this.authorData.langs.find(lang => lang.checked === 'checked').sections
    }
  },
  beforeCreate () {
    authorData.langs[1].checked = 'checked'
  },
  created () {
    this.langBackToLast()
  },
  mounted () {
    this.$nextTick(function () {
      this.scrollToLastPos()
      window.addEventListener('scroll', this.scrollHandlerGlobal, { capture: true }, true)
    })
  },
  updated () {

  },
  methods: {
    closest (ele, selector) {
      let targetEle = $(selector)
      while (ele.tagName.toLowerCase() !== 'html') {
        if (targetEle.includes(ele)) {
          return ele
        }
        ele = ele.parentNode
      }
    },
    smoothScoll (targetScrollTop) {
      let self = this
      let speed = 0.1
      let startTime = 0
      let timeLimit = 2000
      window.cancelAnimationFrame(self.animationFrameId)
      self.animationFrameId = window.requestAnimationFrame(step)
      function step (timestamp) {
        startTime = startTime || timestamp
        let interval = timestamp - startTime
        let distance = targetScrollTop - $('html')[0].scrollTop
        let stepSize = speed * distance
        switch (Math.ceil(stepSize)) {
          case 0:
            stepSize = -1
            break
          case 1:
            stepSize = 1
            break
        }

        if (distance !== 0 && interval < timeLimit) {
          window.scrollTo(0, $('html')[0].scrollTop + stepSize)
          self.animationFrameId = window.requestAnimationFrame(step)
        }
      }
    },
    findSection (id) {
      return this.sections.find(section => section.id === id)
    },
    langClear () {
      this.authorData.langs.forEach(lang => { lang.checked = '' })
    },
    langBackToLast () {
      let lastLangId = localStorage.getItem('lang')
      if (lastLangId) {
        this.langClear()
        this.authorData.langs.find(lang => lang.id === lastLangId).checked = 'checked'
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
      this.currentNavId = targetNavId
      this.sections.find(section => section.id === targetNavId)
        .checked = 'checked'
    },
    navChangeHandler (e) {
      this.navClear()
      let targetNavId = this.closest(e.target, '[data-target-nav-id]').getAttribute('data-target-nav-id')
      this.navUpdate(targetNavId)
      let targetScrollTop = $('#' + targetNavId)[0].getBoundingClientRect().top + $('html')[0].scrollTop

      this.smoothScoll(targetScrollTop)
    },
    scrollHandlerGlobal () {
      localStorage.setItem('currentHtmlScrollTop', $('html')[0].scrollTop)
      this.scrollHandlerForSkill()
      this.scrollHandlerForNav()
    },
    scrollHandlerForSkill () {
      let skillBoundingClientTop = $('#skill')[0].getBoundingClientRect().top
      let viewportHeight = $('html')[0].clientHeight
      let isInView = !!(skillBoundingClientTop >= -viewportHeight / 1.3 && skillBoundingClientTop <= viewportHeight / 2)
      showSkillPercent(isInView)

      function showSkillPercent (isInView) {
        let circleAction = Array.from(
          document.querySelectorAll('circle[data-percent]')
        )
        circleAction.forEach(ele => {
          let percent = ele.getAttribute('data-percent')
          let stroke = ele.getAttribute('data-stroke')
          ele.style.strokeDasharray = isInView ? percent + ' 100' : ''
          ele.style.stroke = stroke
          ele.parentNode.parentNode.style.color = stroke
        })
      }
    },
    scrollHandlerForNav () {
      this.navClear()
      let scrollPos = Math.min(Math.round($('html')[0].scrollTop / $('html')[0].clientHeight), 3)
      this.currentNavId = this.sections[scrollPos].id

      this.sections[scrollPos].checked = 'checked'
    },
    scrollToLastPos () {
      let lastPos = Number(localStorage.getItem('currentHtmlScrollTop'))
      if (lastPos) {
        $('html')[0].scrollTop = lastPos
      } else {
        this.sections[0].checked = 'checked'
      }
    }
  },
  destoryed () {
    window.removeEventListener('scroll', this.scrollHandlerGlobal, true)
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
