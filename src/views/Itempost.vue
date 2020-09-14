<template>
  <div class="post">
    <select v-model="category" name="category">
      <option value>カテゴリー</option>
      <option value="トップス">トップス</option>
      <option value="ボトムス">ボトムス</option>
      <option value="シューズ">シューズ</option>
      <option value="アウター">アウター</option>
    </select>

    <select v-model="itemsize" name="itemsize">
      <option value>サイズ</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="LL">LL</option>
    </select>

    <input type="file" @change="onImageUploaded" style="display: none;" />
    <input v-on:click="sendItem" type="submit" name="botton" value="送る" />
    <img id="image" src alt="画像ここだよ" />
    <input type="file" @change="onImageUploaded" />
    <div>{{ $data }}</div>
  </div>
</template>

<script>
import { db } from "@/main";
import { firestorage } from "@/main";

export default {
  data() {
    return {
      image: null,
      category: "",
      itemsize: "",
      image_url: "",
      imageName: ""
    };
  },

  name: "home",
  methods: {
    sendItem() {
      var storageRef = firestorage.ref();
      // ファイルのパスを設定
      var mountainsRef = storageRef.child(`images/${this.imageName}`);
      mountainsRef.put(this.image).then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log(downloadURL);
          this.image_url = downloadURL;
          const item = {
            category: this.category,
            itemsize: this.itemsize,
            image_url: this.image_url
          };

          db.collection("items").add({ item });
          this.$router.push("/");
        });
      });
    },
    onImageUploaded(e) {
      // event(=e)から画像データを取得する
      var image2 = document.getElementById("image");
      image2.src = window.URL.createObjectURL(e.target.files[0]);
      const image = e.target.files[0];
      this.imageName = image.name;
      console.log(image);
      this.createImage(image);
    },
    createImage(image) {
      const reader = new FileReader();
      // imageをreaderにDataURLとしてattachする
      reader.readAsDataURL(image);
      // readAdDataURLが完了したあと実行される処理
      reader.onload = () => {
        this.image = image;
      };
    }
  }
};
</script>

<style></style>
