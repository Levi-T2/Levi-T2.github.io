<template>
    <div class="col-12 col-md-7 mobile">
        <div class="text-center">
            <h1 class="mb-0 fw-bold">
                Full-Stack Software Developer
            </h1>
            <h3 class="mb-0">
                Levi Tyler
            </h3>
        </div>
    </div>
    <div class="col-12 col-md-5 mobile">
        <div class="img-wrap">
            <img src="../assets/img/headshot.jpg" alt="Headshot Image" class="img-size">
        </div>
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
.img-wrap {
    text-align: center;

    .img-size {
        height: 22rem;
        width: 19.5rem;
        object-fit: cover;
        object-position: 0% 15%;
        border-radius: 3.5px;
        box-shadow: 0px 0px 0px 6.5px var(--dark-green);
    }
}

@media (max-width: 768px) {
    .mobile {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
}
</style>