import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _965bba90 = () => interopDefault(import('../app/pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _a8700588 = () => interopDefault(import('../app/pages/thank-you/index.vue' /* webpackChunkName: "pages/thank-you/index" */))
const _14a0e7f8 = () => interopDefault(import('../app/pages/blog/page/_page.vue' /* webpackChunkName: "pages/blog/page/_page" */))
const _99c8fd20 = () => interopDefault(import('../app/pages/blog/_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _7cbbd9e2 = () => interopDefault(import('../app/pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2a6357ab = () => interopDefault(import('../app/pages/_page.vue' /* webpackChunkName: "pages/_page" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _965bba90,
    name: "blog"
  }, {
    path: "/thank-you",
    component: _a8700588,
    name: "thank-you"
  }, {
    path: "/blog/page/:page?",
    component: _14a0e7f8,
    name: "blog-page-page"
  }, {
    path: "/blog/:slug",
    component: _99c8fd20,
    name: "blog-slug"
  }, {
    path: "/",
    component: _7cbbd9e2,
    name: "index"
  }, {
    path: "/:page",
    component: _2a6357ab,
    name: "page"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
