import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/components/dashboard.vue';
import ListagemPecas from '@/components/listagempecas.vue';
import InserirPecas from '@/components/inserirpecas.vue';

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: 'inserir',
        name: 'Inserir Peças',
        component: InserirPecas,
      },
      {
        path: 'listagem',
        name: 'Listagem de Peças',
        component: ListagemPecas,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;