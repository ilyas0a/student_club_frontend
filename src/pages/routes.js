import {createRouter} from 'vue-router'
import LandingPage from './LandingPage.vue';

import Courses from './Courses.vue';
import Clubs from './Clubs.vue';
import Contact from './Contact.vue';

import ClubRegister from './club/Register.vue';
import StudentRegister from './student/Register.vue';
import ClubLogin from './club/Login.vue';
import StudentLogin from './student/Login.vue';

import ClubUser from './club/_user.vue';

import ClubDashboard from './club/Home.vue';
import StudentDashboard from './student/Home.vue';


const routes = [
  { path: '/', component: LandingPage },
  { path: '/courses', component: Courses },
  { path: '/clubs', component: Clubs },

  { path: '/club', component: ClubDashboard},
  { path: '/student', component: StudentDashboard},


  
  { path: '/club/register', component: ClubRegister},
  { path: '/student/register', component: StudentRegister},
  { path: '/club/login', component: ClubLogin},
  { path: '/student/login', component: StudentLogin},
  { path: '/contact', component: Contact},
  { path: '/club/:user', component: ClubUser},

]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}