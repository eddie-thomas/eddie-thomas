// store.js
import { reactive } from 'vue'
import { isMobile } from './utils'

interface State {
  isMobile: boolean
  page: Page
}

export enum Page {
  Home,
  Projects
}

export const state = reactive<State>({
  isMobile: isMobile(),
  page: Page.Home
})
