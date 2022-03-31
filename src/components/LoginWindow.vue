<script lang='ts' setup>
  import { ref } from 'vue'
  import { useStore } from '../store'
  const id = 1, pos = 1;
  const textBoxNew = ref([
      {id: 1, sod: '', position: 1},
  ])
  const recepts = ref([
      {name: 'Название', ingred:'Ингредиенты',rec: 'Рецепт', opis: 'Описание'},
      ])
const store =useStore()
  function loginEnter() {
    if (store.userlog == store.nikLog && store.userpass ==  store.nikpass){
      store.log = false;
      store.st = true;
      alert('Вы вошли на сайт под ником '+store.nikLog);
    }else {
      alert('Неверный логин/пароль');
    }
  }
  function exitUser(){
    alert('Вы вышли с сайта')
    store.userlog = '';
    store.userpass = '';
    store.st =false;
    store.log = true;
  }
  function regestr(){
    store.log = !store.log
    store.reg = !store.reg
  }
  function sortArrUp(item: any){
    var key = item.id;
    if (textBoxNew.value.length >2 && key != 1){
        textBoxNew.value[key].position--;
        textBoxNew.value[key-1].position++;
        textBoxNew.value.sort(( a, b ) => a.position - b.position);
    }
    console.log(textBoxNew.value)
  }
  function sortArrDuwn(item: any){
    var key = item.id;
    if (textBoxNew.value.length >2 && key !=textBoxNew.value.length){
        textBoxNew.value[key].position++;
        textBoxNew.value[key+1].position--;
        textBoxNew.value.sort(( a, b ) => a.position - b.position);
    }
    console.log(textBoxNew.value)
  }
</script>
<template>
   <div class="loginPage" v-if="store.log">
    <h3>Вход</h3>
      <input type="text" name="login" v-model="store.userlog" placeholder="Логин">
      <label for="login">Логин</label>
      <br>
      <input type="password" name="pass" v-model="store.userpass" placeholder="Пароль">
      <label for="pass">Пароль</label>
      <br>
      <button @click="loginEnter">Войти</button>
      <button @click="regestr">Зарегестрироваться</button>
    </div>
    <div class="loginPage" v-if="store.reg">
        <h3>Регестрация</h3>
      <input type="text" name="nick" placeholder="Ник">
      <label for="nick">Ник</label>
      <input type="text" name="login" placeholder="Логин">
      <label for="login">Логин</label>
      <br>
      <input type="password" name="pass" placeholder="Пароль">
      <label for="pass">Пароль</label>
      <br>
      <button>Зарегестрироваться</button>
      <button @click="regestr">Назад</button>
    </div>
    <div v-if="store.st" class="userState">
        <p>Ник:  {{store.nikLog}}</p>
        <p>Логин: {{store.nikLog}}</p>
        <button @click="store.creatSt = !store.creatSt">Написать статью</button><br>
        <button @click="exitUser" v-if="store.userlog == store.nikLog && store.userpass ==  store.nikpass && store.st">Выйти</button>
    </div>
    <div class="creatSt" v-if="store.creatSt">
        <input type="text" name="zag" placeholder="Zag" tabindex="1">
            <label for="zag"> - укажите название статьи</label>
        <input type="text"  list="tagsItems" name="tagSt" placeholder="tag" tabindex="2">
            <label for="tagSt"> - выберете тег</label><br>
        <datalist id="tagsItems">
            <option v-for="item of store.treeData.children">{{item.name}}</option>
        </datalist> 
        <input type="text" name="imgSrc" placeholder="img" tabindex="4">
            <label for="imgSrc"> - Добавьте ссылку на картинку</label><br>
            <table>
        <span v-for="item of textBoxNew">
        <tr><td>
            <textarea placeholder="Textbox" v-model="item.sod"></textarea>
        </td>
        <td><button @click="sortArrDuwn(item)">Вверх</button></td>
         <td><button @click="sortArrUp(item)">Вниз</button></td>
        </tr>
        </span>
        </table>
        <button @click="textBoxNew.push({id: ++id, sod: '', position: ++pos},)">Добавить  абзац</button>
        <button @click="textBoxNew.pop()">Удалить абзац</button>
        <h3>Рецепты</h3>
        <table>
            <span v-for="item of recepts">
                <th><input type="text" v-model="item.name"></th>
                <tr>
                    <td class=""><input type="text" v-model="item.ingred"></td>
                    <td class=""><input type="text" v-model="item.rec"></td>
                    <td class=""><input type="text" v-model="item.opis"></td>
                </tr>
            </span>
        </table>
        <button @click="recepts.push({name: 'Название', ingred:'Ингредиенты',rec: 'Рецепт', opis: 'Описание'},)">Добавить рецепт</button>
          <button @click="recepts.pop()">Удалить рецепт</button><br>
        <button class="creatSt-btn">Создать статью</button>
    </div>
</template>
<style>
.creatSt-btn{
    margin-left: 80%;
}
</style>