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
  <div class="form-container" @submit.prevent>
    <div class="title-form">
      <p>Formulário para compra de <strong> Pacote de adesivos </strong></p>
    </div>

    <form>
      <div class="stickers-options margin-top">
        <p>Selecione seus adesivos:</p>
        <div
          class="sticker"
          v-for="(sticker, index) in stickersOptions"
          :key="index"
        >
          <input type="checkbox" :name="sticker" :id="sticker" />
          <label :for="sticker">{{ sticker }}</label>
        </div>
      </div>

      <div class="stickers-qtd margin-top">
        <p>Quantos adesivos de cada?</p>
        <div class="sticker-qtd-input">
          <button>-</button>
          <input
            readonly
            type="number"
            name="stickersQTD"
            v-model="form.stickersQTD"
          />
          <button>+</button>
        </div>
      </div>

      <div class="message margin-top">
        <p>Observação:</p>
        <textarea
          name="message"
          v-model="form.message"
          placeholder="Alguma dúvida? Deixe aqui!"
        ></textarea>
      </div>

      <div class="button-container">
        <button type="submit">ENVIAR</button>
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
  border-radius: 15px;
}

.title-form {
  background-color: rgb(73, 11, 131);
  padding: 20px;
  font-size: 24px;
  border-radius: 15px 15px 0 0;
}

.sticker {
  margin-top: 10px;
}

.sticker input {
  margin-right: 10px;
}

.sticker-qtd-input {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}

.sticker-qtd-input button {
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 20px;
  background-color: rgb(63, 15, 139);
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
}

.sticker-qtd-input input {
  width: 50px;
  text-align: center;
  font-weight: bolder;
  font-size: 20px;
  padding-left: 10px;
}

.message textarea {
  margin-top: 10px;
  background-color: rgb(164, 165, 165);
  border: none;
  border-radius: 10px;
  padding: 10px;
  resize: none;
  width: 300px;
  height: 100px;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

.button-container {
  background-color: rgba(0, 0, 0, 0.5);
  width: 360px;
  margin-top: 10px;
  padding: 20px;
  border-radius: 0px 0px 15px 15px;
  text-align: end;
}

.button-container button {
  padding: 10px 20px;
  font-size: 20px;
  background-color: rgb(63, 15, 139);
  color: rgb(255, 255, 255);
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
.margin-top {
  margin-top: 20px;
  padding-left: 20px;
}
</style>