<template>
    <div class="col-12">
        <h2 class="text-center fw-bold">Projects</h2>
    </div>
    <div class="col-12 col-md-6 d-flex justify-content-center mt-2">
        <div class="image-container">
            <p class="title-txt">Keeper</p>
            <img src="../assets/img/Keepr.png" class="img-size" alt="Project Image">
            <p class="mt-4 p-3">
                Keepr was our final project given to our cohort and it required us to utilize a Vue3
                front-end with a C# back-end for the project. It required us to put 'Keeps' into 'Vaults' using a
                'VaultKeep'; similar to Pinterest.
            </p>
        </div>
    </div>
    <div class="col-12 col-md-6 d-flex justify-content-center mt-2">
        <div class="image-container">
            <p class="title-txt">BCW Capstone</p>
            <img src="../assets/img/Capstone.png" class="img-size" alt="Project Image">
            <p class="mt-4 p-3">
                As a team of four developers we were given two weeks to construct a UML, Figma Mock, and pitch for our
                websites features.
                For our website, we made a social media platform where users could share descriptions and images of their
                modified cars and favorite other users cars.
            </p>
        </div>
    </div>
    <div class="col-12 my-1 text-center">
        <!-- TODO Set up with router-link that sends user to projects page, also need to add data-bs to the projects above for modal support -->
        <button class="btn btn-primary">See More Projects
            <i class="mdi mdi-plus"></i>
        </button>
    </div>
</template>


<script>
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.image-container {
    text-align: center;

    .title-txt {
        font-size: 1.5em;
        text-align: center;
    }
}

.img-size {
    height: 20rem;
    width: auto;
    object-fit: cover;
    object-position: contain;
    border-radius: 3.5px;
    box-shadow: 12px 12px 0px 2px var(--dark-green);
}

@media (max-width: 768px) {
    .img-size {
        height: 11rem;
        width: auto;
    }
}
</style>