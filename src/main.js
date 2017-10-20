// main.js
import './store';
import {router} from 'san-router';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import List from './components/List';



// attach 根组件 App
new App().attach(document.getElementById('app'));
// 路由规则
const routes = [
    {
        rule: '/',
        Component: Home,
        target: '#main'
    },
    {
        rule: '/list',
        Component: List,
        target: '#main'
    },
    {
        rule: '/about',
        Component: About,
        target: '#main'
    }
];

routes.forEach(route => {
    router.add(route);
});
// 启动路由
router.start();
