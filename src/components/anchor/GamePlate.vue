<template>
    <div :class="$style.wrap">
        <div :class="$style.level">
            <template v-for="item in 4">
                <BlockVue :head-num="item"></BlockVue>
            </template>
        </div>
        <div :class="$style.level">
            <BlockVue :head-num="5"></BlockVue>
            <BlockVue :head-num="6"></BlockVue>
            <BlockVue :head-num="7"></BlockVue>
            <BlockVue :head-num="8"></BlockVue>
        </div>
    </div>
    
</template>
<script lang="ts" setup>
    import BlockVue from './Block.vue';
</script>
<style module lang="scss">
.wrap{
    display: flex;
    flex-direction: column;
    margin-left: 60px;
}
.level{
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
}

</style>