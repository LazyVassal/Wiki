<script lang='ts' setup>
import { ref } from 'vue'
const centerBlokArray = ref([
      "Из железного слитка можно сделать следующие вещи",,
  ])
const Data=ref([
  {
    name: 'Железный меч',
    set:'Ингридиенты',
    recept: 'Рецепт',
    opis: 'Описание'
  },
  {
    name: 'Железная кирка',
    set:'Ингридиенты',
    recept: 'Рецепт',
    opis: 'Описание'
  },
  {
    name: 'Железная лопата',
    set:'Ингридиенты',
    recept: 'Рецепт',
    opis: 'Описание'
  },
  {
    name: 'Железная мотыга',
    set:'Ингридиенты',
    recept: 'Рецепт',
    opis: 'Описание'
  },
  {
    name: 'Ножницы',
    set:'Ингридиенты',
    recept: 'Рецепт',
    opis: 'Описание'
  },
  {
    name: 'Железный блок',
    set:'Ингридиенты',
    recept: 'Рецепт',
    opis: 'Описание'
  },
  {
    name: 'Наковальня',
    set:'Ингридиенты',
    recept: 'Рецепт',
    opis: 'Описание'
  },
  {
    name: 'Ведро',
    set:'Ингридиенты',
    recept: 'Рецепт',
    opis: 'Описание'
  },

])
</script>
<template>
  <h2 class="zagSite">Рецепты</h2>
      <div class="centerReceptsBlok">
        <p v-for="item of centerBlokArray">{{item}}</p>
      </div>
      <table v-for="item of Data" class="stTable">
        <th>{{item.name}}</th>
        <tr>
          <td class="stolb1">{{item.set}}</td><td class="stolb2">{{item.recept}}</td><td class="stolb3">{{item.opis}}</td>
        </tr>
      </table>
</template>
<style>
.stTable{
  margin-left: 15%;
}
.stTable th{
  background-color: green;
  color: #fff;
}
.stTable td{
  line-height: 4.2ch;
}
.stolb1{
  width: 300px;
  min-width: 250px;
}
.stolb2{
  width: 350px;
  min-width: 300px;
}
.stolb3{
  width: 200px;
  min-width: 250px;
}
</style>