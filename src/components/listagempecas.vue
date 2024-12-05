<template>
    <div class="peca-list">
      <h2>Lista de Peças e Valor Final do Orçamento</h2>
  
      <ul v-if="pecas.length">
        <li v-for="(peca, index) in pecas" :key="index" class="peca-item">
          <div class="peca-info">
            <strong> Peça: {{ peca.name }}</strong> - Valor: R$ {{ peca.price.toFixed(2) }}
          </div>
          <button class="remove-btn" @click="removePeca(index)">
            Remover
          </button>
        </li>
      </ul>
  
      <p v-else>Nenhuma peça cadastrada ainda.</p>
  
      <div v-if="pecas.length" class="total">
        <strong>Total: R$ {{ total.toFixed(2) }}</strong>
      </div>
    </div>
  </template>
  
  <script>
  import { pecaStore } from "../armazenamento.js";
  
  export default {
    data() {
      return {
        pecas: pecaStore.getPecas(),
      };
    },
    computed: {
      total() {
        return this.pecas.reduce((sum, peca) => sum + peca.price, 0);
      }
    },
    methods: {
      removePeca(index) {
        pecaStore.removePeca(index);
        this.pecas = [...pecaStore.getPecas()];
      },
    },
  };
  </script>
  
  <style scoped>
  .peca-list {
    max-width: 700px;
    margin: 30px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .peca-list h2 {
    text-align: center;
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .peca-item {
    background-color: #ffffff;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
  }
  
  .peca-item:hover {
    background-color: #f1f1f1;
  }
  
  .peca-info {
    font-size: 16px;
    color: #555;
  }
  
  .peca-info strong {
    color: #007bff;
    font-size: 18px;
  }
  
  .peca-item span {
    font-size: 1.2rem;
    color: #ffcc00;
    margin-left: 10px;
  }
  
  .remove-btn {
    background-color: #ff4d4d;
    border: none;
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .remove-btn:hover {
    background-color: #d43f3a;
  }
  
  .remove-btn i {
    font-size: 18px;
  }
  
  .peca-item .remove-btn {
    padding: 6px 10px;
  }
  
  .peca-item .remove-btn i {
    font-size: 16px;
  }
  
  .total {
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #007bff;
  }
  
  p {
    text-align: center;
    color: #777;
    font-size: 18px;
  }
  
  @media (max-width: 600px) {
    .peca-list {
      padding: 15px;
    }
  
    .peca-item {
      padding: 12px;
    }
  
    .remove-btn {
      padding: 6px 10px;
    }
  }
  </style>