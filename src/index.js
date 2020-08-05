import Input from "./components/input.vue"

const Components = {
  Input
};

// export default Components;

const install = function (Vue) {
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
  });
};

export default {
  install,
  Input
}

