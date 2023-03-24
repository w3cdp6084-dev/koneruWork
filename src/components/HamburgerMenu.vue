<template>
      <div class="hambergerMenu" ref="hambergerMenu">
      <div class="hambergerMenu-overlay-01" ref="overlay01"></div>
      <div class="hambergerMenu-overlay-02" ref="overlay02"></div>
      <button aria-label="hambergermenu btn" class="hambergerMenu-btn" @click="toggleMenu">
        <span class="hambergerMenu-hover">
          <span class="hambergerMenu-openarea">
            <span class="hambergerMenu-openarea-line hambergerMenu-openarea-line-01"></span>
            <span class="hambergerMenu-openarea-line hambergerMenu-openarea-line-02"></span>
          </span>
        </span>
      </button>
    </div>
</template>


<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      menuOpen: false,
      isMobile: false,
    };
  },
  methods: {
    openMenu() {
      gsap.to(".hambergerMenu-overlay-01", { x: 10, scaleX: 5.1, scaleY: 1.1, duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-overlay-02", { opacity: 1, scaleX: 0, scaleY: 1, duration: 0.6, ease: "power2.out" });      gsap.to(".hambergerMenu-btn", { x: -520, scaleX: 0.9, scaleY: 0.9, borderRadius: "100px", height: "86px", width: "86px", duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-hover", { boxShadow: "rgba(193, 193, 192, 0.1) 0px 10px 20px 5px", duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-openarea", { scale: 0.6, duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-openarea-line-01", { rotation: 45, borderRadius: "4px", height: "9px", top: "3px", duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-openarea-line-02", { rotation: -45, borderRadius: "4px", height: "9px", bottom: "2px", duration: 0.6, ease: "power2.out" });

      this.menuOpen = true;

      if (this.isMobile) {
        gsap.to(".hambergerMenu-btn", { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
      }
    },

    closeMenu() {
      gsap.to(".hambergerMenu-overlay-01", { x: 0, scaleX: 1, scaleY: 1, duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-overlay-02", { opacity: 0, scaleX: 1, scaleY: 1, duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-btn", { x: 0, scaleX: 1, scaleY: 1, borderRadius: "10px", height: "100%", width: "100%", duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-hover", { boxShadow: "none", duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-openarea", { scale: 1, duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-openarea-line-01", { rotation: 0, borderRadius: "2px", height: "4px", top: "0px", duration: 0.6, ease: "power2.out" });
      gsap.to(".hambergerMenu-openarea-line-02", { rotation: 0, borderRadius: "2px", height: "4px", bottom: "0px", duration: 0.6, ease: "power2.out" });
      this.menuOpen = false;

if (this.isMobile) {
  gsap.to(".hambergerMenu-btn", { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
}
},

toggleMenu() {
if (this.menuOpen) {
  this.closeMenu();
} else {
  this.openMenu();
}
}
},
mounted() {
  gsap.fromTo(
    ".hambergerMenu",
    { transform: "translateX(120px)" },
    { transform: "translateX(0px)", duration: 0.6, ease: "power2.out" }
  );
  this.closeMenu();
}
};



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
  opacity: 0;
}
.hambergerMenu-overlay-02, .hambergerMenu-overlay-02:before {
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 10px;
  pointer-events: none;
}
.hambergerMenu-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
  cursor: pointer;
  transform: translate(0px, 0px);
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
@media (max-width: 767px) {
  .hambergerMenu {
    top: 10px;
    right: 20px;
    bottom: auto;
    width: 60px;
    height: 60px;
  }
  .hambergerMenu-overlay-01 {
    top: 22px;
    left: calc(-100vw + 80px);
    width: 100vw;
    height: calc(100vh - 32px);
    height: calc(var(--viewportHeight,100vh) - 32px);
    border-radius: 10px;
    transform: scaleY(0);
    transform-origin: top;
}
.hambergerMenu-overlay-02 {
    top: 42px;
    right: -10px;
    width: calc(100vw - 20px);
    height: calc(100vh - 72px);
    height: calc(var(--viewportHeight) - 72px);
    transform: scaleY(0);
    transform-origin: top;
}
.hambergerMenu-contents{
    right: 0;
    width: 100%;
    padding: 38px 8px;
}
.hambergerMenu-openarea {
    width: 26px;
    height: 13px;
}
}
</style>
