# Imagem base
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos
COPY package*.json ./
RUN npm install
COPY . .

# Expor porta
EXPOSE 3000

# Comando de inicialização
CMD ["node", "src/app.js"]
