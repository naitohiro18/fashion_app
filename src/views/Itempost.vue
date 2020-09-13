<template>
  <div class="post">
    <select v-model="category" name="category">
      <option value>カテゴリー</option>
      <option value="トップス">トップス</option>
      <option value="パンツ">パンツ</option>
      <option value="シューズ">シューズ</option>
    </select>

    <select v-model="itemsize" name="itemsize">
      <option value>サイズ</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="LL">LL</option>
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
        size: this.size
      };
      console.log(item);
      const size = {};
      console.log(size);
    }
  },
  onImageUploaded(e) {
    // event(=e)から画像データを取得する
    var image2 = document.getElementById("image");
    image2.src = window.URL.createObjectURL(e.target.files[0]);
    const image = e.target.files[0];
    console.log(image);
    this.createImage(image);
  },
  createImage(image) {
    const reader = new FileReader();
    // imageをreaderにDataURLとしてattachする
    reader.readAsDataURL(image);
    // readAdDataURLが完了したあと実行される処理
    reader.onload = () => {
      this.submittedArticle.image = image;
    };
  }
};
</script>

<style></style>
