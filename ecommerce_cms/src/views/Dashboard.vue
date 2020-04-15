<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '../components/NavBar'
export default {
  name: 'dashboard',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
