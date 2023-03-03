require('./bootstrap');

import { createApp } from 'vue';
import Todo from './components/Todo';

const app = createApp({})

app.component('todo', Todo);

app.mount('#app');