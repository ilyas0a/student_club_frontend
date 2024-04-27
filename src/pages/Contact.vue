
<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
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
          <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
            <h2 class="mb-8 text-xl font-semibold text-gray-800">تواصل معنا</h2>
            <form class="">
              <div class="grid gap-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="name" class="sr-only">الأسم</label
                    ><input
                      type="text"
                      name="name"
                      id="name"
                      class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
                      placeholder="ادخل اسمك"
                    />
                  </div>
                  <div>
                    <label for="subject" class="sr-only">الموضوع</label
                    ><input
                      type="text"
                      name="subject"
                      id="subject"
                      class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
                      placeholder="ادخل الموضع"
                    />
                  </div>
                </div>
                <div>
                  <label for="email" class="sr-only">البريد الإلكتروني</label
                  ><input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
                    placeholder="ادخل بريدك الإلكتروني"
                  />
                </div>
                <div>
                  <label for="message" class="sr-only">الرسالة</label
                  ><textarea
                    id="message"
                    name="message"
                    rows="4"
                    class="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary"
                    placeholder="ادخل الرسالة"
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

