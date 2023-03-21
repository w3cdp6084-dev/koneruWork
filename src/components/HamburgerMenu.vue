<template>
 <div>
   <button @click="toggleMenu" class="hamburger">
     <span class="hamburger-box">
       <span class="hamburger-inner" :class="{ 'is-active': isActive }"></span>
     </span>
   </button>
   <transition name="slide-fade">
     <nav v-if="isActive" class="menu">
       <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Contact</a></li>
       </ul>
     </nav>
   </transition>
 </div>
</template>

<script>
export default {
 data() {
   return {
     isActive: false,
   };
 },
 methods: {
   toggleMenu() {
     this.isActive = !this.isActive;
   },
 },
};
</script>

<style scoped>
.hamburger {
 position: relative;
 background-color: transparent;
 border: none;
 cursor: pointer;
 padding: 0;
}

.hamburger-box {
 width: 40px;
 height: 24px;
 display: inline-block;
 position: relative;
}

.hamburger-inner {
 width: 100%;
 height: 2px;
 background-color: #000;
 position: absolute;
 left: 0;
 top: 50%;
 transition: all 0.3s;
}

.hamburger-inner::before,
.hamburger-inner::after {
 content: "";
 width: 100%;
 height: 2px;
 background-color: #000;
 position: absolute;
 left: 0;
 transition: all 0.3s;
}

.hamburger-inner::before {
 top: -10px;
}

.hamburger-inner::after {
 bottom: -10px;
}

.hamburger-inner.is-active {
 background-color: transparent;
}

.hamburger-inner.is-active::before {
 top: 0;
 transform: rotate(45deg);
}

.hamburger-inner.is-active::after {
 top: 0;
 transform: rotate(-45deg);
}

.menu {
 position: absolute;
 top: 100%;
 left: 0;
 background-color: #fff;
 padding: 10px;
 box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
 transition: all 0.3s;
}

.slide-fade-enter,
.slide-fade-leave-to {
 opacity: 0;
 transform: translateY(-20px);
}
</style>
