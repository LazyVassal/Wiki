<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  model: Object
})

const isOpen = ref(false)
const isFolder = computed(() => {
  return props.model.children && props.model.children.length
})

function toggle() {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <li>
    <div
      :class="{ bold: isFolder }"
      @click="toggle">
      {{ model.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <!--
        A component can recursively render itself using its
        "name" option (inferred from filename if using SFC)
      -->
      <TreeItem
        class="item"
        v-for="model in model.children"
        :model="model">
      </TreeItem>
    </ul>
  </li>
</template>