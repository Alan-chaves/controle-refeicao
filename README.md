# Controle de Refeições

Aplicativo mobile feito com React Native e Expo para registrar refeições e acompanhar se elas estão dentro ou fora da dieta.

## Para que serve

O sistema permite:

- cadastrar uma nova refeição
- informar nome, descrição e status da refeição
- listar as refeições salvas
- visualizar os detalhes de uma refeição
- excluir refeições cadastradas
- acompanhar estatísticas simples com base nas refeições salvas

Os dados são salvos localmente no dispositivo usando `AsyncStorage`.

## Tecnologias

- React Native
- Expo
- React Navigation
- AsyncStorage

## Como rodar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js
- npm
- Expo Go no celular ou um emulador Android/iOS

### Instalação

Na pasta do projeto, instale as dependências:

```bash
npm install
```

### Executando

Para iniciar o projeto:

```bash
npm start
```

Depois disso, o Expo abrirá o painel no terminal e no navegador. A partir daí, você pode:

- pressionar `a` para abrir no Android
- pressionar `i` para abrir no iOS
- pressionar `w` para abrir no navegador
- escanear o QR Code com o app Expo Go no celular

## Scripts disponíveis

```bash
npm start
npm run android
npm run ios
npm run web
```

## Estrutura básica

```text
src/
  routes/      # configuração das rotas
  screens/     # telas do aplicativo
  storage/     # persistência local das refeições
```

## Observações

- As refeições ficam salvas localmente no aparelho/emulador.
- O projeto não usa backend neste momento.
