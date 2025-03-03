<script setup>

import { RouterLink } from 'vue-router';
import JobListing from './JobListing.vue';
//import jobData from '@/jobs.json';
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios';

//const jobs = ref(jobData);
const jobs = ref([]);

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
});

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/jobs');
        jobs.value = response.data;
    } catch(error){
        console.error('Error fetching the Jobs', error);
    }
});
</script>

<template>
    <!-- Browse Jobs -->
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
            Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" 
                    :key="job.id" 
                    :job="job" 
                />

                <!-- <div v-for="job in jobs" :key="job.id" class="bg-white rounded-lg shadow-md p-4">
                    {{ job.title }}
                </div> -->
            </div>
        </div>
    </section>
    
    <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink>
    </section>
</template>