<template>
    <div class="inner-page">
        <div class="inner-header">
            <h2>{{ this.selectedClass.name }}</h2>
        </div>

        <div class="inner-body">
            <p>{{ this.selectedClass.description }}</p>
            <ul>
                <li>Prof: {{ this.selectedClass.professor }}</li>
                <li>Location: {{ this.selectedClass.location }}</li>
                <li>Start Date: {{ this.selectedClass.startDate }}</li>
                <li>End Date: {{ this.selectedClass.endDate }}</li>
                <li> Class Periods:
                    <ul>
                        <li v-for="period in this.selectedClass.classPeriods">
                            {{ period.day }} | {{ period.from }}
                        </li>
                    </ul>
                </li>
                <li>Color: <i class="inner-page-classColor" v-bind:style="{ backgroundColor: this.selectedClass.color }">&nbsp;</i></li>
            </ul>
        </div>

        <div class="inner-footer">
            <button class="button secondary outline small">Edit</button>
            <button class="button secondary outline small">View Homework</button>
            <button class="button secondary outline small">Delete</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['selectedClass'],

        methods: {
            init() {

            }
        },

        mounted () {
            console.log('Component Mounted...');
        },

        created () {
            console.log('Component Created...');
            this.init();
        }
    }
</script>

<style>

</style>