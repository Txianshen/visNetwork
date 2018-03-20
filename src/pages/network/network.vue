<template>
  <router-view></router-view>
</template>

<script>
import Vue from 'vue'
import Network from '../../components/network'
import 'vis/dist/vis-network.min.css'

Vue.component('vis-network', Network)

export default {
  name: 'index'
}
</script>

<style scoped>

</style>
