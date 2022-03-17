<script>
export default {
  name: "FormComponent",
  data() {
    return {
      form: {
        stickers: [],
        stickersQTD: 0,
        message: "",
      },
      stickersOptions: ["React", "Vue", "Angular"],
    };
  },
};
</script>

<template>
  <div class="title-form">
    <h3>Formulário para compra de <strong> Pacote de adesivos </strong></h3>
  </div>

  <form>
    <div class="stickers-options">
      <p>Selecione seus adesivos:</p>
      <div v-for="(sticker, index) in stickersOptions" :key="index">
        <input type="checkbox" :name="sticker" :id="sticker" />
        <label :for="sticker">{{ sticker }}</label>
      </div>
    </div>

    <div class="stickers-qtd">
      <p>Quantos adesivos de cada?</p>
      <div class="sticker-qtd-input">
        <button>-</button>
        <input type="number" name="stickersQTD" v-model="form.stickersQTD" />
        <button>+</button>
      </div>
    </div>

    <div class="message">
        <p>Observação:</p>
        <textarea name="message" v-model="form.message" cols="50" rows="10"></textarea>
    </div>
  </form>
</template>