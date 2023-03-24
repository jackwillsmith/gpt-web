<template>
  <div class="container">
    <el-row>
      <el-col :span="12">
        <el-input
          v-model="SearchVal"
          placeholder="plese input"
          class="input-with-select"
          @keyup.enter="enterSearch"
        >
          <template #append>
            <el-button :icon="Search" @click="enterSearch" />
          </template>
        </el-input>
      </el-col>
      <el-col :span="12">
        <el-button type="primary" @click="openAdd">add</el-button>
        <el-button type="danger" @click="onDel">add</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const SearchVal = ref("");
const enterSearch = () => {};
const openAdd = () => {};
const onDel = () => {};
</script>

<style lang="scss" scoped>
.container {
  margin: 100px auto;
  width: 50%;
}

.table {
  margin: 10px 0;
}

.input-with-select {
  width: 380px;
  margin-right: 20px;
}
</style>
