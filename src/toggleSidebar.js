import { getElement } from "./utils.js"

const toggleNav = getElement(".toggle-nav")
const sidebarOverlay = getElement(".sidebar-overlay")
const sidebarClose = getElement(".sidebar-close")

toggleNav.addEventListener("click", () => {
  sidebarOverlay.classList.toggle("show")
})

sidebarClose.addEventListener("click", () => {
  sidebarOverlay.classList.toggle("show")
})
