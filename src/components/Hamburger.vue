<template>
  <div class='Hamburger'>
    <svg-icon icon='hamburger-opened' />
  </div>
</template>

<script setup>
</script>

<style lang='scss' scoped>
.Hamburger {
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
