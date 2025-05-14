// utils/styled-components-fix/index.d.ts
declare module "styled-components/dist/styled-components.cjs.js" {
  import * as Styled from "styled-components";

  // Re-exportar todos los named exports originales
  export * from "styled-components";

  // El default es la función styled con su interfaz de temas
  const _default: typeof Styled.default & Styled.ThemedStyledInterface<any>;
  export default _default;
}
