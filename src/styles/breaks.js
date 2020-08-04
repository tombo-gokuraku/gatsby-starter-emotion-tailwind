import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "./../../tailwind.config.js"

const {
  theme: { screens },
} = resolveConfig(tailwindConfig)

Object.entries(screens).forEach(([key, value]) => {
  console.log(`${key} ${value}`)
  screens[key] = `@media (min-width: ${value})`
})

console.log(screens)

export screens;
