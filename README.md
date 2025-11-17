--- Projeto CI/CD com GitLab, Docker e Kubernetes
-- Este repositório demonstra a configuração de um pipeline de deploy automatizado utilizando:
- GitLab CI/CD** (.gitlab-ci.yml)
- Docker (Dockerfile)
- Kubernetes (k8s/deployment.yaml, k8s/service.yaml)

--- CI/CD
- O pipeline definido em .gitlab-ci.yml possui três estágios:
- Build → gera a imagem Docker da aplicação
- Test → executa testes básicos
- Deploy → aplica os manifests no Kubernetes

--- Objetivo
Este projeto foi desenvolvido como parte do desafio da DIO: “Criando um Pipeline de Deploy de uma Aplicação Utilizando GitLab, Docker e Kubernetes”.
Ele demonstra como integrar versionamento, containerização e orquestração em um fluxo de entrega contínua.

---RUN

-- Localmente:
- bash
npm install
npm start

-- Docker:
- bash
docker build -t meuusuario/meuapp:latest .
docker run -p 3000:3000 meuusuario/meuapp:latest

-- Kubernetes:
- bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml

--- Nota
Por motivos de segurança, credenciais e variáveis sensíveis foram omitidas deste repositório.
