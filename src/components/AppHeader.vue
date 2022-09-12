<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 top-0">
    <router-link class="mx-2" to="/">Home</router-link>
    <router-link class="mx-2" to="/CalendarPage/">Calendar</router-link>    
     <router-link class="mx-2" to="/slider/">Slider</router-link>
     <router-link class="mx-2" to="/CalculatorPage/">Calculator</router-link>
     <router-link class="mx-2" to="/ApplicationForm/">ApplicationForm</router-link>
     <router-link class="mx-2" to="/AboutPage/">About</router-link>
   
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
   <button v v-else class="mx-2" @click="$emit(`open-login-modal`)">Login</button>
   </nav>
</template>
 
<script>
export default { 
props:{ isLOggedIn: { type: Boolean, required: true } },
}
</script>

<style>

</style>

