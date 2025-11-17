const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello CI/CD com GitLab, Docker e Kubernetes!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Aplicação rodando na porta ${PORT}`);
});
