FROM node:18-alpine

# Exponer el puerto que tu aplicación usará (por defecto es 3000)
EXPOSE 3000

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalar OpenSSL
RUN apk add --no-cache openssl

# Copiar los archivos necesarios para instalar las dependencias
COPY package.json package-lock.json* ./

# Instalar todas las dependencias, incluidas devDependencies
RUN npm ci && npm cache clean --force

# Realizar limpieza de dependencias no necesarias para producción
RUN npm remove @shopify/cli

# Definir el entorno de producción
ENV NODE_ENV=production

# Copiar el resto del código de la aplicación
COPY . .

# Compilar la aplicación (por ejemplo, si usas TypeScript o una build paso)
RUN npm run build

# El comando para arrancar la aplicación en producción
CMD ["npm", "run", "start"]