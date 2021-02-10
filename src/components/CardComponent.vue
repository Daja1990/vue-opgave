<template>

<div>
    <div class="main-grid">

        <div class="gridOne grid-style">
          <div className="label bold-name kladdelabel"><p>Kladde</p></div>
            <div class="grid-wrapper">
                <h3><img src="../assets/paperclip-regular.svg">{{state.user[0].info.details[0].firmName}}</h3>
                <p>{{state.user[0].info.details[0].businessReview}}</p>
                <div class="inner-card-grid">
                  <div class="text-data">
                <p class="bold-name">{{state.user[0].info.details[0].ownerName}}</p>
                <p>{{state.user[0].info.details[0].ownerEmail}}</p>
                </div>
                <div class="numbers-data">
                <p class="green-txt">Fast pris</p>
                <p class="price-number">{{state.user[0].info.details[0].priceTarget}}</p>
                </div>
                </div>
                <p>{{state.user[0].info.details[0].ownerNumber}}</p>

                <button class="send-contract">Send Kontrakt</button>
                </div>
        </div>

      <div class="gridTwo grid-style">
          <div className="label bold-name sendtlabel"><p>Kladde</p></div>
            <div class="grid-wrapper">
                <h3><img src="../assets/paperclip-regular.svg">{{state.user[1].info.details[0].firmName}}</h3>
                <p>{{state.user[1].info.details[0].businessReview}}</p>
                <div class="inner-card-grid">
                  <div class="text-data">
                <p class="bold-name">{{state.user[1].info.details[0].ownerName}}</p>
                <p>{{state.user[1].info.details[0].ownerEmail}}</p>
                </div>
                <div class="numbers-data">
                <p class="green-txt">Fast pris</p>
                <p class="price-number">{{state.user[1].info.details[0].priceTarget}}</p>
                </div>
                </div>
                <p>{{state.user[1].info.details[0].ownerNumber}}</p>

                </div>
        </div>
                <div class="gridThree grid-style">
          <div className="label bold-name sendtlabel"><p>Kladde</p></div>
            <div class="grid-wrapper">
                <h3><img src="../assets/paperclip-regular.svg">{{state.user[1].info.details[1].firmName}}</h3>
                <p>{{state.user[1].info.details[1].businessReview}}</p>
                <div class="inner-card-grid">
                  <div class="text-data">
                <p class="bold-name">{{state.user[1].info.details[1].ownerName}}</p>
                <p>{{state.user[1].info.details[1].ownerEmail}}</p>
                </div>
                <div class="numbers-data">
                <p class="green-txt">Fast pris</p>
                <p class="price-number">{{state.user[1].info.details[1].priceTarget}}</p>
                </div>
                </div>
                <p>{{state.user[1].info.details[1].ownerNumber}}</p>

                </div>
        </div>
        <div class="gridFour grid-style">
          <div className="label bold-name acceptlabel"><p>Accepteret</p></div>
            <div class="grid-wrapper">
                <h3><img src="../assets/paperclip-regular.svg">{{state.user[2].info.details[0].firmName}}</h3>
                <p>{{state.user[2].info.details[0].businessReview}}</p>
                <div class="inner-card-grid">
                  <div class="text-data">
                <p class="bold-name">{{state.user[2].info.details[0].ownerName}}</p>
                <p>{{state.user[2].info.details[0].ownerEmail}}</p>
                </div>
                <div class="numbers-data">
                <p class="green-txt">Fast pris</p>
                <p class="price-number">{{state.user[2].info.details[0].priceTarget}}</p>
                </div>
                </div>
                <p>{{state.user[2].info.details[0].ownerNumber}}</p>

                </div>
        </div>
                <div class="gridFive grid-style">
          <div className="label bold-name revisionlabel"><p>anmodede om revision</p></div>
            <div class="grid-wrapper">
                <h3><img src="../assets/paperclip-regular.svg">{{state.user[3].info.details[0].firmName}}</h3>
                <p>{{state.user[3].info.details[0].businessReview}}</p>
                <div class="inner-card-grid">
                  <div class="text-data">
                <p class="bold-name">{{state.user[3].info.details[0].ownerName}}</p>
                <p>{{state.user[3].info.details[0].ownerEmail}}</p>
                </div>
                <div class="numbers-data">
                <p class="green-txt">Fast pris</p>
                <p class="price-number">{{state.user[3].info.details[0].priceTarget}}</p>
                </div>
                </div>
                <p>{{state.user[3].info.details[0].ownerNumber}}</p>

                </div>
        </div>
                <div class="gridSix grid-style">
          <div className="label bold-name revisionlabel"><p>anmodede om revision</p></div>
            <div class="grid-wrapper">
                <h3><img src="../assets/paperclip-regular.svg">{{state.user[3].info.details[1].firmName}}</h3>
                <p>{{state.user[3].info.details[1].businessReview}}</p>
                <div class="inner-card-grid">
                  <div class="text-data">
                <p class="bold-name">{{state.user[3].info.details[1].ownerName}}</p>
                <p>{{state.user[3].info.details[1].ownerEmail}}</p>
                </div>
                <div class="numbers-data">
                <p class="green-txt">Fast pris</p>
                <p class="price-number">{{state.user[3].info.details[1].priceTarget}}</p>
                </div>
                </div>
                <p>{{state.user[3].info.details[1].ownerNumber}}</p>

                </div>
        </div>

                <div class="gridSeven grid-style">
          <div className="label bold-name revisionlabel"><p>anmodede om revision</p></div>
            <div class="grid-wrapper">
                <h3><img src="../assets/paperclip-regular.svg">{{state.user[3].info.details[2].firmName}}</h3>
                <p>{{state.user[3].info.details[2].businessReview}}</p>
                <div class="inner-card-grid">
                  <div class="text-data">
                <p class="bold-name">{{state.user[3].info.details[2].ownerName}}</p>
                <p>{{state.user[3].info.details[2].ownerEmail}}</p>
                </div>
                <div class="numbers-data">
                <p class="green-txt">Fast pris</p>
                <p class="price-number">{{state.user[3].info.details[2].priceTarget}}</p>
                </div>
                </div>
                <p>{{state.user[3].info.details[2].ownerNumber}}</p>
                </div>
        </div>
  </div>

  <button class="add-button"><img src="../assets/plus-regular.svg" class="plus-svg"></button>

