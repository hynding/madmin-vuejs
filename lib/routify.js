export default function routify(routes, components) {
  return (routes || []).map(route=>({
    path: route.path,
    name: route.component,
    component: components[route.component]
  }));
}