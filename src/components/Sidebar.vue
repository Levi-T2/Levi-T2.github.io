<template>
    <aside :class="`${isExpanded && 'isExpanded'}`">
        <div class="logo">
            <img src="https://image.similarpng.com/very-thumbnail/2021/05/Modern-logo-design-template-on-transparent-PNG.png"
                alt="Logo">
        </div>
        <div class="menu-toggle-wrap">
            <button class="btn-arrow menu-toggle" @click="toggleMenu">
                <span class="md-icons">
                    <i class="mdi mdi-arrow-right"></i>
                </span>
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <RouterLink :to="{ name: 'Home' }" class="button">
                <span class="md-icons">
                    <i class="mdi mdi-home"></i>
                </span>
                <span class="text">Home</span>
            </RouterLink>
            <RouterLink :to="{ name: 'Projects' }" class="button">
                <span class="md-icons">
                    <i class="mdi mdi-file-cabinet"></i>
                </span>
                <span class="text">Projects</span>
            </RouterLink>
            <RouterLink :to="{ name: 'Contact' }" class="button">
                <span class="md-icons">
                    <i class="mdi mdi-information-box"></i>
                </span>
                <span class="text">Contact</span>
            </RouterLink>
        </div>
    </aside>
</template>


<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

const toggleMenu = () => {
    isExpanded.value = !isExpanded.value
}
</script>


<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--darkest-green);
    color: var(--lightest-teal);

    transition: 0.2s ease-out;

    .logo {
        margin-bottom: 1rem;
        z-index: 2;
        max-width: 5rem;

        img {
            width: 2rem;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2 ease-out;

        .menu-toggle {
            transition: .190s ease-out;

            .md-icons {
                font-size: 2rem;
                color: var(--lightest-teal);
                transition: 0.2s ease-out;
            }

            &:hover {
                .md-icons {
                    color: var(--teal);
                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: 0.275s ease-out;
    }

    h3 {
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: 0.2 ease-out;

            .md-icons {
                font-size: 2rem;
                color: var(--lightest-teal);
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--lightest-teal);
                transition: 0.2s ease-out;
            }

            &:hover,
            &.router-link-exact-active {
                background-color: var(--dark-green);

                .md-icons,
                .text {
                    color: var(--lightest-teal);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--teal);
            }
        }
    }

    &.isExpanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
            z-index: 1;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .md-icons {
                margin-right: 1rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }
}

.btn-arrow {
    padding: 0;
}
</style>