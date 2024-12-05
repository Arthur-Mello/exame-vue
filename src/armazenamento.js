
let pecas = [];
export const pecaStore = {
  getPecas() {
    return pecas;
  },
  addPeca(peca) {
    pecas.push(peca);
  },
  removePeca(index) {
    pecas.splice(index, 1);
  },
};