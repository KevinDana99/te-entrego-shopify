import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { addDocumentResponseHeaders } from "./shopify.server";
import { ServerStyleSheet } from "styled-components"; // Importa ServerStyleSheet
import { EntryContext } from "@remix-run/node";

const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  addDocumentResponseHeaders(request, responseHeaders);

  const userAgent = request.headers.get("user-agent");
  const callbackName = isbot(userAgent ?? "") ? "onAllReady" : "onShellReady";

  return new Promise((resolve, reject) => {
    const sheet = new ServerStyleSheet(); // Crea una instancia de ServerStyleSheet

    try {
      // Renderiza el servidor con renderToString
      const bodyHtml = renderToString(
        sheet.collectStyles(
          // Asegúrate de envolver tu componente con `collectStyles`
          <RemixServer context={remixContext} url={request.url} />,
        ),
      );

      // Obtén los estilos generados por styled-components
      const styles = sheet.getStyleTags();

      const html = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Shopify App</title>
            ${styles}  <!-- Inyecta los estilos aquí -->
          </head>
          <body>
            <div id="root">${bodyHtml}</div> <!-- Aquí se inyecta el contenido generado -->
          </body>
        </html>
      `;

      resolve(
        new Response(html, {
          headers: responseHeaders,
          status: responseStatusCode,
        }),
      );
    } catch (error) {
      reject(error);
    } finally {
      sheet.seal(); // Cierra la instancia de ServerStyleSheet
    }
  });
}
