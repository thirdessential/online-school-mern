import getBrowserLanguage from "get-browser-language";
import { parse } from "query-string";
import langPacks from "./translation";

export function getLanguage() {
  const queryLang = parse(window.location.search).hl;
  return (
    (["en", "ua", "ru"].includes(queryLang) && queryLang) ||
    window.localStorage.getItem("user_language") ||
    getBrowserLanguage().slice(0, 2) ||
    "en"
  );
}
export function getTranslations(lang, filter) {
  let result = langPacks[lang] || langPacks["en"];
  return filter ? result[filter] : result;
}

export function updateLangTag(newLang) {
  document.querySelector("html[lang]").setAttribute("lang", newLang);
  window.localStorage.setItem("user_language", newLang);
}
