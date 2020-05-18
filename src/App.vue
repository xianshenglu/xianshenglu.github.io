<template>
  <main id="app">
    <UnitLang :langs="authorData.langs" @langChange="langChangeHandler" />
    <UnitNav :navs="sections" @navChange="navChangeHandler" />
    <Index id="index" :index="findSection('index')" />
    <Introduction
      id="introduction"
      :introduction="findSection('introduction')"
    />
    <Skill id="skill" :skill="findSection('skill')" />
    <Project id="project" :project="findSection('project')" />
    <!-- todo import on demand -->
    <UpgradeButton :isVisible.sync="isUpgradeReady" />
  </main>
</template>

<script>
import authorData from './constants/authorData.js'
import Index from './components/Index'
function $(str) {
  return Array.from(document.querySelectorAll(str))
}
export default {
  name: 'App',
  components: {
    // todo remote scroll position remember, then use lazy load, and add priority
    Index,
    UnitLang: () =>
      import(/* webpackChunkName: "UnitLang" */ './components/UnitLang'),
    Introduction: () =>
      import(
        /* webpackChunkName: "Introduction" */ './components/Introduction'
      ),
    Skill: () => import(/* webpackChunkName: "Skill" */ './components/Skill'),
    Project: () =>
      import(/* webpackChunkName: "Project" */ './components/Project'),
    UnitNav: () =>
      import(/* webpackChunkName: "UnitNav" */ './components/UnitNav'),
    UpgradeButton: () =>
      import(
        /* webpackChunkName: "UpgradeButton" */ './components/UpgradeButton'
      )
  },
  data: function() {
    return {
      currentNavId: 'index',
      animationFrameId: 1,
      authorData,
      isUpgradeReady: false
    }
  },
  computed: {
    sections() {
      return this.authorData.langs.find(lang => lang.checked === 'checked')
        .sections
    }
  },
  beforeCreate() {
    authorData.langs[1].checked = 'checked'
  },
  created() {
    this.langBackToLast()
    // won't be late in created?
    this.listenServiceWorkerRegistrationEvents()
  },
  destroyed() {
    this.removeServiceWorkerRegistrationEvents()
    window.removeEventListener(
      'scroll',
      this.scrollHandlerGlobal,
      { capture: true },
      true
    )
  },
  mounted() {
    this.$nextTick(function() {
      this.scrollToLastPos()
      window.addEventListener(
        'scroll',
        this.scrollHandlerGlobal,
        { capture: true },
        true
      )
    })
  },
  methods: {
    listenServiceWorkerRegistrationEvents() {
      navigator.serviceWorker.getRegistration().then(registration => {
        // if a developer unregistered the previous serviceWorker
        // the registration would be undefined, we need to register manually
        // Also, in firefox, it wouldn't work unless we register manually.
        if ([null, undefined].includes(registration)) {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./service-worker.js')
          }
          return
        }
        registration.addEventListener('updatefound', this.onServiceWorkerMsg)
      })
    },
    removeServiceWorkerRegistrationEvents() {
      navigator.serviceWorker.getRegistration().then(registration => {
        if (registration === null) {
          return
        }
        registration.removeEventListener('updatefound', this.onServiceWorkerMsg)
      })
    },
    onServiceWorkerMsg(event) {
      this.isUpgradeReady = true
    },
    closest(ele, selector) {
      const targetEle = $(selector)
      while (ele.tagName.toLowerCase() !== 'html') {
        if (targetEle.includes(ele)) {
          return ele
        }
        ele = ele.parentNode
      }
    },
    smoothScoll(targetScrollTop) {
      const self = this
      const speed = 0.1
      let startTime = 0
      const timeLimit = 2000
      window.cancelAnimationFrame(self.animationFrameId)
      self.animationFrameId = window.requestAnimationFrame(step)
      function step(timestamp) {
        startTime = startTime || timestamp
        const interval = timestamp - startTime
        const distance = targetScrollTop - $('html')[0].scrollTop
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
    findSection(id) {
      return this.sections.find(section => section.id === id)
    },
    langClear() {
      this.authorData.langs.forEach(lang => {
        lang.checked = ''
      })
    },
    langBackToLast() {
      const lastLangId = localStorage.getItem('lang')
      if (lastLangId) {
        this.langClear()
        this.authorData.langs.find(lang => lang.id === lastLangId).checked =
          'checked'
      }
    },
    langChangeHandler(e) {
      this.langClear()
      const preferredLangId = e.target.getAttribute('data-preferred-lang-id')
      localStorage.setItem('lang', preferredLangId)
      const preferredLang = this.authorData.langs.find(
        lang => lang.id === preferredLangId
      )
      preferredLang.checked = 'checked'
      this.syncNavBetweenLangs()
    },
    syncNavBetweenLangs() {
      this.navClear()
      this.sections.find(section => section.id === this.currentNavId).checked =
        'checked'
    },
    navClear() {
      this.sections.forEach(section => {
        section.checked = ''
      })
    },
    navUpdate(targetNavId) {
      this.currentNavId = targetNavId
      this.sections.find(section => section.id === targetNavId).checked =
        'checked'
    },
    navChangeHandler(e) {
      this.navClear()
      const targetNavId = this.closest(
        e.target,
        '[data-target-nav-id]'
      ).getAttribute('data-target-nav-id')
      this.navUpdate(targetNavId)
      const targetScrollTop =
        $('#' + targetNavId)[0].getBoundingClientRect().top +
        $('html')[0].scrollTop

      this.smoothScoll(targetScrollTop)
    },
    scrollHandlerGlobal() {
      localStorage.setItem('currentHtmlScrollTop', $('html')[0].scrollTop)
      this.scrollHandlerForSkill()
      this.scrollHandlerForNav()
    },
    scrollHandlerForSkill() {
      const skillBoundingClientTop = $('#skill')[0].getBoundingClientRect().top
      const viewportHeight = $('html')[0].clientHeight
      const isInView = Boolean(
        skillBoundingClientTop >= -viewportHeight / 1.3 &&
          skillBoundingClientTop <= viewportHeight / 2
      )
      showSkillPercent(isInView)

      function showSkillPercent(isInView) {
        const circleAction = Array.from(
          document.querySelectorAll('circle[data-percent]')
        )
        circleAction.forEach(ele => {
          const percent = ele.getAttribute('data-percent')
          const stroke = ele.getAttribute('data-stroke')
          ele.style.strokeDasharray = isInView ? percent + ' 100' : ''
          ele.style.stroke = stroke
          ele.parentNode.parentNode.style.color = stroke
        })
      }
    },
    scrollHandlerForNav() {
      this.navClear()
      const scrollPos = Math.min(
        Math.round($('html')[0].scrollTop / $('html')[0].clientHeight),
        3
      )
      this.currentNavId = this.sections[scrollPos].id

      this.sections[scrollPos].checked = 'checked'
    },
    scrollToLastPos() {
      const lastPos = Number(localStorage.getItem('currentHtmlScrollTop'))
      if (lastPos) {
        $('html')[0].scrollTop = lastPos
      } else {
        this.sections[0].checked = 'checked'
      }
    }
  }
}
</script>

<style>
#app {
  box-sizing: border-box;

  color: rgb(44, 62, 80);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  position: relative;

  text-align: center;
  width: 100%;
}
</style>
