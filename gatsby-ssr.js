import * as React from 'react'
import { createElement } from "react"

const applyDarkModeClass = `
(function() {
  try {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  } catch (e) {}
})();
`;

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  const script = createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
    key: 'dark-mode-script'
  })

  setPreBodyComponents([script])

  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/estedad/Estedad[KSHD,wght].woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="estedadFont"
    />,
  ])
}
