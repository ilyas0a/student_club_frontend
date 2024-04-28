<template>
  <Header />
  <div class="container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8">
    <div class="max-w-2xl mb-10 lg:mb-14">
      <h1 class="text-xl font-bold md:text-2xl">الأندية الطلابية</h1>
    </div>
    <div class="my-7 sm:mt-10 mx-auto max-w-xl relative">
      <div
        class="relative z-10 flex space-x-3 space-x-reverse p-2 bg-white border rounded-lg shadow-lg shadow-gray-100"
      >
        <div class="flex-[1_0_0%]">
          <label for="title" class="block text-sm text-gray-700 font-medium"
            ><span class="sr-only">Search article</span></label
          ><input
            v-on:keyup="searchClubs"
            v-model="search"
            type="text"
            name="title"
            id="title"
            class="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500"
            placeholder="البحث عن نادي"
          />
        </div>
      </div>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <a
        v-for="(club, index) in clubs"
        :key="index"
        class="group flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-md transition"
        :href="club.link"
      >
        <div class="p-4 md:p-5">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <img
                class="h-[2.375rem] w-[2.375rem] rounded-full"
                :src="club.image"
                alt="Image Description"
              />
              <div class="mr-3">
                <h3
                  class="group-hover:text-primary font-semibold text-gray-800 flex items-center"
                >
                  {{ club.name }} -
                  <span class="text-xs font-light">{{ club.university }}</span>
                </h3>
              </div>
            </div>
            <div class="pr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-gray-600 group-hover:text-primary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
<!--      <div v-if="clubs">
        <ul class="mb-0">
          <li v-for="club in clubs" :key="club.id">{{ club.name }}</li>
        </ul>
      </div>-->
    </div>
    <div v-if="!clubs" class="text-center">
      <div class="spinner-border spinner-border-sm">loding</div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const clubs = [
  {
    university: 'جامعة الملك خالد',
    name: 'نادي الأعمال',
    image: 'https://www.kku.edu.sa/sites/default/files/logo_kku_new2.png',
  },
  {
    university: 'نادي البرمجة',
    name: 'جامعة الملك سعود',
    image: 'https://yt3.googleusercontent.com/ytc/AL5GRJUzgoFmhAMSOAie_MM14O0q6CcQp7apBiGdeVPe=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    university: 'نادي الابداع',
    name: 'جامعة الملك عبدالعزيز',
    image: 'https://pbs.twimg.com/profile_images/863459684606513152/75KY4qD7_400x400.jpg',
  },
  {
    university: 'نادي الهندسة',
    name: 'جاعمة القصيم',
    image: 'https://www.mosoah.com/wp-content/uploads/2019/09/1306401-300x300.jpg',
  }
]
// fetch("http://127.0.0.1:8000/events")
//   .then((response) => response.json())
//   .then((data) => (clubs.value = data));
</script>
