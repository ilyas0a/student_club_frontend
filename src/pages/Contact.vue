
<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import {ref} from "vue";

const name = ref('')
const subject = ref('')
const email = ref('')
const message = ref('')

const submitted = ref(false)
</script>
<template>
  <section>
    <Header />
    <div class="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8 py-12">
      <div class="max-w-2xl lg:max-w-5xl mx-auto">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl">اتصل بنا</h1>
          <p class="mt-1 text-gray-600">
            نرحب بكم جميعًا و بكل استفساراتكم و اقتراحاتكم 
          </p>
        </div>
        <div class="mt-12">
          <div v-if="submitted">
            <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
              <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                <div>
                  <p class="font-bold mr-2">تم ارسال الطلب بنجاح</p>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!submitted" class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
            <h2 class="mb-8 text-xl font-semibold text-gray-800">تواصل معنا</h2>
            <form @submit.prevent="submitted = true" class="">
              <div class="grid gap-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="name" class="sr-only">الأسم</label
                    ><input
                      v-model="name"
                      type="text"
                      name="name"
                      id="name"
                      class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
                      placeholder="ادخل اسمك"
                      required
                    />
                  </div>
                  <div>
                    <label for="subject" class="sr-only">الموضوع</label
                    ><input
                      v-model="subject"
                      type="text"
                      name="subject"
                      id="subject"
                      class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
                      placeholder="ادخل الموضع"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label for="email" class="sr-only">البريد الإلكتروني</label
                  ><input
                    v-model="email"
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
                    placeholder="ادخل بريدك الإلكتروني"
                    required
                  />
                </div>
                <div>
                  <label for="message" class="sr-only">الرسالة</label
                  ><textarea
                    v-model="message"
                    id="message"
                    name="message"
                    rows="4"
                    class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
                    placeholder="ادخل الرسالة"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="mt-4 grid">
                <button
                  type="submit"
                  class="inline-flex justify-center items-center gap-x-3 text-center bg-primary  border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                >
                  إرسال
                </button>
              </div>
              <div class="mt-3 text-center">
                <p class="text-sm text-gray-500">
                  نحرص على الرد على جميع الرسائل.
                </p>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

