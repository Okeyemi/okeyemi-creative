<template>
<section class="flex w-full mt-5">
    <div class="m-auto border rounded shadow-md">
        <div class="head">
            <button>APPLICATION FORM</button>
        </div>
  <!-- .prevent prevents the page from reloading after sunmitting, only shows in the console -->
  <form @submit.prevent="handleSubmit">
      <label>Email</label>
      <input class="border shadow" type="email" required v-model="email" placeholder="Enter your email">

       <label>Password</label>
      <input class="border shadow" type="password" required v-model="password" placeholder="Enter password">
      <div v-if="passwordError" class="error">{{ passwordError}}</div>

      <label>Role:</label>
      <select class="border shadow" v-model="role">
          <!-- <option value="">Select</option> -->
          <option value="developer">Web Developer</option>
          <option value="developer">Full stack</option>
          <option value="designer">Web designer</option>
          <option value="designer">Back-End Developer</option>
      </select>

        <label>Skills</label>
        <input class="border shadow" type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <!-- you could also use keypress or keydown -->
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{ skill }}</span>
            <!-- always have a key property whenever you use the v-for directive -->
        </div>


        <div class="terms">
            <input type="checkbox" v-model="terms" required>
                   <label>Accept terms and conditions</label>
        </div>

        
        <div class="submit">
            <button class="hover:bg-red-500">Submit</button>
        </div> 

        <footer class="footer p-1 m">Powered by okeyemicreative</footer>
  </form>
<div class="output">
       <p>Email: {{email}}</p>
       <p>Password: {{password}}</p>
       <p>Role: {{ role }}</p>
       <p>Terms accepted: {{ terms }}</p>
       <!-- <p>Names: {{names}}</p> -->
</div>
</div>
</section>
</template>

<script>
export default {
 name: 'SignupForm',
 data() {
     return {
         email: '',
         password: '',
         role: '',
         terms: false,
         names: [],
         tempSkill: [],
         skills: [],
         passwordError: ''
     }
 },
 methods: {
     addSkill(e) {
        //  e = event object
        if (e.key === ',' && this.tempSkill) {
            if (!this.skills.includes(this.tempSkill )) {
                this.skills.push(this.tempSkill)
            }
            this.tempSkill = ''
        }
     },
     deleteSkill(skill) {
         this.skills = this.skills.filter((item) => {
             return skill !== item
         })
         },
    handleSubmit() {
        // validate password
       this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 characters long'
       if(!this.passwordError) {
           console.log('email: ', this.email)
           console.log('password: ', this.password)
           console.log('role: ', this.role)
           console.log('skills: ', this.skills)
           console.log('terms accepted: ', this.terms)
       }
    }
     }
 }
</script>

<style scoped>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    margin-top: 3px;
}
input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    color: #555;
}
input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    /* border-radius makes it rounded at the corners */
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 10px;
    font-weight: bold;
}
.submit, .head {
    text-align: center;
}
.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
.output {
    text-align: center;
    /* font-display: inherit; */
    color: #0b6dff;
    font-weight: bold;
}
.footer {
    text-align: center;
    font-size: 11px;
    color: darkgray;
    margin-bottom: -20px;
    /* margin-left: -20px; */
}
</style>
