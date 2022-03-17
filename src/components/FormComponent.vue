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
  <div class="form-container">
    <div class="title-form">
      <p>Formulário para compra de <strong> Pacote de adesivos </strong></p>
    </div>

    <form>
      <div class="stickers-options margin-top">
        <p>Selecione seus adesivos:</p>
        <div class="sticker" v-for="(sticker, index) in stickersOptions" :key="index">
          <input type="checkbox" :name="sticker" :id="sticker" />
          <label :for="sticker">{{ sticker }}</label>
        </div>
      </div>

      <div class="stickers-qtd margin-top">
        <p>Quantos adesivos de cada?</p>
        <div class="sticker-qtd-input">
          <button>-</button>
          <input readonly type="number" name="stickersQTD" v-model="form.stickersQTD" />
          <button>+</button>
        </div>
      </div>

      <div class="message margin-top">
        <p>Observação:</p>
        <textarea
          name="message"
          v-model="form.message"
          cols="40"
          rows="10"
          placeholder="Alguma dúvida? Deixe aqui!"
        ></textarea>
      </div>

      <div class="button=container margin-top">
        <button type="submit">Enviar</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: rgb(71, 68, 68);
  color: rgb(255, 255, 255);
}

.title-form {
    background-color: rgb(73, 11, 131);
    padding: 20px;
    font-size: 24px;
}

.sticker {
  margin-top: 10px;
}

.sticker input {
  margin-right: 10px;
}

.margin-top {
  margin-top: 20px;
}
</style>