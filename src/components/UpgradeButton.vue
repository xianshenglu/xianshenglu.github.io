<template>
  <div v-if="isVisible" class="UpgradeButton">
    <div class="UpgradeButton__text">New Version Found !</div>
    <button class="button" @click="onCancel">Cancel</button>
    <button class="button" @click="onUpgrade">Update {{ countdown }}</button>
  </div>
</template>

<script>
export default {
  name: 'UpgradeButton',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      countdown: 0,
      timer: 0
    }
  },
  watch: {
    isVisible(val) {
      if (val === false) {
        return
      }
      clearInterval(this.timer)
      this.startCountdown()
    }
  },
  created() {
    navigator.serviceWorker.addEventListener('controllerchange', this.onReload)
  },
  destroyed() {
    navigator.serviceWorker.removeEventListener(
      'controllerchange',
      this.onReload
    )
  },
  methods: {
    startCountdown() {
      this.countdown = 10
      this.timer = setInterval(() => {
        this.countdown--
        if (this.countdown === 0) {
          this.upgrade()
        }
      }, 1000)
    },
    upgrade() {
      clearInterval(this.timer)
      navigator.serviceWorker.getRegistration().then(registration => {
        if (!registration.waiting) {
          return
        }
        registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      })
    },
    onReload(event) {
      window.location.reload()
    },
    onUpgrade() {
      this.upgrade()
    },
    onCancel() {
      clearInterval(this.timer)
      this.$emit('update:isVisible', false)
    }
  }
}
</script>

<style scoped>
.UpgradeButton {
  border-radius: 5%;
  bottom: 20px;
  color: rgb(36, 41, 46);
  font-size: 14px;
  line-height: 1.2;
  max-width: 200px;
  position: fixed;
  right: 20px;
}
.UpgradeButton__text {
  margin-bottom: 5px;
}
</style>
