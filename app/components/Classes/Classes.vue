<template>
    <div class="row">
        <classes-card></classes-card>
        <classes-inner-page></classes-inner-page>
    </div>
</template>

<script>
    import ClassesCard from './ClassesCard.vue';
    import ClassesInnerPage from './ClassesInnerPage.vue';
    import { StudiousClass } from '../../Models/StudiousClass';

    export default {
        data () {
            return {
                classes: [],
                selectedClass: {}
            }
        },

        components: {
            'classes-card': ClassesCard,
            'classes-inner-page': ClassesInnerPage
        },

        methods: {
            loadClasses () {
                let classList = StudiousClass.find({ name: 'Math' });
                this.classes.push(classList);
                console.log(classList);
            },

            selectClass () {

            }
        },

        mounted () {
            console.log('Component Mounted...');
        },

        created () {
            console.log('Component Created...');
            console.log('Loading Data...');
            this.loadClasses();
        }       
    }
</script>

<style>
    .classes-rightPadding {
        padding-right: 50px;
    }

    .classes-leftPadding {
        padding-left: 50px;
    }
</style>