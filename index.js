/**
 * @format
 */
// index.js是整个项目的入口文件
import {AppRegistry} from 'react-native';
import App from './App';
// 这里可以直接从json里读取 对应 name 属性的值
import {name as appName} from './app.json';

// 注册app组件，函数返回app组件
AppRegistry.registerComponent(appName, () => App);
