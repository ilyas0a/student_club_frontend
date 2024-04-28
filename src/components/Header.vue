<template>
   <header class="realative z-0 container xl:max-w-6xl mx-auto px-4 lg:px-10">
      <nav class="flex items-center justify-between py-6" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="/" class="font-bold text-primary hover:text-blue-800 hover:opacity-75 transition">
            الأندية الطلابية
            </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <button @click="show = true" type="button" class="text-sm font-semibold leading-6 bg-black text-white px-3 py-2 flex items-center transform hover:bg-gray-800 hover:scale-100 rounded-lg">التسجيل
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25" />
            </svg>
          </button>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between z-20">
            <a href="/" class="-m-1.5 p-1.5 font-bold text-primary hover:text-blue-800 hover:opacity-75 transition">
            الأندية الطلابية
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root z-20">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <div class="py-6">
                <button type="button" @click="show = true , mobileMenuOpen = false" class="text-sm font-semibold leading-6 bg-black text-white px-3 py-2 flex items-center transform hover:bg-gray-800 hover:scale-100 rounded-lg">
                  التسجيل
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <div v-if="show" class="fixed top-20 z-50 w-full p-4 inset-0">
        <div class="relative w-full z-50 h-full max-w-2xl mx-auto md:h-auto">
            <div class="relative bg-white rounded-lg shadow">
                <div class="flex items-start justify-between p-4 border-b rounded-t">
                    <h3 class="text-xl font-semibold text-gray-900">
                        أختر نوع المستخدم
                    </h3>
                    <button type="button" @click="show = false"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-10 space-y-10">
                    <div class="sm:flex items-center justify-around space-y-5 sm:space-y-0">
                        <div class="text-center">
                            <div class="bg-primary p-2 text-slate-800 rounded-lg">
                                <a href="/student/Register">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </a>
                            </div>

                            <p class="text-md font-semibold mt-2 text-slate-800">طالب</p>
                        </div>
                        <div class="text-center">
                            <div class="bg-primary p-2 text-slate-800 rounded-lg">
                                <a href="/club/Register">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mx-auto">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                                    </svg>

                                </a>
                            </div>

                        <p class="text-md font-semibold mt-2 text-slate-800">نادي</p>
                    </div>
                </div>
                <div>
                    <p class="text-center text-gray-500">

                      لديك حساب بالفعل؟
                      <span @click="router.currentRoute.value.path == '/student/login' ? show=false :  router.push('/student/login')" class="underline cursor-pointer">
                        تسجيل الدخول
                      </span>
                    </p>

                </div>
            </div>
        </div>
     </div>
    </div>
    </header>
    
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import {useRouter} from "vue-router";

const navigation = [
  { name: 'الدورات', href: '/courses' },
  { name: 'الأندية', href: '/clubs' },
  { name: 'المميزات', href: '/#featues' },
  { name: 'تواصل معنا', href: '/contact' },
]
const show = ref(false);
const mobileMenuOpen = ref(false)

const router = useRouter()

console.log(router.currentRoute.value)
</script>