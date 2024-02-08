<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 title-txt">
                <h1 class="mobile">Projects</h1>
            </div>
        </section>
        <section class="row mt-3">
            <div class="col-12 col-md-4 p-1 px-3">
                <section class="row">
                    <div data-bs-toggle="modal" data-bs-target="#projectModal" @click="getProjectDetails(`Keepr`)"
                        class="col-12 project-card">
                        <img src="../assets/img/Keepr.png" class="img-size" alt="Project Image">
                        <h2 class="mt-2">Keepr</h2>
                    </div>
                </section>
            </div>
            <div class="col-12 col-md-4 p-1 px-3">
                <section class="row">
                    <div data-bs-toggle="modal" data-bs-target="#projectModal" @click="getProjectDetails(`BCW Capstone`)"
                        class="col-12 project-card">
                        <img src="../assets/img/Capstone.png" class="img-size" alt="Project Image">
                        <h2 class="mt-2">BCW Capstone</h2>
                    </div>
                </section>
            </div>
            <div class="col-12 col-md-4 p-1 px-3">
                <section class="row">
                    <div data-bs-toggle="modal" data-bs-target="#projectModal" @click="getProjectDetails(`Ionic Dex`)"
                        class="col-12 project-card">
                        <img src="../assets/img/Ionic.png" class="img-size" alt="Project Image">
                        <h2 class="mt-2">Ionic Dex</h2>
                    </div>
                </section>
            </div>
            <div class="col-12 col-md-4 p-1 px-3">
                <section class="row">
                    <div data-bs-toggle="modal" data-bs-target="#projectModal" @click="getProjectDetails(`Jot`)"
                        class="col-12 project-card">
                        <img src="../assets/img/Jot.png" class="img-size" alt="Project Image">
                        <h2 class="mt-2">Jot</h2>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { projectService } from '../services/ProjectService';
import { AppState } from '../AppState';

export default {
    setup() {
        return {
            getProjectDetails(projectName) {
                try {
                    AppState.activeProject = null;
                    projectService.getProjectDetails(projectName);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.project-card {
    cursor: pointer;
    background-color: var(--darkest-green);
    color: var(--lightest-teal);
    padding: 0.75rem 0.25rem;
    text-align: center;
    border-radius: 3.5px;
    box-shadow: 5.5px 5.5px 5px 6px gainsboro;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: var(--seafoam);
        color: var(--darkest-green);
    }
}

.title-txt {
    padding-top: .5rem;
    border-bottom: 3px solid var(--darkest-green);
    background-color: var(--seafoam);
    color: var(--darkest-green);
}

.img-size {
    height: 15rem;
    width: auto;
    object-fit: cover;
    object-position: center;
    border-radius: 3.5px;
}

@media (max-width: 1520px) {
    .img-size {
        height: 12rem;
    }
}

@media (max-width: 768px) {
    .mobile {
        text-align: center;
    }

    .img-size {
        height: 10rem;
    }
}
</style>