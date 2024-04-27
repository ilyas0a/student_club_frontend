<script setup>
import { ref } from "vue";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
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
    title: "دورة هندسة المعدات",
    description: "دورة هندسية لأسايات المعدات",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    club: "نادي الهندسة",
    clubImage:
      "https://pbs.twimg.com/profile_images/1634498898029838336/71NtMKaK_400x400.jpg",
    link: "https://google.com",
  },
  {
    title: "دورة الإبداع",
    description: "دورة تعليمية لتطوير الإبداع",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    club: "نادي الإبداع",
    clubImage:
      "https://pbs.twimg.com/profile_images/1614200792692539394/clbPRhWt_400x400.jpg",
    link: "#",
  },
]);
const search = ref("");
const filteredCourses = ref([]);
searchCourses();
function searchCourses() {
  filteredCourses.value = courses.value.filter((course) =>
    course.title.toLowerCase().includes(search.value.toLowerCase())
  );
}

</script>
<template>
  <Header />
  <div class="container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8">
    <div class="max-w-2xl mb-10 lg:mb-14">
      <h1 class="text-xl font-bold md:text-2xl">الدورات</h1>
    </div>
    <div class="my-7 sm:mt-10 mx-auto max-w-xl relative">
   
        <div
          class="relative z-10 flex space-x-3 space-x-reverse p-2 bg-white border rounded-lg shadow-lg shadow-gray-100"
        >
          <div class="flex-[1_0_0%]">
            <label for="title" class="block text-sm text-gray-700 font-medium"
              ><span class="sr-only">Search article</span></label
            ><input v-on:keyup="searchCourses" v-model="search"
              type="text"
              name="title"
              id="title"
              class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500"
              placeholder="البحث عن دورة"
            />
          </div>
          
        </div>

    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(course, index) in filteredCourses"
        :key="index"
        class="group flex flex-col h-full bg-white border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
      >
        <div class="aspect-w-16 aspect-h-8">
          <img
            class="w-full object-cover rounded-xl"
            :src="course.image"
            alt="الدورات"
          />
        </div>
        <div class="my-6">
          <h3 class="text-md font-semibold text-gray-800">
            {{ course.title }}
          </h3>
          <p class="mt-5 text-gray-600 text-sm">
            {{ course.description }}
          </p>
        </div>
        <div class="mt-auto flex items-center gap-x-3">
          <img
            class="w-8 h-8 rounded-full"
            :src="course.clubImage"
            alt="الأندية الطلابية"
          />
          <div>
            <h5 class="text-sm text-gray-800">
              {{ course.club }}
            </h5>
          </div>
        </div>
        <div class="mt-6">
          <a
            :href="course.link"
            :class="course.link != '#' ? 'bg-primary hover:bg-indigo-600' : 'bg-gray-200 hover:bg-gray-300'"
            class="w-full py-3 px-4 flex justify-center rounded-lg font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-600 transition-all text-md"
          >
            <span v-if="course.link != '#'">التسجيل</span>
            <span v-else>منتهية</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
