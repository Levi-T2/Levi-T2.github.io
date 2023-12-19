<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 header-slanted">
        <h1 class="p-5">
          Full-Stack Web Developer
          <span class="fs-6">
            | Levi Tyler
          </span>
        </h1>
      </div>
      <div class="img-position">
        <div>
          <img src="../assets/img/headshot.jpg" alt="Headshot Image" class="img-size">
        </div>
      </div>
      <div class="col-12 my-4">
        <div class="col-6 px-3 d-flex justify-content-start flex-column ">
          <h2 class="txt-gray">About Me</h2>
          <p class="mb-0 px-4 txt-dark-gray">
            I am very interested in learning more about the industry and learning new skills and technologies to be able
            to use. I'm excited for the future of web development and I believe it is extremely important to the
            advancement of computer applications, and I'm happy to be working in the field with it.</p>
        </div>
      </div>
      <div class="col-12 mt-3 project-slanted">
        <h2 class="p-3">Projects</h2>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.header-slanted {
  padding-bottom: 2.25rem;
  background-color: rgb(51, 51, 51);
  color: white;
  clip-path: polygon(0% 0%,
      100% 0%,
      100% calc(100% - 2rem),
      0% 100%);
}

.project-slanted {
  padding-bottom: 2.25rem;
  background-color: rgb(51, 51, 51);
  color: white;
  clip-path: polygon(0% 0%,
      100% calc(100% - 3rem),
      100% 100%,
      0% 100%);
}

.img-size {
  height: 20rem;
  width: 17.5rem;
  object-fit: cover;
  object-position: 0% 15%;
  border-radius: 3.5px;
  box-shadow: 6.5px 6.5px 0px 3px rgb(145, 115, 160);
}

.img-position {
  display: flex;
  justify-content: end;
  position: absolute;
  padding-right: 8.5rem;
  padding-top: 2.5rem;
}

.txt-gray {
  color: rgb(130, 130, 130);
}

.txt-dark-gray {
  color: rgb(75, 75, 75);
}
</style>
