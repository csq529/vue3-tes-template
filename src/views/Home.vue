<template>
  <el-button @click="test">测试</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getMenu } from '@/service/api/menu'

export default defineComponent({
  setup() {
    const test = async () => {
      let params: object = {
        userId: 88884440
      }
      await getMenu(params).then((res: any) => {
        console.log(res.data);
      });
    };
    return { test };
  },
});
</script>

<style>
</style>
