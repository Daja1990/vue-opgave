<template>

    <div class="admin">
        <nav>
        </nav>

    <section class="login-section">

            <h2>Log Ind</h2>
            <form id="idForm" method="GET" action="">
                <input class="mail" type="text" placeholder="E-mail" required/><br/>
                <input class="pswrd" type="pswrd" placeholder="Adgangskode" required/><br/>
                <router-link :to="{ name: 'BudgetPage' }">
                <button class="button">
                Log Ind
                </button>
                </router-link>
            </form>

                </section>
    </div>

</template>

<script>

export default {
name: "Admin"
}

</script>

<style lang="scss" scoped>

nav{
align-items: center;
justify-content: space-between;
background-color: $bg-cards;
color: #4A4A4A;
width: 240px;
height: 70vh;
margin: 20px;
display: inline-block;
border-radius: 25px;
position: absolute;
padding-top: 80px;
}

.login-section{
padding-left: 585px;
padding-top: 270px;
}

h2{
font-size: 56px;
font-weight: 600;
padding: 0;
margin: 0;
padding-bottom: 80px;
}

input{
width: 360px;
height: 60px;
border-radius: 20px;
margin-bottom: 20px;
border: 0.1px solid $bg-cards;
color: black;
padding-left: 20px;
}

input:focus, textarea:focus, select:focus{
outline: none;
border: 1px solid $green;

}

input::placeholder{
color: $text-placeholder;
}


.button{
width: 280px;
height: 60px;
background-color: $green;
border-radius: 25px;
cursor: pointer;
border: none;
font-family: 'Rajdhani';
font-size: 18px;
color: $bg-main;
opacity: 0.2;
}

#idForm:valid .button {
opacity: 1;
}

</style>