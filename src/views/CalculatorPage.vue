<template>
  <section class="flex w-full mt-20" >
    <div class="m-auto">
      <h1 class="text-2xl text-center mt-10 mb-16 border rounded shadow-md px-1 hover:bg-blue-600 hover:text-white font-bold font-serif"> CALCULATOR</h1> 
      <p class="text-3xl text-right mt-10 w-41 h-13  overflow-x-scroll"
      style="direction:rtl"
      >
      {{ currentNum }}</p>
      <div class="h-7">
        <small v-if="selectedOperation">{{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small>
      </div>

   <div class="grid grid-cols-4 gap-5 border rounded shadow-md p-2">
     <button @click="pressed('1')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">1</button>
     <button @click="pressed('2')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">2</button>
     <button @click="pressed('3')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">3</button>
     <button @click="pressed('+')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">+ </button>
     <button @click="pressed('4')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">4</button>
     <button @click="pressed('5')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">5</button>
     <button @click="pressed('6')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">6</button>
     <button @click="pressed('-')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">-</button>
     <button @click="pressed('7')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">7</button>
     <button @click="pressed('8')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">8</button>
     <button @click="pressed('9')"  class="px-2 w-10 h-10 border rounded shadow hover:bg-blue-600 hover:text-white">9</button>
     <button @click="pressed('*')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">*</button>
     <button @click="pressed('C')" class="p-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">C</button>
     <button @click="pressed('0')" class="p-2 w-10 h-10 border rounded shado  hover:bg-blue-600 hover:text-white">0</button>
     <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">=</button> 
    <button @click="pressed('/')" class="px-2 w-10 h-10 border rounded shadow  hover:bg-blue-600 hover:text-white">/</button>
    </div>
    <footer class="m-7  text-center font-mono  hover:text-red-500">
      <a href="mailto:okeyemicreative@gmail.com">Powered by okeyemicreative</a>
    </footer>  
    </div>

  </section>
  
</template>

<script>
import {onMounted, onUnmounted, ref} from 'vue'
export default { 
setup(){
const operations= ["+", "-", "*", "/"];
const numbers = ['1','2','3','4','5','6','7','8','9','0' ]
const currentNum = ref("");
const prevNum = ref("");
const selectedOperation =ref("");

 
function pressed(value){
  if (value == "=" || value == "Enter") calculate();
  else if (value == "C") clear();
  else if (operations.includes(value)) applyOperation(value);
  else if(numbers.includes(value))appendNumber(value);
}

function appendNumber(value){
currentNum.value = currentNum.value + value; 
}

function applyOperation(value){
  calculate();
  prevNum.value = currentNum.value;
  currentNum.value = "";
  selectedOperation.value = value;
}

function calculate() {
  if(selectedOperation.value == "*") multiply();
  else if(selectedOperation.value == "/") divide();
  else if(selectedOperation.value == "-") subtract();
  else if(selectedOperation.value == "+") sum();

  prevNum.value= "";
  selectedOperation.value= "";
}
function multiply(){
  currentNum.value = prevNum.value * currentNum.value;
}
function divide(){
  currentNum.value = prevNum.value / currentNum.value;
}
function subtract(){
  currentNum.value = prevNum.value - currentNum.value;
}
function sum(){
  currentNum.value =  + prevNum.value + +currentNum.value;
}
function clear(){
  currentNum.value ="";
}

function handlekeydown(e) {
  pressed(e.key)
}

onMounted(() => window.addEventListener("keydown", handlekeydown));
onUnmounted(() =>  window.removeEventListener("keydown", handlekeydown));

return { currentNum, pressed, selectedOperation, prevNum};
},
};
</script>

<style>

</style>