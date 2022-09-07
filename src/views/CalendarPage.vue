<template>
  <div class="m-auto p-2 px-2" >
         <h1 class="text-2xl my-2 text-center font-bold ">MY CALENDAR</h1>
   
         <section class="mx-7 flex justify-between">
       <h2 class="font-bold">{{currentMonthName}}</h2>
       <h2 class="font-bold">{{currentYear}}</h2>
         </section>
       
         <section class="flex my-2 "> 
          <p
           class="text-center"
           style="width:14.28%" 
           v-for="day in days"
            :key="day">{{ day }}</p>
      
         </section>
         <section class="flex flex-wrap">
             <!-- width style 100/7 -->
           <p class="text-center" 
           style="width:14.28%"
            v-for="num in startDay()"
           :key="num">
           
          
       </p>
           <!-- width style 100/7 -->
           <p class="text-center" 
           style="width:14.28%" 
           v-for="num in daysInMonth(currentYear,currentMonth)"
           :key="num"
           :class="currentDateClass(num)"
           >
           {{num}}
       </p>
         </section>
         <section class="flex justify-between my-4">
             <button class="px-2 border rounded bg-blue-500 hover:bg-blue-700 text-white font-semibold"   @click="prev">Prev</button>
             <button class="px-2 border rounded bg-blue-500 hover:bg-blue-700 text-white font-semibold" @click="next">Next</button>
         </section>
         <section class="flex justify-center">
          <button class="px-2 border rounded bg-blue-500 hover:bg-blue-700 text-white font-semibold" onclick="alert('Welcome to Okeyemi')">Powered by Okeyemi Creative </button>
         </section>
    </div>
  
  </template>
  
  <script>
  export default {
    data(){
      return{
        currentDate: new Date().getUTCDate(),
          currentMonth:new Date().getMonth(),
          currentYear: new Date().getFullYear(),
      days:['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'],
    };
    },
  
  methods:{
     daysInMonth(year, month){
      
       return new Date (year,month+1, 0).getDate();
     },
     startDay(){
         return new Date(this.currentYear, this.currentMonth,1 ).
         getDay();
     },
     prev(){
         if(this.currentMonth==0){
             this.currentMonth=11
             this.currentYear--
         }else{
              this.currentMonth--}
        
     },
     next(){
         if(this.currentMonth ==11){
             this.currentMonth=0;
             this.currentYear++;
         }else{
             this.currentMonth++;
     }
     },
     currentDateClass(num){
      const calendarFullDate= new Date(
        this.currentYear,
         this.currentMonth,
      num
      ).toDateString();
      const currentFullDate=new Date().toDateString();
      return calendarFullDate == currentFullDate ?
      "text-blue-500 hover:bg-blue-400 font-bold" : "";
    
     },
  },
  computed:{
  currentMonthName(){
      return new Date(
          this.currentYear,
          this.currentMonth
          ).toLocaleString("default",{
          month:"long"});
  },
  },
  };
  </script>
  
  <style>
  
  </style>