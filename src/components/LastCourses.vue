<template>
  <div class="container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 ">
    <div class="max-w-2xl mb-10 lg:mb-14">
      <h2 class="text-xl font-bold md:text-2xl">
        الدورات المضافة حديثا
      </h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="course in courses"
        class="group flex flex-col h-full bg-white border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5">
        <div class="aspect-w-16 aspect-h-8">
          <img class="w-full object-cover rounded-xl" :src="course.image" alt="Image Description">
        </div>
        <div class="my-6">
          <h3 class="text-md font-semibold text-gray-800 ">
            {{ course.title }}
          </h3>
          <p class="mt-5 text-gray-600 text-sm">
            {{ course.description }}
          </p>
        </div>
        <div class="mt-auto flex items-center gap-x-3">
          <img class="w-8 h-8 rounded-full" :src="course.clubImage" alt="Image Description">
          <div>
            <h5 class="text-sm text-gray-800">
              {{ course.club }}
            </h5>

          </div>
        </div>
        <div class="mt-6">
          <a :href="course.link"
            class="w-full py-3 px-4 flex justify-center rounded-lg font-medium bg-primary text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 transition-all text-md">
            تسجيل
          </a>
        </div>
      </div>

    </div>

    <div class="mt-12 text-center">
      <a href="/courses" class="inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-primary hover:text-indigo-700 font-medium hover:shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4">
        عرض جميع الدورات
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
// const co = ref([])
// onMounted(async () => {
//   try {
//       const response = await axios.get('https://backend-students-club.herokuapp.com/api/courses?populate=*')
//       co.value = response.data.data
//     } catch (error) {
      
//     }
// })





const courses = ref([
  {
    title: 'دورة ريادة الأعمال',
    description: 'دورة ريادة الأعمال التطويريرة للأعمال الصغيرة والمتوسطة',
    image: 'https://blog.vantagecircle.com/content/images/2021/01/Employee-Management-Meaning-Importance-Tips-Tools---More.png',
    club: 'نادي الأعمال',
    clubImage: 'https://pbs.twimg.com/profile_images/1498376044990152711/1Ry0P1zr_400x400.jpg',
    link: 'https://google.com'
  },
  {
    title: 'دورة برمجة التطبيقات',
    description: 'دورة برمجة التطبيقات للمبتدئين',
    image: 'https://buildfire.com/wp-content/themes/buildfire/assets/images/hub-hero.webp',
    club: 'نادي البرمجة',
    clubImage: 'https://cdnjobs.net/cached_uploads/full/2018/08/09/38857374-457031601460620-559854128109453312-o-1533795387.jpg',
    link: 'https://google.com'
  },
  {
    title: 'دورة هندسة المعدات',
    description: 'دورة هندسة المعدات للمبتدئين',
    image: 'https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/07/15214724/PhD-in-Civil-Engineering.png',
    club: 'نادي الهندسة',
    clubImage: 'https://pbs.twimg.com/profile_images/1634498898029838336/71NtMKaK_400x400.jpg',
    link: 'https://google.com'
  }
]);


</script>