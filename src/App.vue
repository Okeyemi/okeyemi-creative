<template>
  <AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen= true" />  
  <div class="w-full flex"> 
  <!-- <Homepage /> -->
  <router-view />
</div>
<teleport to="body">
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen = false" />  
</teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";


export default {
data(){
    return{
       isLoginOpen: false,
    };
},
  components: { AppHeader, LoginModal },
};
</script>

<style>

</style>