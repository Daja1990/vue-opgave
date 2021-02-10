<template>

  <div id="app">
    <nav v-show="$route.name!=='Admin'" >
      <router-link :to="{ name: 'Home' }">
      <div class="buffer">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="tachometer-alt-fastest" class="svg-inline--fa fa-tachometer-alt-fastest fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M400 240c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm-272 48c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm160-96c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm155.28 104.47l-101.87 20.38C329.96 299.49 310.35 288 288 288c-35.35 0-64 28.65-64 64 0 11.72 3.38 22.55 8.88 32h110.25c3.54-6.08 5.73-12.89 7.18-19.99l102.41-20.48c13-2.59 21.41-15.23 18.81-28.23s-15.31-21.61-28.25-18.83zM176 176c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zM288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm212.27 400H75.73C57.56 397.63 48 359.12 48 320 48 187.66 155.66 80 288 80s240 107.66 240 240c0 39.12-9.56 77.63-27.73 112z"></path></svg>
        <a>Dashboard</a>
      </div>
      </router-link>

      <router-link :to="{ name: 'BudgetPage' }">
        <div class="buffer">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="coins" class="svg-inline--fa fa-coins fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M320 0C214 0 128 35.8 128 80v52.6C53.5 143.6 0 173.2 0 208v224c0 44.2 86 80 192 80s192-35.8 192-80v-52.7c74.5-11 128-40.5 128-75.3V80c0-44.2-86-80-192-80zm16 428.3C326 440 275.6 464 192 464S58 440 48 428.3v-39.5c35.2 16.6 86.6 27.2 144 27.2s108.8-10.6 144-27.2v39.5zm0-96C326 344 275.6 368 192 368S58 344 48 332.3v-44.9c35.2 20 86.6 32.6 144 32.6s108.8-12.7 144-32.6v44.9zM192 272c-79.5 0-144-21.5-144-48s64.5-48 144-48 144 21.5 144 48-64.5 48-144 48zm272 28.3c-7.1 8.3-34.9 22.6-80 30.4V283c31-4.6 58.7-12.1 80-22.2v39.5zm0-96c-7.1 8.3-34.9 22.6-80 30.4V208c0-7.2-2.5-14.2-6.8-20.9 33.8-5.3 64-14.8 86.8-27.8v45zM320 144c-5 0-9.8-.3-14.7-.5-26-7.9-56.8-13.2-90.4-14.9C191 120 176 108.6 176 96c0-26.5 64.5-48 144-48s144 21.5 144 48-64.5 48-144 48z"></path></svg>
        <a>Budgetter</a>
        </div>
      </router-link>

      <router-link :to="{ name: 'BudgetPage' }">
        <div class="buffer">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-contract" class="svg-inline--fa fa-file-contract fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M196.66 363.33l-13.88-41.62c-3.28-9.81-12.44-16.41-22.78-16.41s-19.5 6.59-22.78 16.41L119 376.36c-1.5 4.58-5.78 7.64-10.59 7.64H96c-8.84 0-16 7.16-16 16s7.16 16 16 16h12.41c18.62 0 35.09-11.88 40.97-29.53L160 354.58l16.81 50.48a15.994 15.994 0 0 0 14.06 10.89c.38.03.75.05 1.12.05 6.03 0 11.59-3.41 14.31-8.86l7.66-15.33c2.78-5.59 7.94-6.19 10.03-6.19s7.25.59 10.19 6.53c7.38 14.7 22.19 23.84 38.62 23.84H288c8.84 0 16-7.16 16-16s-7.16-16-16-16h-15.19c-4.28 0-8.12-2.38-10.16-6.5-11.93-23.85-46.24-30.33-65.99-14.16zM369.83 97.98L285.94 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h287.94c26.5 0 48.07-21.5 48.07-47.99V131.97c0-12.69-5.17-24.99-14.17-33.99zM255.95 51.99l76.09 76.08h-76.09V51.99zM336 464.01H47.99V48.09h159.97v103.98c0 13.3 10.7 23.99 24 23.99H336v287.95zM88 112h80c4.42 0 8-3.58 8-8V88c0-4.42-3.58-8-8-8H88c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm0 64h80c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H88c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z"></path></svg>
        <a>Kontrakter</a>
        </div>
      </router-link>

      <router-link :to="{ name: 'BudgetPage' }">
        <div class="buffer">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-day" class="svg-inline--fa fa-calendar-day fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M112 368h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V160h352v298z"></path></svg>
        <a>Tidsplan</a>
        </div>
      </router-link>

      <router-link :to="{ name: 'BudgetPage' }">
        <div class="buffer">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="concierge-bell" class="svg-inline--fa fa-concierge-bell fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M496 400h-16v-48c0-112.82-83.49-205.89-192-221.46V112h48c8.84 0 16-7.16 16-16V80c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h48v18.54C115.49 146.11 32 239.18 32 352v48H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-64 0H80v-48c0-97.05 78.95-176 176-176s176 78.95 176 176v48z"></path></svg>
        <a>Spørgsmål</a>
        </div>
      </router-link>

      <div class="bottom-grid">
        <div class="imgone">
          <div class="circle">LP</div>
        </div>
        <div class="imgtwo">
          <img src="./assets/cog-regular.svg" class="navbar-svg">
        </div>
        <div class="imgthree">
          <img src="./assets/sign-out-alt-regular.svg" class="navbar-svg">
        </div>
      </div>
    </nav>
    <router-view />
  </div>

</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
import { users } from "./assets/users";

export default {
  name: 'App',
  setup() {
  
    const store = useStore();
    const user = computed(() => store.state.User.user);

return {
  user,
  users
    }
  }
}
</script>

<style lang="scss">
/* CSS Part */
#app {
font-family: 'Rajdhani';
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: $text-main;
height: 1080px;
background-color: $bg-main;


nav{
align-items: center;
justify-content: space-between;
background-color: $bg-cards;
color: #4A4A4A;
width: 240px;
height: 1040px;
margin: 20px;
display: inline-block;
border-radius: 25px;
position: absolute;
padding-top: 80px;

.buffer{
margin-bottom: 23px;
width: 210px;
height: 55px;
padding-top: 27px;
border-radius: 25px;
margin-left: 15px;

&:hover{
background-color: $bg-main;
color: $green;
}
}

a{
color: inherit;
text-decoration: none;
font-size: 18px;
}

svg{
width: 22px;
height: 18px;
padding-left: 23px;
padding-right: 35px;
vertical-align: top;
}

.navbar-svg{
width: 22px;
height: 18px;
padding-left: 23px;
padding-right: 35px;
vertical-align: top;
}


.bottom-grid{
display: grid;
grid-template-columns: repeat(3, auto);
position: absolute;
bottom: 0;
text-align: center;
padding-bottom: 38px;
}

img{
cursor: pointer;
}

img:hover{
opacity: 0.7;
}

.circle {
width: 20px;
height: 20px;
line-height: 21px;
border-radius: 50%;
font-size: 14px;
font-weight: bold;
color: $bg-main;
text-align: center;
background: $circle-color;
margin-left: 23px;
margin-right: 35px;
cursor: pointer;
}

.circle:hover{
opacity: 0.7;
}
}
@media screen and (max-width: 992px) {
  nav{
    padding-top: 20px;
    width: 140px;
    height: 650px;
    margin: 20px;
  .buffer{
    width: 90px;
    padding-left: 15px;
    border-radius: 25px;
}
  .bottom-grid{
    display: block;
    padding-left: 35px;
    
    img{
      padding-top: 20px;
    }
  }
  }
}
}



</style>
