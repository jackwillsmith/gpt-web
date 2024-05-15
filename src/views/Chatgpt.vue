<template>
  <div class="container">
    <div class="row clearfix">
      <div id="up_image">
        <el-form action="" method="post" enctype="multipart/form-data">
          <br />
          <p>
            问题名称: <el-input v-model="input" placeholder="Please input" />
          </p>
          <el-button type="primary" @click="openAdd">提交</el-button>
          <br />
          <div>问题答案:</div>
          <!-- <textarea v-model="answer" style="width: 1200px" readonly rows="10" cols="50" ></textarea> -->
          <textarea
            v-model="answer"
            readonly
            rows="10"
            cols="50"
            oninput="this.style.height = '';this.style.height = this.scrollHeight + 'px';"
          ></textarea>

          <br />
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { chatgpt, MyData } from "../http";

const input = ref("");
const answer = ref("");
// const openAdd = async () => {
//   let res = (await chatgpt({ ask: input.value })).data;
//   // console.log(res);
//   const data = res as MyData;
//   // console.log("data", res, "data.answer", data.answer);
//   answer.value = data.answer;
// };

const openAdd = () => {
  const url = `/chat?ask=${encodeURIComponent(input.value)}`;
  const eventSource = new EventSource(url);

  eventSource.onmessage = function(event) {
    const newData = JSON.parse(event.data);
    answer.value += newData.chunk; // 假设服务器发送的是数据片段
  };

  eventSource.onerror = function() {
    eventSource.close();
  };
};
</script>

<style class="sass">
textarea {
  resize: none;
  width: 100%;
  border: solid black 1px;
}
</style>
