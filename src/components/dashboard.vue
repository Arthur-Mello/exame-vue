<template>
    <div class="dashboard">
      <nav class="sidebar">
        <h2>Orçamento de Peças</h2>
        <ul>
          <li>
            <router-link class="inserirPecas" to="/inserir">Montar Orçamento</router-link>
          </li>
          <li>
            <router-link class="listagemPecas" to="/listagem">Orçamento Final</router-link>
          </li>
        </ul>
      </nav>
      <main class="content">
        <router-view />
      </main>
    </div>
  </template>
  
  <style scoped>
  .dashboard {
    display: flex;
    min-height: 100vh;
    font-family: Arial, sans-serif;
  }
  
  .sidebar {
    width: 250px;
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  }
  
  .sidebar h2 {
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #34495e;
    padding-bottom: 10px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }
  
  .sidebar ul li {
    margin: 10px 0;
  }
  
  .sidebar ul li a {
    display: block;
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: #34495e;
    transition: background-color 0.3s ease;
  }
  
  .sidebar ul li a:hover {
    background-color: #1abc9c;
    color: white;
  }
  
  .sidebar button {
    width: 100%;
    padding: 10px 15px;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    background-color: #e74c3c;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .sidebar button:hover {
    background-color: #c0392b;
  }
  
  .content {
    margin-left: 250px;
    padding: 30px;
    flex: 1;
    background-color: #ecf0f1;
    overflow-y: auto;
    width: calc(100% - 250px);
  }
  
  @media (max-width: 768px) {
    .dashboard {
      flex-direction: column;
    }
  
    .sidebar {
      position: relative;
      width: 100%;
      text-align: center;
      padding: 10px;
    }
  
    .content {
      margin-left: 0;
      width: 100%;
      padding: 20px;
    }
  }
  </style>