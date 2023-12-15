<script>
import Side from "./components/side.vue";
import Content from "./components/content.vue";
export default {
  name: "Home",

  // 注册组件
  components: {
    Side,
    Content,
  },

  data() {
    return {};
  },

  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成(可以访问当前this实例)
  created() {},
  // 生命周期 - 挂载完成(可以访问DOM元素)
  mounted() {},
  // 方法集合
  methods: {},
};
</script>

<template>
  <div>
    <Side />
    <Content />
  </div>
</template>

<style lang="less" scoped></style>
