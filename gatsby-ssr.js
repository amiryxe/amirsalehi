import * as React from 'react'
import { createElement } from "react"

const applyDarkModeClass = `
(function() {
  try {
    var mode = localStorage.getItem('darkmode');

    if (mode === 'dark' || (!('darkmode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }


  } catch (e) {}
})();
`;

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  const script = createElement("script", {
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
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
