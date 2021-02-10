<template>
  <div class="home">
    <h1>Dashboard</h1><br />

<img src="../assets/dashboardimg.png" class="stockimg">

<p>Alle undersider er routed, men leder alle til Budgetter, pånær Dashboard, der er denne side. Dette er blot en placeholder, for at se at routing virker.</p>

  </div>
</template>

<script>
import { users } from "../assets/users";

export default {
  name: 'Home',
  setup() {
    return{
      users
    }
  }
}
</script>


<style lang="scss" scoped>
.home{
padding-left: 300px;
padding-top: 50px;
display: inline-block;

h1{
margin: 0;
}

.stockimg{
width: 800px;
}
}

</style>