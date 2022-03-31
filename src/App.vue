<script lang='ts' setup>
  import { useStore } from './store'
  import TreeItem from './components/TreeItem.vue';
   
  const store =useStore()
</script>
<template>
    <div class="logo"></div>
    <div class="menu">
     <ul>
       <li><router-link to="/">Главная</router-link></li>
       <li><router-link to="/items">Предметы</router-link></li>
       <!-- <li><router-link to="/blocks">Bloks</router-link></li> -->
       <li><router-link to="/recepes">Рецепты</router-link></li>
       <li><router-link to="/about">О предмете</router-link></li>
       <li v-if="store.userlog == store.nikLog && store.userpass ==  store.nikpass && store.st && !store.log" class="fix">
       <router-link to="/loginWindow">{{store.nikLog}}</router-link>
    </li>
    <li v-if="store.log  || !store.st"><router-link to="/loginWindow">Аккаунт</router-link></li>
      </ul>
    </div>
    <ul class="mainUl">
        <li class="mainLi">
          <div class="subMenu">
            <ul>
              <TreeItem class="item" :model="store.treeData"></TreeItem>
            </ul>
         </div>
        </li>
        </ul>
    <div class="mainBody">
      <router-view></router-view>
    </div>
    <div class="footer"><p>@Все права не защищены</p></div>
</template>

<style>
.text {
  line-height: 1.5;
}
body {
  margin: 0px;
  padding: 0px;
  background: url('./assets/fonBody.jpeg');
  background-size: 100%;
}
.menu{
  height: 7ch;
  width: 100%;
  background-color: #2c3e50;
  padding-top: 0.5%;
}
.menu ul{
  list-style: none;
  margin-left: -3%;
}
.menu li {
  display: inline;
  padding-left: 10%;
  font-size: 2.2vh;
}
.menu a {
  outline: none;
  text-decoration: none;
  color: #fff;
  
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.logo{
  height: 12ch;
  width: 100%;
  background: url('./assets/logo.jpeg' ) no-repeat;
  background-size: 100%;
  background-position: 50% 52%;
  margin: 0%;
}
.mainBody{
  margin: 2.1% 30% 2% 5%;
  background: white;
  width: 70%;
  min-height: 55vh;
  height: auto;
  padding-bottom: 10%;
}
.mainUl {
  list-style: none;
}
.mainLi {
  display: inline;
}
.subMenu{
  position: absolute;
  background-color: #fff;
  width: 16%;
  height: auto;
  margin: 1.3% 0% 0% 74%;
  padding: 1%;

}
.zagSite{
  padding-top: 5%;
  padding-bottom: 3%;
  text-align: center;
}
.zagPlot{
  margin-left: 20%; 
}
.centerReceptBlok{
  text-align: left;
  padding: 10% 0% 0% -15%;
  margin-left: 7%;
  margin-top: -12%;
  width: 420px;
  height: 300px;
  display: block;
}
.centerBlok{
  text-align: left;
  padding: 10% 0% 0% -15%;
  margin-left: 7%;
  width: 420px;
  height: auto;
}
.centerReceptsBlok{
  text-align: center;
  padding: 10% 0% 0% -15%;
  margin-left: 32%;
  margin-bottom: 5%;
  width: 420px;
  height: auto;
}
.leftReceptBlok{
  margin-left: 7.6%;
  text-align: left;
  width: 35%;
  margin-top: 1%;
}
.leftBlok{
  margin-left: 7.6%;
  text-align: left;
  width: 35%;
}
.leftimg{
  margin-left: 15%;
  margin-top: 5%;
}
.rightReceptBlok{
  margin-left: 52%;
  margin-top: -10%;
  text-align: left;
  width: 40%;
}
.rightBlok{
  margin-left: 52%;
  margin-top: -12.24%;
  text-align: left;
  width: 40%;
}
.withImg{
  margin-top: -20%;
}
.imgRecept{
  margin-left: 56%;
  margin-top: 2%;
}
.footer{
  background-color: #2c3e50;
  height: 6ch;
  width: 100%;
  font-size: 12px;
}
.footer p {
  color: #fff;
  text-align: center;
  padding-top: 1%;
}
.loginPage{
  width: 32vh;
  height: 50%;
  margin-left: 40%;
  padding: 3%;
}
.loginPage input{
  margin-top: 5%;
}
.loginPage button{
  margin-top: 5%;
}
.loginPage label{
  margin-left: 2%;
}
.userState{
  width: 32vh;
  height: 50%;
  margin-left: 40%;
  padding: 3%;
}
.table{
  display: block;
  margin-top: 5%;
  padding: 0% 10%;
  width: auto;
}
.tablP{
  background-color:darkgray;
}
.table span{
  padding: 0% 6%;
}
.logoImg{
  width: 320px;
  margin-left: 60%;
  margin-top: 1%;
}
.fixUp{
  margin-top: -42%;
}
.fix{
  padding-left: 3%;
}
.fix p{
  padding: 0%;
}
.hidden {
  opacity: 0;
}
.item {
  cursor: pointer;
  line-height: 1.1;
}
.creatSt{
  background-color: gray;
  padding: 2%;
  margin-left: 30%;
  display: block;
  width: 55vh;
  border-radius: 3%;
}
</style>
