// utils/styled-components-fix/index.ts
// Importa directamente la versión CJS para evitar problemas de alias y empaquetado
import * as SC from "styled-components/dist/styled-components.cjs.js";

// En entornos ESM <-> CJS, la función styled está en `.default`, pero las clases como ServerStyleSheet
// están en el namespace directamente.
const styled = (SC as any).default || SC;

// Exportamos explícitamente los named exports de SC
export const ServerStyleSheet = SC.ServerStyleSheet;
export const css = SC.css;
export const keyframes = SC.keyframes;
export const ThemeProvider = SC.ThemeProvider;
// Si necesitas más exports: createGlobalStyle, ThemeContext, etc.

// Exportar default la función styled
export default styled;
