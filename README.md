# DZMAntdvUpload

基于 antdv 的上传组件 a-upload、a-upload-dragger 进行二次封装，扩展了重复文件效验，文件大小限制，文件数量限制，视频或图片大小宽高比例限制，检测错误控制，错误自定义以及回调处理，文件检测模式等常用功能

# 使用

  ```
  <template>
    <div class="home-view">

      <!-- 上传组件 -->
      <upload :customRequestPro="customRequestPro" :beforeUploadPro="beforeUploadPro"></upload>

      <!-- 启用拖拽上传组件 -->
      <upload :isDragger="true" :customRequestPro="customRequestPro" :beforeUploadPro="beforeUploadPro"></upload>

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
        }, 2000)
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
  ```
