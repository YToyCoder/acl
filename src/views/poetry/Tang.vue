<!-- import { PoetryTang } from '@/types/poetry' -->
<!-- import { defineComponent } from 'vue'; -->
<!-- export default defineComponent({ -->
<!--   name: 'Tang', -->
<!--   props: { -->
<!--   }, -->
<!--   render(){ -->
<!--     return ( -->
<!--       <p>{ this.poetry }</p> -->
<!--     ) -->
<!--   } -->
<!-- }) -->
<!---->

<script lang="ts" setup>
import { PoetryTang } from '@/types/poetry' 

const props = defineProps<{ poetry: PoetryTang }>()

</script>

<template>
  <div style="border: 1px solid ; border-radius: 5% ; width: 200px; padding: 10px 10px;">
    <p>{{ props.poetry.title }} </p>
    <p> {{ `${props.poetry.author} ${props.poetry.volume}`  }}</p>
    <span v-for="line in props.poetry.paragraphs">
    {{line}}
    </span>
  </div>
</template>