import Vue from 'vue'
import VueMaterialComponents from 'vue-material-components'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueScroll from 'vue-scroll'

import App from './App'
import Home from './Home'
import PublicData from './PublicData'
import SearchSchools from './SearchSchools'
import ShowSchool from './ShowSchool'
import Login from './Login'
import NotFound from './NotFound'

import StarRating from './Components/StarRating'

Vue.component('star-rating', StarRating)

Vue.use(VueMaterialComponents)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueScroll)

var root = 'http://104.131.140.61';
Vue.http.headers.common['Accept'] = 'application/json';
Vue.http.options.emulateHTTP = true;
Vue.http.options.emulateJSON = true;
Vue.http.options.root = root + '/api/v0.1';

var router = new VueRouter()

router.map({
    '/': {
        component: Home,
        name: 'home'
    },
    '/public/data': {
        component: PublicData,
        name: 'public.data'
    },
    '/schools/search': {
        component: SearchSchools,
        name: 'schools.search'
    },
    '/schools/show/:schoolId': {
        component: ShowSchool,
        name: 'schools.show'
    },
    '/login': {
        component: Login,
        name: 'login'
    },
    '*': {
        component: NotFound,
        name: 'notfound'
    }
})

router.start(App, 'app')
