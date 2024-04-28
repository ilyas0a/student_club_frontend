<template>
  <Header />

  <div class="my-10 md:my-16 max-w-3xl mx-auto p-2">
    <h1 class="text-lg font-semibold text-center mb-5">تسجيل حساب نادي</h1>
    <Wizard squared-tabs card-background  :nextButton="nextButtonOptions"
      :backButton="backButtonOptions" :doneButton="{
        text: 'تم',
        icon: 'true'
      }" :custom-tabs="[
  {
    title: 'أختر نوع النادي',
    icon: 'compass'
  },
  {
    title: 'أختر الجامعة',
    icon: 'search'
  },
  {
    title: 'أدخل البيانات',
    icon: 'pencil'
  },
  {
    title: 'الإرسال',
    icon: 'check-circle'
  },
]" :beforeChange="onTabBeforeChange" @change="onChangeCurrentTab" @complete:wizard="wizardCompleted">
      <div v-if="currentTabIndex === 0">
        <div class="flex items-center justify-around">
          <button v-on:click="form.type = 'university'" v-bind:class="{ isselcted: form.type == 'university' }"
            class="group flex flex-col bg-white border hover:border-primary shadow-sm rounded-lg hover:shadow-md transition">
            <div class="p-4 md:p-5">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="h-[2.375rem] w-[2.375rem] rounded-full group-hover:text-primary">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
                <div class="mr-3">
                  <h3 class="group-hover:text-primary font-medium text-gray-800">
                    جامعي
                  </h3>
                </div>
              </div>
            </div>
          </button>
          <button  v-on:click="form.type = 'other'"  v-bind:class="{ isselcted: form.type == 'other' }"
            class="group flex flex-col bg-white border hover:border-primary shadow-sm rounded-lg hover:shadow-md transition">
            <div class="p-4 md:p-5">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="h-[2.375rem] w-[2.375rem] rounded-full group-hover:text-primary">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <div class="mr-3">
                  <h3 class="group-hover:text-primary font-medium text-gray-800">
                    آخر
                  </h3>
                </div>
              </div>
            </div>
          </button>

        </div>

      </div>
      <div v-if="currentTabIndex === 1">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <button @click="form.university = university.name" v-for="(university, index) in universites" :key="index"
                  :class="form.university == university.name ? 'border-primary' : ''"
            class="group border  flex flex-col bg-white border shadow-sm rounded-lg hover:shadow-md transition">
            <div class="p-4 md:p-5">
              <div class="flex items-center">
                <img class="h-[2.375rem] w-[2.375rem] rounded-full" :src="university.image" alt="Image Description">
                <div class="mr-3">
                  <h3 class="group-hover:text-primary font-medium text-gray-800">
                    {{ university.name }}
                  </h3>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div v-if="currentTabIndex === 2">
        <form @submit.prevent="submit" method="post" class="p-4 md:p-5">
          <div class="relative mb-3">
            <label class="block text-gray-800 text-sm font-medium mb-2">اسم النادي</label>
            <input type="text" v-model="form.name" name="name" required placeholder="اسم النادي"
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
            <input type="email" v-model="form.email" name="email" required placeholder="البريد الإلكتروني"
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
            <input id="password" name="password" v-model="form.password" type="password" required placeholder="كلمة المرور"
              class="focus:border-primary focus:ring-primary text-gray-800 block w-full rounded-md border border-gray-300 py-3 px-12 text-sm">
            <div class="flex absolute top-1/2 right-0 items-center pr-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                </path>
              </svg>
            </div>
            <div id="showPassword" class="flex absolute top-1/2 left-0 items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 text-gray-500">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88">
                </path>
              </svg>
            </div>
          </div>

        </form>
      </div>
      <div v-if="currentTabIndex === 3">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md">
  <div class="md:flex">
      <div class="w-full p-3 py-10">
        
        <div class="flex justify-center">

          <img src="https://i.imgur.com/QOi7Nie.png" width="80">
          
        </div>

        <div class="flex justify-center mt-3">

          <span class="text-xl font-medium">
            تم التسجيل
          </span>
          
        </div>

         <p class="px-16 text-center text-gray-400">
           شكراً لك على التسجيل, سيتم التواصل معك لتوثيق الحساب
           </p>
            
      
      </div>
  </div>
</div>
      </div>
    </Wizard>
  </div>
  <Footer />
</template>
  
<script>
import 'form-wizard-vue3/dist/form-wizard-vue3.css';
import Wizard from 'form-wizard-vue3';
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';

export default {
  components: {
    Wizard,
    Header,
    Footer,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        type: '',
        university: '',
      },
      currentTabIndex: 0,
      isSelected: false,
      universitySelect: false,
      otherSelect: false,
      universites: [
        {
          name: 'جامعة الملك خالد',
          image: 'https://www.kku.edu.sa/sites/default/files/logo_kku_new2.png',
        },
        {
          name: 'جامعة الملك سعود',
          image: 'https://yt3.googleusercontent.com/ytc/AL5GRJUzgoFmhAMSOAie_MM14O0q6CcQp7apBiGdeVPe=s900-c-k-c0x00ffffff-no-rj',
        },
        {
          name: 'جامعة الملك عبدالعزيز',
          image: 'https://pbs.twimg.com/profile_images/863459684606513152/75KY4qD7_400x400.jpg',
        },
        {
          name: 'جاعمة القصيم',
          image: 'https://www.mosoah.com/wp-content/uploads/2019/09/1306401-300x300.jpg',
        }
      ]
    };
  },
  methods: {
    register() {
      console.log(this.form)
    },
    onChangeCurrentTab(index, oldIndex) {
      this.currentTabIndex = index;
    },
    onTabBeforeChange(t) {
      console.log(this.currentTabIndex , this.form)
      return false
    
    },
    wizardCompleted() {
      
    },
    changeUniversity() {
      this.universitySelect = !this.universitySelect;
    },
    chengeOther() {
      this.otherSelect = !this.otherSelect;
    },
    submit() {
        const data = {
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
            type : this.form.type,
            university : this.form.university,
        }
        console.log("Apply form Data: ", application)
    }
  },
  computed: {
    nextButtonOptions() {
      return {
        text: 'التالي',
        icon: 'arrow-left',
        hideIcon: false, // default false but selected for sample
        hideText: false, // default false but selected for sample
        disabled: false,

      };
    },
    backButtonOptions() {
      return {
        text: 'السابق',
        icon: 'arrow-right',
        hideIcon: false, // default false but selected for sample
        hideText: false, // default false but selected for sample
      };
    },
  },
};
</script>
  
<style>.pi-arrow-left {
  @apply mr-2;
}

.fw-step-title {
  @apply text-slate-800 mt-2;
}

.cardselect {
  background: linear-gradient(90deg, #4a3aff 0%, #6d3aff 100%) !important;
}

.isselcted {
  color: #6B71F2;
  border-color: #6B71F2;
}</style>
  