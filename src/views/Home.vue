<template>
  <div class="home-view">

    <!-- 上传组件 -->
    <upload :customRequestPro="customRequestPro" :beforeUploadPro="beforeUploadPro"></upload>

    <!-- 启用拖拽上传组件 -->
    <!-- <upload :isDragger="true" :customRequestPro="customRequestPro" :beforeUploadPro="beforeUploadPro"></upload> -->

    <!-- 上传组件 -->
    <!-- <upload :customRequestPro="customRequestPro">
      <span slot="up-title">三水上传</span>
    </upload> -->

    <!-- 上传组件 - 自定义 -->
    <!-- <upload :customRequestPro="customRequestPro" :disabled="true"> -->
      <!-- 自定义上传UI -->
      <!-- <template slot="up-slot" slot-scope="props"> -->
        <!-- 使用内部禁用属性 -->
        <!-- <a-button :disabled="props.disabled">三水上传Pro</a-button> -->
        <!-- 不使用内部禁用属性 -->
        <!-- <a-button>三水上传Pro</a-button>
      </template>
    </upload> -->
    
  </div>
</template>

<script>
// 导入组件
import Upload from '@/components/Upload'
export default {
  components: {
    Upload
  },
  methods: {
    // 准备上传
    beforeUploadPro () {
      // return true
      return new Promise((resolve, reject) => {
        resolve()
      })
    },
    customRequestPro (data, fileJson, result) {
      // 上传完成
      setTimeout(() => {
        result(true)
      }, 2500)
    }
  }
}
</script>

<style scoped>
.home-view {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
