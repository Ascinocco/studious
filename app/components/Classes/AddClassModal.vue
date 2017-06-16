<template>
    <div class="row">
        <div id="addClass-modal" class="modal-box">
            <div class="modal">
                <span class="close" v-on:click="closeModal()"></span>
                <div id="addClass-modalHeader" class="modal-header">Add Class</div>
                <div class="modal-body">
                    <div class="form">
                        <div class="form-item">
                            <label>Name</label>
                            <input type="text" name="name" v-model="this.class.name">
                        </div>

                        <div class="form-item">
                            <label>Description</label>
                            <input type="text" name="description" v-model="this.class.description">
                        </div>

                        <div class="form-item">
                            <label>Course Code</label>
                            <input type="text" name="courseCode" v-model="this.class.courseCode">
                        </div>

                        <div class="form-item">
                            <label>Professor</label>
                            <input type="text" name="professor" v-model="this.class.professor">
                        </div>

                        <div class="form-item">
                            <label>Location</label>
                            <input type="text" name="location" v-model="this.class.location">
                        </div>

                        <div class="form-item">
                            <label>Start Date</label>
                            <input type="text" name="startDate" v-model="this.class.startDate">
                        </div>

                        <div class="form-item">
                            <label>End Date</label>
                            <input type="text" name="endDate" v-model="this.class.endDate">
                        </div>

                        <div class="form-item">
                            <label>Class Periods</label>
                            <input type="text" name="classPeriods" v-model="this.class.classPeriods">
                        </div>

                        <div class="form-item">
                            <label>Color</label>
                            <input type="text" name="color" v-model="this.class.color">
                        </div>

                        <div class="form-item" style="text-align: right;">
                            <button class="button outline" v-on:click="addClass()">Save</button>
                            <button class="button secondary outline" v-on:click="cancel()">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { StudiousClass } from '../../Models/StudiousClass';

    export default {

        data () {
            return {
                class: {
                    name: '',
                    description: '',
                    courseCode: '',
                    professor: '',
                    location: '',
                    startDate: '',
                    endDate: '',
                    classPeriods: [],
                    color: ''
                }
            }
        },

        methods: {
            addClass () {
                alert(this.class.name);
                this.create();
                this.closeModal();
            },

            cancel () {
                this.clear();
                this.closeModal();
            },

            create () {
                let myClass = new StudiousClass(this.class);
            },

            clear () {
                this.class = {};
            },

            closeModal () {
                this.$emit('toggleModal');
            }
        },

        mounted () {
            console.log('Component Mounted...');
        },

        created () {
            console.log('Component Created...');
            this.clear();
        },
    }
</script>

<style>
    div#addClass-modal {
        margin-top: 2%;
    }
</style>