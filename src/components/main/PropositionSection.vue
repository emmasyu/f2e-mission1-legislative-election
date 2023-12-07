<template>
  <div class="relative pt-40 pb-24 px-8 text-center min-h-screen" id="proposition">
    <h3 class="font-serif font-bold text-[40px] md:text-5xl text-primary mb-5">
      喵立翰<span class="font-gaegu text-5xl md:text-7xl font-normal max-sm:block">
        Miao Li-Han</span
      >
    </h3>
    <p class="md:text-xl mb-8 md:mb-5 leading-normal">
      我堅信，藉由<span class="text-primary">推動更完善的貓咪福利和相關政策</span
      >，更是間接地投資於台灣的未來。<br />
      畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。<br class="max-sm:hidden" />
      透過完善的貓咪福利政策，為台灣的 GDP 經濟帶來巨大效益。<br />
      因此，我期望能在立法院內推進這些政策，<span class="text-primary"
        >確保每一隻貓咪都能得到他們應有的照顧</span
      >，<br />
      同時也為台灣的經濟發展助一臂之力。
    </p>
    <p class="text-xl md:text-[28px] font-bold text-primary">
      讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始！
    </p>
    <div class="">
      <div class="overflow-hidden">
        <span
          class="opacity-60 leading-none text-8xl sm:text-[160px] lg:text-[240px] font-bold text-[#AAFBD6] block skew-x-[40deg] -rotate-6 -skew-y-[8deg] scale-y-75 vote-shadow"
          >VOTE<br />MIAO</span
        >
      </div>
      <div class="absolute w-full h-[50%] left-0 bottom-0 -mb-7 z-10">
        <div class="relative h-full overflow-hidden pt-20">
          <img
            src="@/assets/images/ballot.png"
            alt="vote"
            class="absolute scale-50 md:scale-75 lg:scale-100 rotate-45 left-1/2 -translate-x-1/2 vote"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'
gsap.registerPlugin(ScrollTrigger)

let mm = gsap.matchMedia()
let tl = gsap.timeline()
mm.add({
  isLg: `(min-width: 1024px)`,
  isMd: `(max-width: 1023px)`,
  reduceMotion: '(prefers-reduced-motion: reduce)'
}, (context) =>{
  const { isLg } = context.conditions as { [key: string]: boolean }
  onMounted(() => {
    tl.from('.vote', {
      x: '-50%'
    })
    tl.to('.vote', {
      y: isLg ? '40vh' : '35vh',
      rotate: 55,
      ease: 'power1.out',
      force3D: false,
      scrollTrigger: {
        trigger: '#proposition',
        start: 'top top',
        end: '100%-=300px top',
        scrub: true,
      }
    })
  })
})
// onMounted(() => {
//   let tl = gsap.timeline()
//   tl.from('.vote', {
//     x: '-50%'
//   })
//   tl.to('.vote', {
//     y: '200%',
//     rotate: 55,
//     ease: 'power1.out',
//     force3D: false,
//     scrollTrigger: {
//       trigger: '#proposition',
//       start: 'top top',
//       end: '100%-=300px top',
//       scrub: true,
//     }
//   })
// })
</script>

<style scoped>
.vote-shadow {
  text-shadow:
    2px 2px 0 #00a199,
    2px -2px 0 #00a199,
    -2px 2px 0 #00a199,
    -2px -2px 0 #00a199;
}
</style>
