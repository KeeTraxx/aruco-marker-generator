<template>
  <div>
    <label for="startIndex">StartIndex:</label>
    <input id="startIndex" type="number" v-model.number="startIndex" :step="markers">
    <label for="markers">Markers to show</label>
    <input id="markers" type="number" v-model.number="markers" min="1" max="500">
    <transition-group name="markers" tag="div" class="aruco-container">
      <div class="marker-container" v-for="i in markers" :key="i">
        <div>{{startIndex+i-1}}</div>
        <aruco-marker :id="startIndex+i-1" />
      </div>
    </transition-group>
  </div>
</template>

<script>
import ArucoMarker from './ArucoMarker'
export default {
  name: 'ArucoMarkerList',
  components: {
    ArucoMarker
  },
  data () {
    return {
      startIndex: 0,
      markers: 10
    }
  }
}
</script>

<style scoped>
div.aruco-container {
  display: flex;
  flex-wrap: wrap;
}

.marker-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
}

.marker-container > img {
  margin: 1em;
}

.markers-enter-active, .markers-leave-active {
  transition: all 300ms;
}
.markers-enter, .markers-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translate(15px, 30px);
}
</style>
