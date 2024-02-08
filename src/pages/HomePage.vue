<template>
  <div class="container-fluid">
    <section class="row align-items-center mt-4">
      <HeroTop />
    </section>
    <section class="row mt-4">
      <AboutMe />
    </section>
    <section class="project-slanted row mt-4">
      <ProjectsPreview />
    </section>
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import HeroTop from '../components/HeroTop.vue';
import ProjectsPreview from '../components/ProjectsPreview.vue';
export default {
  setup() {
    return {};
  },
  components: { HeroTop, AboutMe, ProjectsPreview }
}
</script>

<style scoped lang="scss">
.project-slanted {
  padding-top: 2.25rem;
  background-color: var(--dark-green);
  color: var(--main-bg);
}

@media (max-width: 768px) {
  .project-slanted {
    padding-top: 1.55rem;
  }
}
</style>
