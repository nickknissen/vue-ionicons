export default {
  computed: {
    ionClass() {
      let addClass = ''

      if (this.rotate) {
        addClass = addClass + 'ion-rotate '
      } else if (this.beat) {
        addClass = addClass + 'ion-beat '
      } else if (this.shake) {
        addClass = addClass + 'ion-shake '
      }

      return `${this.rootClass} ${addClass}`
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    rootClass: {
      type: String,
      default: ""
    },
    w: {
      type: String,
      default: "14px"
    },
    h: {
      type: String,
      default: "14px"
    },
    rotate: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    }
  }
}