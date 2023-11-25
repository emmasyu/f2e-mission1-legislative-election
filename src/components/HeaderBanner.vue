<template>
  <div class="w-full h-screen box">
    <div class="w-full h-full relative flex justify-center items-center overflow-hidden">
      <img
        src="../assets/images/header-cat.svg"
        alt="header cat"
        class="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[-48px] max-sm:scale-[1.6] origin-bottom"
      />
      <img
        src="../assets/images/murr-financial-success.svg"
        alt="murr financial success"
        class="absolute z-10 sm:top-0 top-1/2 max-sm:-translate-y-1/2 mt-[72px] sm:ms-48 max-sm:scale-75"
      />
      <div
        class="z-20 text-primary font-serif font-bold pt-36 max-sm:self-start flex flex-col justify-between max-sm:h-full"
      >
        <p
          class="sm:text-6xl lg:text-[100px] xl:text-[120px] text-5xl whitespace-nowrap sm:flex text-center"
        >
          <span class="leading-normal">喵的未來</span
          ><span class="sm:indent-20 xl:indent-52 block leading-normal">人的希望</span>
        </p>
        <h2 class="text-[40px] lg:text-5xl text-center max-sm:pb-60">
          喵立翰
          <span class="font-gaegu font-normal text-6xl lg:text-7xl max-sm:block leading-none"
            >Miao Li-Han</span
          >
        </h2>
      </div>
      <BannerItemsGroup />
    </div>
  </div>
</template>

<script setup lang="ts">
import BannerItemsGroup from './header/BannerItemsGroup.vue'
</script>

<style scoped>
.box {
  transform: translate(0%, 0%);
  background: repeating-conic-gradient(#ffe9c3 0 12.857deg, #fbf3cd 0 25.7deg);
}
</style>
