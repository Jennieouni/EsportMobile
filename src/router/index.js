import Vue from 'vue'
import Router from 'vue-router'
import mobileIndex from '@/components/index'
import mobileFinish from '@/components/finish'
import mobileSchedule from '@/components/schedule'
import mobileLeague from '@/components/league'
import mobileLiving from '@/components/living'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'mobileIndex',
    component: mobileIndex
  },
  {
    path: '/index.html',
    name: 'mobileIndex',
    component: mobileIndex
  },
  {
    path: '/finish.html',
    name: 'mobileFinish',
    component: mobileFinish
  },
  {
    path: '/schedule.html',
    name: 'mobileSchedule',
    component: mobileSchedule
  },
  {
    path: '/league.html',
    name: 'mobileLeague',
    component: mobileLeague
  },
  {
    path: '/living.html',
    name: 'mobileLiving',
    component: mobileLiving
  }
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
