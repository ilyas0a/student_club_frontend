<template>
  <div class="container xl:max-w-6xl mx-auto px-4 py-10 lg:px-8">
    <div class="max-w-2xl mb-10 lg:mb-14">
      <h2 class="text-xl font-bold md:text-2xl">
        الأندية الأكثر تفاعلاً
      </h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <a v-for="(club, index) in clubs" :key="index"
        class="group flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-md transition" :href="club.link">
        <div class="p-4 md:p-5">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img class="h-[2.375rem] w-[2.375rem] rounded-full" :src="club.image" alt="Image Description">
              <div class="mr-3">
                <h3 class="group-hover:text-primary font-semibold text-gray-800 flex items-center">
                  {{ club.name }} - <span class="text-xs font-light">{{ club.university }}</span>
                </h3>
              </div>
            </div>
            <div class="pr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-gray-600 group-hover:text-primary">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>


            </div>
          </div>
        </div>
      </a>

    </div>


    <div class="mt-12 text-center">
      <a href="/clubs"
        class="inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-primary hover:text-indigo-700 font-medium hover:shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4">
        عرض جميع الأندية
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>


      </a>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
// const clubs = ref([])
// onMounted(async () => {
//   try {
//       const response = await axios.get('https://backend-students-club.herokuapp.com/api/users?filters[type][$eq]=club&populate=*')
//       clubs.value = response.data
//       console.log(response.data)
//     } catch (error) {
      
//     }
// })

const clubs = ref([
{
    name: 'نادي الأعمال',
    image: 'https://pbs.twimg.com/profile_images/1498376044990152711/1Ry0P1zr_400x400.jpg',
    university : 'جامعة الملك خالد',
    link: '/club/code'
  },
  {
    name: 'نادي البرمجة',
    image: 'https://cdnjobs.net/cached_uploads/full/2018/08/09/38857374-457031601460620-559854128109453312-o-1533795387.jpg',
    university : 'جامعة الملك خالد',
    link: '/club/code'
  },
  {
    name: 'نادي الهندسة',
    image: 'https://pbs.twimg.com/profile_images/1634498898029838336/71NtMKaK_400x400.jpg',
    university : 'جامعة الملك خالد',
    link: '/club/code'
  },
  {
    name: 'نادي الإبداع',
    image: 'https://pbs.twimg.com/profile_images/1614200792692539394/clbPRhWt_400x400.jpg',
    university : 'جامعة الملك فيصل',
    link: '/club/code'
  }
]);


</script>