<script setup>
import { ref } from 'vue'
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';

import LastCourses from '../../components/LastCourses.vue';
const courses = ref([
  
  {
    title: 'دورة برمجة التطبيقات',
    description: 'دورة برمجة التطبيقات للمبتدئين',
    image: 'https://buildfire.com/wp-content/themes/buildfire/assets/images/hub-hero.webp',
    club: 'نادي البرمجة',
    clubImage: 'https://cdnjobs.net/cached_uploads/full/2018/08/09/38857374-457031601460620-559854128109453312-o-1533795387.jpg',
    link: 'https://google.com'
  }
]);
</script>
<template>
   
    <Header />

    <section class=" bg-white">
    <div class="container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8">
        <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-1">
            <div class="relative lg:mb-8">
                <div class="pl-12 pr-6">
                    <img class="relative" src="https://img.freepik.com/premium-vector/illustration-project-revision-discussion-with-teamwork_207579-21.jpg" alt="" />
                </div>
                
            </div>

            <div class="2xl:pl-16">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                    نادي البرمجة 
                </h2>
                <p class="text-xl leading-relaxed text-gray-900 mt-9">
                    نادي البرمجة هو نادي يهتم بتعليم البرمجة للطلاب والمهتمين بالبرمجة والتعلم الذاتي
                </p>
                <p class="mt-6 text-xl leading-relaxed text-gray-900">
                    نحن نهتم بتعليم البرمجة للطلاب والمهتمين بالبرمجة والتعلم الذاتي
                </p>
            </div>
        </div>
        <div class="max-w-2xl my-6 ">
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
    </div>
</section>

    <Footer />
</template>