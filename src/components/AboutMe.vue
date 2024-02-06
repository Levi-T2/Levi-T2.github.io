<template>
    <div class="col-12 col-md-8 mobile order-2 order-md-1">
        <div class="px-5">
            <h2 class="mobile-txt">About Me</h2>
            <p class="mb-0 mobile-txt">
                I am very interested in learning more about the industry and learning new skills and technologies to be able
                to use. I'm excited for the future of web development and I believe it is extremely important to the
                advancement of computer applications, and I'm happy to be working in the field with it.
            </p>
        </div>
    </div>
    <div class="col-12 col-md-3 contact-bg mobile order-1 order-md-2">
        <div class="contact-wrapper">
            <a title="LinkedIn" href="www.linkedin.com/in/levi-tyler" class="button">
                <i class="mdi mdi-linkedin"></i>
            </a>
            <a title="Github" href="https://github.com/Levi-T2" class="button">
                <i class="mdi mdi-github"></i>
            </a>
        </div>
        <div class="pt-3">
            <button class="contact-btn">
                Contact Info
                <i class="mdi mdi-phone-log"></i>
            </button>
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
.contact-bg {
    padding-top: 1rem;
    padding-bottom: 1.25rem;
    background-color: var(--dark-green);
    border-radius: 3.5px;
    text-align: center;
}

.contact-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;

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

.contact-btn {
    background-color: var(--lightest-teal);
    color: var(--darkest-green);
    padding: 0.45rem 0.75rem;
    border-radius: 3.5px;
    transition: 0.2s ease-in-out;
    font-size: 1.1em;

    &:hover {
        transform: scale(1.075);
    }
}

@media (max-width: 768px) {
    .mobile {
        margin-bottom: 1.75rem;
    }

    .mobile-txt {
        text-align: center;
    }

    .contact-bg {
        border-radius: 0;
    }
}
</style>