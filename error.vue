<script setup>
 const error = useError();
</script>
<template>
  <div class="flex h-screen justify-center items-center flex-col ">
    <div class="text-8xl color-red-800 text-rose-700 mb-3">Error {{ error.statusCode }}</div>
    <div class="text-fuchsia-900 text-3xl mb-3">{{ error.message }}</div>
    <NuxtLink to="/" class="bg-red-200 text-violet-700 p-1 rounded cursor-pointer">Go Back</NuxtLink>
    <div style="margin:20px;display: flex; flex-direction: column; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); width: 250px;height:200px;justify-content: center;text-align: center">
      <div style="font-weight: bold; margin-bottom: 20px">Card 1</div>
      <div style="margin-bottom: 10px;">Some text</div>
      <div style="margin-bottom: 10px;">Some text</div>
    </div>
  </div>

</template>