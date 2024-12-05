<template>
  <div class="orcamento-form">
    <h2>Montar Orçamento</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="pecaName">Peça:</label>
        <input type="text" id="pecaName" v-model="pecaName" required placeholder="Informe a Peça" />
      </div>

      <div class="form-group">
        <label for="valorPeca">Valor da Peça:</label>
        <input 
          type="number" 
          id="valorPeca" 
          v-model.number="valorPeca" 
          required 
          placeholder="Digite o valor da Peça"
          min="0"
          step="0.01"
        />
      </div>

      <button type="submit" class="btn btn-primary">Inserir Peça</button>
    </form>
  </div>
</template>

<script>
import { pecaStore } from "../armazenamento.js";

export default {
  data() {
    return {
      pecaName: "",
      valorPeca: null
    };
  },
  methods: {
    submitForm() {
      if (!this.pecaName || this.valorPeca === null || isNaN(this.valorPeca)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
      }
      const newPeca = {
        name: this.pecaName,
        price: this.valorPeca
      };
      pecaStore.addPeca(newPeca);
      this.pecaName = "";
      this.valorPeca = null;

      alert("Peça adicionada com sucesso!");
    }
  }
};
</script>

<style scoped>
.orcamento-form {
  max-width: 500px;
  margin: 30px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.orcamento-form h2 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

input[type="text"], input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
}

input[type="text"]:focus, input[type="number"]:focus {
  outline: none;
  border-color: #007bff;
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-primary:focus {
  outline: none;
}

@media (max-width: 600px) {
  .orcamento-form {
    padding: 15px;
  }

  .btn-primary {
    font-size: 16px;
  }
}
</style>