import Vue from 'vue'
import Router from 'vue-router'
import ArucoMarkerList from '@/components/ArucoMarkerList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArucoMarkerList',
      component: ArucoMarkerList
    }
  ]
})
