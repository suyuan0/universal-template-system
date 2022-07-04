<template>
  <div class='app-wrapper'>
    <SideBar :style='{"width":sideBarWidth}' class='sidebar-container'></SideBar>
    <div :style='{"width":`calc(100% - ${sideBarWidth})`}' class='main-container'>
      <div class='fixed-header'>
        <NavBar></NavBar>
        <TagsView></TagsView>
      </div>
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/SildeBar'
import NavBar from '@/layout/components/NavBar'
import AppMain from '@/layout/components/AppMain'
import TagsView from '@/components/TagsView'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// 计算sideBar的宽
const sideBarWidth = computed(() => {
  return store.getters.isCollapse ? '54px' : '210px'
})
</script>

<style lang='scss' scoped>
$SideWidth: 210px;
.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .sidebar-container {
    width: $SideWidth;
    height: 100%;
    background: #304156;
    overflow-Y: auto;
    -ms-overflow-style: none; /* IE 10+ */
    scrollbar-width: none; /* Firefox */
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .main-container {
    //width: v-bind(sideBarWidth) px;
    height: 100%;
    position: relative;
    margin-left: 210px;

    .fixed-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      width: calc(100% - 210px);
      background: #fff;
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
