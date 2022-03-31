<script lang='ts' setup>
  import { useStore } from '../store'
   
  const store =useStore()

</script>
<template>
  <h2 class="zagSite">Предметы</h2>
      <div class="centerItemBlok" v-for="item of store.treeData.children">
      <span v-if="item.children.length">
        <p class="tagItems" >{{item.name}}</p>
        <p class="tagItem" v-for="it of item.children">{{it.name}}</p>
        </span>
      </div>
     
</template>
<style>
.tagItems{
  padding-left: 1%;
  border-bottom: 2px solid;
  text-transform: bold;
  font-weight: bold;
}
.tagItem{
  padding-left: 3%;
}
.centerItemBlok{
  display: inline-block;
  text-align: left;
  padding: 10% 0% 0% -15%;
  margin-left: 7%;
  width:  32vh;
  height: auto;
}
</style>