</div>


</template>

<script>
import { reactive } from 'vue';
import { users } from "../assets/users";

export default {
  // Export data for component
    name: 'CardComponent',
    props:{
        msg: String
    },
        setup() {

        const state = reactive ({
            // Assigning name from users "fetched" array
            user: users
        })

    return {
        state,
        users
    }
    }
};
    

</script>

<style lang="scss" scoped>

.main-grid{
display: grid;
margin: 50px;
grid-gap: 30px;
grid-template-areas: 
  "gridone gridtwo gridfour gridfive"
  ". gridthree . gridsix"
  ". . . gridseven";

.grid-wrapper{
padding: 0 24px 24px 24px;
}

.grid-style{
background-color: $bg-cards;
border-radius: 25px;
height: auto;
width: 360px;
}

// Grid components

.gridOne{

grid-area: gridone;
}

.gridTwo{
grid-area: gridtwo;
}

.gridThree{
grid-area: gridthree;
}

.gridFour{
grid-area: gridfour;
}

.gridFive{
grid-area: gridfive;
}

.gridSix{
grid-area: gridsix;
}

.gridSeven{
grid-area: gridseven;
}

// Grid components end

// Label begin

.label{
width: 150px;
height: 30px;
line-height: 30px;
border-radius: 25px;
text-align: center;
margin-left: auto; 
margin-right: 0;
margin-top: -15px;
text-transform: uppercase;
}

.kladdelabel{
background-color: $bg-kladde;
}

.sendtlabel{
background-color: $bg-sendt;
color: $text-sendt;
}

.acceptlabel{
background-color: $bg-accept;
color: $green;
}

.revisionlabel{
background-color: $bg-revision;
color: $text-revision;
width: 200px;
}

// Label end

// Button begin

.send-contract{
background-color: $green;
color: white;
width: 200px;
height: 38px;
border-radius: 25px;
border: none;
cursor: pointer;
text-align: center;
margin-left: 110px;
transition: 0.3s;

&:focus{
outline: 0;
}

&:hover{
opacity: 0.5;
}
}

// Button end

img{
width: 12.5px;
height: 14px;
display: inline;
padding-right: 10px;
}

.inner-card-grid{
display: grid;
grid-template-columns: auto auto;
padding-top: 15px;
}

// Card text styling

p{
margin: 0;
padding: 0;
}

.green-txt{
color: $green;
text-align: right;
text-transform: uppercase;
}

.price-number{
font-size: 20px;
text-align: right;
}

.bold-name{
font-weight: bold;
}
}

// Plus button

.add-button{
width: 80px;
height: 60px;
background-color: $green;
border-radius: 25px;
cursor: pointer;
border: none;
display: inline-block;
vertical-align: left;
margin-left: 1500px;

&:focus{
outline: 0;
}

&:hover{
opacity: 0.5;
}

.plus-svg{
width: 40px;
height: 40px;
padding: 0;
margin: 0;
}
}

@media(max-width: 1500px){
.main-grid{
grid-template-areas: 
  "gridone gridtwo" 
  "gridfour gridthree"
  "gridfive gridsix"
  "gridseven .";
  }
  .add-button{
margin-left: 62vw;
  }
}

@media(max-width: 1200px){
.main-grid{
grid-template-areas: 
  "gridone"
  "gridtwo" 
  "gridthree"
  "gridfour"
  "gridfive" 
  "gridsix"
  "gridseven";
  margin-left: 25%;
  }
  .add-button{
margin-left: 50vw;
  }
}
</style>