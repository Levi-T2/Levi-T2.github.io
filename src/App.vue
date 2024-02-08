<template>
  <main class="app">
    <sidebar id="desktop" />
    <router-view />
  </main>
  <footer id="mobile" class="sticky-bottom">
    <mobile-tabs />
  </footer>

  <project-modal />
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Sidebar from './components/Sidebar.vue'
import ProjectModal from './components/ProjectModal.vue'
import MobileTabs from './components/MobileTabs.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Sidebar, ProjectModal, MobileTabs }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --sidebar-width: 300px;
  --darkest-green: #081C15;
  --dark-green: #1B4332;
  --dark-teal: #2D6A4F;
  --teal-alt: #40916C;
  --teal: #52B788;
  --light-teal: #74C69D;
  --light-teal-alt: #95D5B2;
  --seafoam: #B7E4C7;
  --lightest-teal: #D8F3DC;
  --main-bg: rgb(240, 240, 240);
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;
    background-color: var(--main-bg);

    // @media (max-width: 768px) {
    //   padding-left: 6rem;
    // }
  }
}

#mobile {
  display: none;
}

@media (max-width: 768px) {
  #desktop {
    display: none;
  }

  #mobile {
    display: block;
  }
}



button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
</style>
