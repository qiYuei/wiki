import router from "./route.json";
import type { UserConfig,DefaultTheme } from "vitepress";
export function getLocales() {
  let locales:UserConfig<DefaultTheme.Config>['locales'] = {}
  return Object.keys(router).reduce((acc, key) => {
    acc[key] = {
      label: key,
      lang: key,
      themeConfig:{
        sidebar:router[key]
      }
    };
    return acc;
  }, locales);
}
