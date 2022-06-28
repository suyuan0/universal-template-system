<template>
  <div class='app-wrapper'>
    <SideBar class='sidebar-container'></SideBar>
    <div class='main-container'>
      <div class='fixed-header'>
        <NavBar></NavBar>
      </div>
      <AppMain class='main-container'></AppMain>
    </div>
  </div>
</template>

<script setup>
import SideBar from './components/SildeBar'
import NavBar from '@/layout/components/NavBar'
import AppMain from '@/layout/components/AppMain'
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
    position: absolute;
    left: 0;
    top: 0;
  }

  .main-container {
    width: calc(100% - $SideWidth);
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    .fixed-header{
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      height: 85px;
      width: calc(100% - 210px);
    }
    .main-container{
      position: absolute;
      top: 85px;
      left: 0;
      height: calc(100% - 85px);
      width: 100%;
    }
  }
}

::-webkit-scrollbar {
  display: none;
}
</style>
