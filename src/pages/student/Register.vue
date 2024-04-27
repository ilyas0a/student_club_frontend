<script setup>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
</script>
<template>
    <Header />
    <section class="relative mx-auto pt-10">
        <h1 class="text-lg font-semibold text-center mb-5">تسجيل حساب طالب</h1>
        <div class="w-full xl:w-auto">
            <div class="max-w-md mx-auto rounded-md border border-gray-200 bg-white shadow-sm">
                <div class="px-4 md:px-8 py-8">
                    <div class="text-center mb-4">
                        <p class="text-sm">
                            طور مهاراتك مع
                            <span class="font-bold text-primary block mt-1">الأندية الطلابية</span>
                        </p>
                    </div>
                    <form method="post" @submit.prevent="register">
                        <div class="relative mb-3">
                            <label class="block text-gray-800 text-sm font-medium mb-2">الاسم</label>
                            <input type="text" v-model="name" name="name" required placeholder="البريد الإلكتروني"
                                class="focus:border-primary focus:ring-primary text-gray-800 block w-full rounded-md border border-gray-300 py-3 px-12 text-sm">
                            <div class="flex absolute top-1/2 right-0 items-center mr-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="relative mb-3">
                            <label class="block text-gray-800 text-sm font-medium mb-2">البريد الإلكتروني</label>
                            <input type="email" v-model="email" name="email" required placeholder="البريد الإلكتروني"
                                class="focus:border-primary focus:ring-primary text-gray-800 block w-full rounded-md border border-gray-300 py-3 px-12 text-sm">
                            <div class="flex absolute top-1/2 right-0 items-center mr-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div class="relative mb-3">
                            <label class="block text-gray-800 text-sm font-medium mb-2">كلمة المرور</label>
                            <input id="password" v-model="password" name="password" :type="passwordFieldType" required placeholder="كلمة المرور"
                                class="focus:border-primary focus:ring-primary text-gray-800 block w-full rounded-md border border-gray-300 py-3 px-12 text-sm">
                            <div class="flex absolute top-1/2 right-0 items-center pr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                    </path>
                                </svg>
                            </div>
                            <div id="showPassword" @click="switchVisibility" class="flex absolute top-1/2 left-0 items-center pl-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88">
                                </path>
                            </svg>
                        </div>
                    </div>



                    <button
                        class="bg-primary w-full py-3 px-4 mb-3 text-sm font-semibold focus:ring-primary gap-2 rounded-md border border-transparent text-white transition-all hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2">
                        تسجيل </button>
                    <div class="relative mb-3 text-sm">
                        <a href="/student/login" class="text-gray-800 hover:text-primary hover:underline text-sm">
                            لديك حساب ؟
                        </a>
                    </div>

                </form>
            </div>
        </div>
    </div>
    <Footer />
</section>
</template>