import { expect, test, describe, beforeAll } from "vitest";
import { mount } from "@vue/test-utils";
import FormComponent from "./FormComponent.vue";

describe("FormComponent - funções", () => {
  test("A função de adicionar stickers deve incrementar mais 1 no dado do form", () => {
    const wrapper = mount(FormComponent);
    const addSticker = wrapper.vm.addSticker;
    addSticker();
    const { stickersQTD } = wrapper.vm.form;
    expect(stickersQTD).toBe(1);
  });

  test("A função de remover stickers deve decrementar menos 1 no dado do form", () => {
    const wrapper = mount(FormComponent);
    const removeSticker = wrapper.vm.removeSticker;
    removeSticker();
    const { stickersQTD } = wrapper.vm.form;
    expect(stickersQTD).toBe(0);
  });

  describe("Função de submit", () => {
    beforeAll(() => {
      window.alert = () => {};
    });

    test("Deve retornar uma mensagem caso não haja stickers no array", () => {
      const wrapper = mount(FormComponent);
      const submit = wrapper.vm.submit;
      const response = submit();
      const expectedResponse =
        "Não é possível enviar um formulário sem stickers";
      expect(response).toBe(expectedResponse);
    });

    test("Deve retornar uma mensagem caso a quantidade de stickers seja 0", () => {
      const wrapper = mount(FormComponent);
      const submit = wrapper.vm.submit;
      wrapper.vm.form.stickers.push("React");
      wrapper.vm.form.stickersQTD = 0;
      const response = submit();
      const expectedResponse = "Adicione ao menos um sticker";
      expect(response).toBe(expectedResponse);
    });

    test("Deve retornar uma mensagem contendo o form, caso tudo tenha sido preenchido", () => {
        const wrapper = mount(FormComponent);
        const submit = wrapper.vm.submit;
        wrapper.vm.form.stickers.push("React");
        wrapper.vm.form.stickersQTD = 1;
        const response = submit();
        const expectedResponse = "Ingressos encomendados com sucesso!";
        expect(response).toBe(expectedResponse);
    });
  });
});

describe("FormComponent - dados", () => {
  test("O componente deve conter um array com os 3 stickers disponíveis", () => {
    const wrapper = mount(FormComponent);
    const { stickersOptions } = wrapper.vm;
    expect(stickersOptions).toHaveLength(3);
  });

  test("O componente deve conter um form que espera 3 dados", () => {
    const wrapper = mount(FormComponent);
    const { form } = wrapper.vm;
    expect(Object.keys(form)).toHaveLength(3);
  });

  test("A quandtidade de stickers no form deve iniciar em 0", () => {
    const wrapper = mount(FormComponent);
    const { stickersQTD } = wrapper.vm.form;
    expect(stickersQTD).toBe(0);
  });
});
