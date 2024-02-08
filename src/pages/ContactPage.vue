<template>
  <div class="container-fluid">
    <section class="row justify-content-center mt-4">
      <div class="col-12 col-md-8">
        <div class="contacts-wrap">
          <a title="LinkedIn" href="https://linkedin.com/in/levi-tyler" class="button">
            <i class="mdi mdi-linkedin"></i>
            LinkedIn
          </a>
          <a title="Github" href="https://github.com/Levi-T2" class="button">
            <i class="mdi mdi-github"></i>
            Github
          </a>
        </div>
      </div>
    </section>
    <section class="row justify-content-center mt-4">
      <Resume />
    </section>
  </div>
</template>


<script>
import Resume from '../components/Resume.vue';

export default {
  setup() {
    return {};
  },
  components: { Resume }
};
</script>


<style lang="scss" scoped>
.contacts-wrap {
  display: flex;
  justify-content: space-around;
  background-color: var(--darkest-green);
  padding: 1rem;
  border-radius: 3.5px;

  .button {
    color: var(--lightest-teal);
    font-size: 2.5em;
    padding: 0rem .55rem;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.075);
      color: var(--dark-green);
      background-color: var(--lightest-teal);
      border-radius: 3.5px;
    }
  }
}
</style>