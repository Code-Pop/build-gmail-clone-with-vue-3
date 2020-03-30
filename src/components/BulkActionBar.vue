<template>
  <div>
    {{emailSelection.emails.size}}
  </div>
</template>

<script>
  import { useEmailSelection } from '../composition/useEmailSelection';

  export default {
    setup(){
      let { emailSelection } = useEmailSelection();
      
      return { emailSelection }
    }    
  }
</script>

<style scoped>

</style>