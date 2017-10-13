import Vue from 'vue';
import routify from './routify';

export default function modularize(definitions) {
  const componentMap = definitions.components || {};
  const components = Object.keys(componentMap).reduce((map,key)=>{
    const component = componentMap[key];
    const template = component.template || '';
    const controller = component.controller || function(){};
    const instance = new controller();
    const methods = instance.methods || {};
    const definitions = {template, methods};
    map[key] = Vue.component(key, definitions);
    return map;
  }, {});
  const routes = routify(definitions.routes, components);
  return {components, routes};
}