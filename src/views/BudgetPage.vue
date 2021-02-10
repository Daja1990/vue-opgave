<template>

    <div class="wrap-push">
      <h1>Kontrakter</h1>
      <section>
        <CardComponent />
      </section>
    </div>
    
</template>

<script>
import { users } from "../assets/users";
import CardComponent from "../components/CardComponent";

export default {
    name: "BudgetPage",
    components: {
      CardComponent
    },

    setup() {
      
      return {
        users
      }
    }
};
</script>

<style lang="scss" scoped>

.wrap-push {
padding-left: 270px;

h1{
font-size: 56px;
font-weight: 600;
padding-left: 50px;
margin: 0;
padding-bottom: 45px;
padding-top: 90px;
}
}

@media screen and (max-width: 992px) {
.wrap-push {
padding-left: 130px;
}
}
</style>