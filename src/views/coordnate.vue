<template>
  <div class="post">
    <select v-model="category" name="category">
      <option value>カテゴリー</option>
      <option value="トップス">トップス</option>
      <option value="アウター">アウター</option>
      <option value="パンツ">パンツ</option>
      <option value="シューズ">シューズ</option>
      <option value="バッグ">バッグ</option>
    </select>

    <input type="file" @change="onImageUploaded" style="display: none;" />
    <input type="submit" name="botton" value="送る" />
    <img
      id="image"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5
      YII="
    />
    <input type="file" @change="onImageUploaded" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      submittedArticle: {
        title: "",
        description: "",
        image: null
      },
      category: "",
      itemsize: ""
    };
  },
  methods: {
    sendItem() {
      const item = {
        category: this.category,
      };
</script>
<style>
</style>
