<template>
    <div ref="hambergerMenu" class='hambergerMenu'>
      <div class='hambergerMenu-overlay-01'></div>
      <div class='hambergerMenu-overlay-02'></div>
      <button ref="hambergerMenuBtn" class='hambergerMenu-btn js-click-target :class="{ expanded: expanded }" @click="toggleMenu'>
         <span class='hambergerMenu-hover'>
            <span class='hambergerMenu-openarea'>
               <span class='hambergerMenu-openarea-line hambergerMenu-openarea-line-01'></span>
               <span class='hambergerMenu-openarea-line hambergerMenu-openarea-line-02'></span>
            </span>
         </span>
      </button>
    </div>
</template>

<script>
export default {
  mounted() {
    this.$gsap.to(this.$refs.hambergerMenu, {
      duration: 1, // アニメーションの期間（秒）
      x: 0, // 開始時のtranslateX値
      ease: 'power3.out', // アニメーションのイージング
    });
  },
  data() {
    return {
      expanded: false,
    };
  },
  methods: {
   toggleMenu() {
    this.expanded = !this.expanded;
    const animation = this.expanded
      ? this.$gsap.to(this.$refs.hambergerMenuBtn, {
          duration: 1,
          ease: "power2.out",
          x: "-520px",
          scale: 0.9,
          borderRadius: "100px",
          height: "86px",
          width: "86px",
        })
      : this.$gsap.to(this.$refs.hambergerMenuBtn, {
          duration: 1,
          ease: "power2.out",
          x: "0px",
          scale: 1,
          borderRadius: "10px",
          height: "100%",
          width: "100%",
  });
  animation.play();
},
},
}
</script>

<style scoped>
/* Menu */
.hambergerMenu{
  position: fixed;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 110px;
  height: calc(100% - 20px);
  margin: auto 0;
  transform: translateX(120px);
  z-index: 11;
}
.hambergerMenu-overlay-01, .hambergerMenu-overlay-01:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  pointer-events: none;
}
.hambergerMenu-overlay-01 {
  background-color: #dfded9;
  transform-origin: right;
}

.hambergerMenu-overlay-01:before {
  content: "";
  box-shadow: inset 2px 35px 16px 5px rgba(24,23,13,.2);
  z-index: 1;
  opacity: 0;
  transition: opacity 1s cubic-bezier(.26,.16,.1,1);
}

.hambergerMenu-overlay-01, .hambergerMenu-overlay-01:before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  pointer-events: none;
}
.hambergerMenu-overlay-02, .hambergerMenu-overlay-02:before {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 10px;
  pointer-events: none;
}
.hambergerMenu-overlay-02 {
  right: 0;
  width: 510px;
  background-color: #bcbbb4;
  transform-origin: right;
  transform: scaleX(0);
  overflow: hidden;
}
.hambergerMenu-overlay-02, .hambergerMenu-overlay-02:before {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 10px;
  pointer-events: none;
}
.hambergerMenu-btn{
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
  cursor: pointer;
}
.hambergerMenu-hover {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: transform .25s cubic-bezier(.43,.05,.17,1);
  border-radius: inherit;
}
.hambergerMenu-openarea {
  position: relative;
  width: 37px;
  height: 13px;
}
.hambergerMenu-openarea-line-01 {
  top: 0;
}
.hambergerMenu-openarea-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #302c1a;
  border-radius: 2px;
  cursor: pointer;
}
.hambergerMenu-openarea-line-02{
  bottom: 0;
}
.hambergerMenu-openarea-line{
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #302c1a;
  border-radius: 2px;
  cursor: pointer;
}
.hambergerMenu-hover:hover {
    transform: scale(.9,.98);
}
.hambergerMenu.is-open .hambergerMenu-overlay-01:before {
    opacity: 1;
}

</style>
