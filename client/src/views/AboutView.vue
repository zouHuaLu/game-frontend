<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <a-button type="primary">ant-design-vue</a-button>
    </div>
    <div>
      <a-date-picker />
    </div>
    <div>
      <el-button type="primary">element-plus</el-button>
    </div>
    <div>
      <el-date-picker type="date" />
    </div>
    <div>
      <van-button type="primary">vant</van-button>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
