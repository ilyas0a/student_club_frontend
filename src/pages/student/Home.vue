<script setup>
import {useRouter} from "vue-router";

const router = useRouter()
function logout() {
  console.log(3434)
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.replace('/student/login')
}
</script>
<template>
    <div x-data="{ userDropdownOpen: false, mobileNavOpen: false }" class="flex flex-col mx-auto w-full min-h-screen bg-white text-gray-900">
     <header id="page-header" class="flex flex-none items-center h-16 bg-white shadow-sm fixed top-0 right-0 left-0 z-30">
       <div class="flex justify-between container xl:max-w-6xl mx-auto px-4 lg:px-8">
         <div class="flex items-center">
           <a href="" class="font-bold text-lg tracking-wide text-gray-900">
             الأندية الطلابية
           </a>
         </div>

         <div class="flex items-center space-x-2 space-x-reverse">
           <nav class="hidden lg:flex lg:items-center lg:space-x-2 space-x-reverse text-sm">
             <a href="" class="font-medium flex items-center space-x-2  space-x-reverse px-3 py-2 rounded text-white bg-gray-800">
               <svg class="hi-solid hi-fire inline-block w-4 h-4 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.243 15.243a6 6 0 01-8.486-8.486C5.757 9 6 11 9 12c0-2 1-8 2.5-9 1 2 1.571 2.586 2.742 3.757A5.981 5.981 0 0116 11a5.982 5.982 0 01-1.757 4.243z"/><path d="M7.879 15.121a3 3 0 104.242-4.242C11.536 10.293 11.25 10 10.75 9c-.75.5-1.25 3.5-1.25 4.5C7.879 13.5 7 13 7 13c0 .768.293 1.536.879 2.121z"/></g><defs><clipPath id="clip0"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>
               <span>لوحة التحكم</span>
             </a>
           </nav>
           <div class="relative inline-block">
             <button
               type="button"
               class="text-sm font-medium inline-flex justify-center items-center space-x-2 space-x-reverse px-3 py-2 rounded text-gray-400 hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring"
               id="tk-dropdown-layouts-user"
               aria-haspopup="true"
               x-bind:aria-expanded="userDropdownOpen"
               x-on:click="userDropdownOpen = true"
             >
               <svg class="hi-solid hi-user-circle inline-block w-4 h-4 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/></svg>
               <span>
                 عبدالله
               </span>
               <svg class="hi-solid hi-chevron-down inline-block w-4 h-4 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
             </button>

             <div
               x-show="userDropdownOpen"
               x-transition:enter="transition ease-out duration-150"
               x-transition:enter-start="transform opacity-0"
               x-transition:enter-end="transform opacity-100"
               x-transition:leave="transition ease-in duration-100"
               x-transition:leave-start="transform opacity-100"
               x-transition:leave-end="transform opacity-0"
               x-on:click.away="userDropdownOpen = false"
               role="menu"
               aria-labelledby="tk-dropdown-layouts-user"
               class="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded"
             >
               <div class="bg-gray-700 ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-600">
                 <div class="p-2 space-y-1">
                   <a role="menuitem" href="javascript:void(0)" class="flex items-center space-x-2 space-x-reverse rounded py-2 px-3 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:bg-opacity-50 hover:text-gray-300 focus:outline-none focus:bg-gray-800 focus:text-gray-200">
                     <svg class="hi-solid hi-user-circle inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/></svg>
                     <span>
                       الملف الشخصي
                     </span>
                   </a>
                 </div>
                 <div class="p-2 space-y-1">
                   <a role="menuitem" href="javascript:void(0)" class="flex items-center space-x-2 space-x-reverse rounded py-2 px-3 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:bg-opacity-50 hover:text-gray-300 focus:outline-none focus:bg-gray-800 focus:text-gray-200">
                     <svg class="hi-solid hi-cog inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/></svg>
                     <span>
                       الإعدادات
                     </span>
                   </a>
                 </div>
                 <div class="p-2 space-y-1">
                   <form @submit.prevent="logout">
                     <button type="submit" role="menuitem" class="w-full text-left flex items-center space-x-2 space-x-reverse rounded py-2 px-3 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:bg-opacity-50 hover:text-gray-300 focus:outline-none focus:bg-gray-800 focus:text-gray-200">
                       <svg class="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>
                       <span>تسجيل الخروج</span>
                     </button>
                   </form>
                 </div>
               </div>
             </div>
           </div>
           <div class="lg:hidden">
             <button
               type="button"
               class="text-sm font-medium inline-flex justify-center items-center space-x-2 px-3 py-2 rounded text-gray-400 hover:text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring"
               x-on:click="mobileNavOpen = !mobileNavOpen"
             >
             <svg class="hi-solid hi-menu inline-block w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>  
             </button>
           </div>
         </div>
       </div>
     </header>

     <main id="page-content" class="flex flex-auto flex-col max-w-full pt-16">
       <!-- Mobile Navigation -->
       <div x-show="mobileNavOpen" class="lg:hidden bg-gray-100" style="display: none;">
         <div class="container xl:max-w-6xl mx-auto p-4 lg:p-8">
           <nav class="flex flex-col space-y-2">
             <a href="javascript:void(0)" class="font-medium flex items-center space-x-2 space-x-reverse px-3 py-2 rounded text-gray-300 bg-gray-800">
               <svg class="hi-solid hi-home inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
               <span>لوحة التحكم</span>
             </a>
           </nav>
         </div>
       </div>
       
       <div class="container xl:max-w-6xl mx-auto p-4 lg:p-8 space-y-4 lg:space-y-8">
        
        <div class="max-w-2xl mb-10 lg:mb-14">
            <h1 class="text-xl font-bold ">
                مرحباً ,
                <span class="text-primary">عبدالله</span>
            </h1>
        </div>
        <div class="py-5">
              <dl>
                <dt class="text-sm uppercase font-semibold text-gray-400 tracking-wider">
                  يمكنك تخصيص التنبيهات من خلال الملف الشخصي
                </dt>
                <dd class="font-semibold text-xl pt-2 pb-3">
                  الملف الشخصي
                </dd>
              </dl>
              
            </div>

         <div class="py-5">
           <h1 class="font-semibold text-xl pt-2 pb-3">الفعاليات :</h1>
           <div class="border-2 rounded border-primary pt-2 pb-8 px-8">
             <div class="flex justify-between items-center">
               <div class="flex content-center my-3">
               <div class="relative w-12 h-12">
               <img
                   width="50"
                   height="50"
                   class="rounded-full border border-gray-100 shadow-sm"
                   src="https://randomuser.me/api/portraits/women/81.jpg" alt="">
             </div>
             <dd class="pr-2 text-lg pt-2 pb-3">فعالية جامعة الملك سعود</dd>
           </div>
             <p class="">التاريخ : 1/1/2025</p>

             </div>
             <dt class="text-sm mr-8  text-gray-700 tracking-wider">
               هذا هو وصف الفعالية,يمكنك اضافة أي وصف اضافي
             </dt>
           </div>

         </div>
       </div>
     </main>

     
   </div>
</template>