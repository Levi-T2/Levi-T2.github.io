<template>
  <div class="container-fluid">
    <section class="row align-items-center mt-4">
      <HeroTop />
    </section>
    <section class="row mt-4">
      <AboutMe />
    </section>
    <section class="row mt-4">
      <ProjectsPreview />
    </section>
    <!-- <div class="col-12 margin-custom">
      <div class="col-12 col-md-6 px-3 d-flex justify-content-start flex-column ">
        <h2 class="txt-gray">About Me</h2>
        <p class="mb-0 px-4 txt-dark-gray">
          I am very interested in learning more about the industry and learning new skills and technologies to be able
          to use. I'm excited for the future of web development and I believe it is extremely important to the
          advancement of computer applications, and I'm happy to be working in the field with it.</p>
        <div class="d-flex justify-content-center">
          <a class="social-size" href="https://www.linkedin.com/in/levi-tyler-54a4911b6/"><i
              class="mdi mdi-linkedin"></i></a>
          <a class="social-size" href="https://github.com/Levi-T2"><i class="mdi mdi-github"></i></a>
        </div>
      </div>
    </div>
    <div class="col-12 mt-3 project-slanted">
      <h2 class="p-3">Projects</h2>
      <section class="row">
        <div class="col-12 col-md-6">
          <div class="d-flex flex-column align-items-center text-center p-1">
            <a href="https://capstone.levityler.com">
              <img src="../assets/img/Capstone.png" alt="Capstone Image" class="project-img">
            </a>
            <h4 class="mt-3 mb-0">Auto-Tunes</h4>
            <p class="p-2">
              As a team of four developers we were given two weeks to construct a UML, Figma Mock, and pitch for our
              websites features.
              For our website, we made a social media platform where users could share descriptions and images of their
              modified cars and favorite other users cars.
            </p>
            <p></p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="d-flex flex-column align-items-center text-center p-1">
            <a href="https://levityler.com">
              <img src="../assets/img/Keepr.png" alt="Keepr Image" class="project-img">
            </a>
            <h4 class="mt-3 mb-0">Keepr</h4>
            <p class="p-2">
              Keepr was our final project given to our cohort and it required us to utilize a Vue3
              front-end with a C#
              back-end for the project.
              It required us to put 'Keeps' into 'Vaults' using a 'VaultKeep'; similar to Pinterest.
            </p>
          </div>
        </div>
      </section>
    </div>
    <div class="col-12 mt-4">
      <section class="row">
        <div class="col-12 col-md-6">
          <h4 class="txt-gray">Get In Touch</h4>
          <div class="px-5">
            <p class="my-4 fs-3 txt-dark-gray"><i class="mdi mdi-phone"></i> 208-243-6963</p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <h4 class="txt-gray">Skills and Languages</h4>
          <section class="row p-2">
            <div class="col-12 col-md-6">
              <div class="d-flex justify-content-between">
                <i title="JavaScript" class="icon-size mdi mdi-language-javascript"></i>
                <i title="HTML" class="icon-size mdi mdi-language-html5"></i>
                <i title="CSS" class="icon-size mdi mdi-language-css3"></i>
                <i title="Vue" class="icon-size mdi mdi-vuejs"></i>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="d-flex justify-content-between">
                <i title="Node.js" class="icon-size mdi mdi-nodejs"></i>
                <i title="Bootstrap" class="icon-size mdi mdi-bootstrap"></i>
                <i title="C#" class="icon-size mdi mdi-language-csharp"></i>
                <i title="SQL" class="icon-size mdi mdi-database-search"></i>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>-->
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
// .header-slanted {
//   padding-bottom: 2.25rem;
//   background-color: rgb(51, 51, 51);
//   color: white;
//   clip-path: polygon(0% 0%,
//       100% 0%,
//       100% calc(100% - 2rem),
//       0% 100%);
// }

// .project-slanted {
//   padding-top: 3rem;
//   background-color: rgb(51, 51, 51);
//   color: white;
//   clip-path: polygon(0% 0%,
//       100% 14.5%,
//       100% 100%,
//       0% 100%);
// }

// .img-position {
//   display: flex;
//   justify-content: end;
//   position: absolute;
//   padding-right: 10.5rem;
//   padding-top: 2.5rem;
// }
</style>
