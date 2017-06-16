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
                            <input type="text" name="name" v-model="this.newClass.name">
                        </div>

                        <div class="form-item">
                            <label>Description</label>
                            <input type="text" name="description" v-model="this.newClass.description">
                        </div>

                        <div class="form-item">
                            <label>Course Code</label>
                            <input type="text" name="courseCode" v-model="this.newClass.courseCode">
                        </div>

                        <div class="form-item">
                            <label>Professor</label>
                            <input type="text" name="professor" v-model="this.newClass.professor">
                        </div>

                        <div class="form-item">
                            <label>Location</label>
                            <input type="text" name="location" v-model="this.newClass.location">
                        </div>

                        <div class="form-item">
                            <label>Start Date</label>
                            <input type="text" name="startDate" v-model="this.newClass.startDate">
                        </div>

                        <div class="form-item">
                            <label>End Date</label>
                            <input type="text" name="endDate" v-model="this.newClass.endDate">
                        </div>

                        <div class="form-item">
                            <label>Class Periods</label>
                            <input type="text" name="classPeriods" v-model="this.newClass.classPeriods">
                        </div>

                        <div class="form-item">
                            <label>Color</label>
                            <input type="text" name="color" v-model="this.newClass.color">
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
                newClass: {
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
                alert(this.newClass.name);
                this.create();
                this.closeModal();
            },

            cancel () {
                this.clear();
                this.closeModal();
            },

            create () {
                let myClass = new StudiousClass(this.newClass);
            },

            clear () {
                this.newClass = {};
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