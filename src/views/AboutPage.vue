
<template>
<section class="flex bg">
  <transition name="fade">
  <div>  
    <h1 class="mt-2 text-3xl text-center ">
      I am a technology enthusiast; I love to implement visual elements that users see and interact with in a web application. 
    </h1>
    </div>
  </transition>
    </section>
  </template>
  
  <style>
.fade-enter-active,
.fade-leave-active {
    transition:all 1s ease;
}

.fade-enter-from{
    opacity: 0;
  transform:translateX(-100%);
}
.fade-leave-to{
  opacity: 0;
  transform:translateX(100%);
}
  </style>