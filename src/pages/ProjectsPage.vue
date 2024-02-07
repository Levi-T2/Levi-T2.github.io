<template>
    <div class="container-fluid">
        <section class="row">
            <div v-for="project in projects" :key="project.title" class="col-12 col-md-4">
                {{ project }}</div>
        </section>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { projectService } from '../services/ProjectService';
import { AppState } from '../AppState';

export default {
    setup() {
        onMounted(() => {
            getProjects()
        });
        function getProjects() {
            projectService.getProjects()
        }
        return {
            projects: computed(() => AppState.projects)
        }
    }
}
</script>