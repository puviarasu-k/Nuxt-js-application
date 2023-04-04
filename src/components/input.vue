<template>
    <div>
        <input
        class="w-96 h-10 pl-2 focus:shadow-2xl focus:shadow-orange-600/50 duration-700 border-solid outline-orange-500 border-b-[1px] rounded-sm border-black"
        required v-model="value" v-bind="$attrs">
    </div>
    
</template>
  
<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>
  
