// Este arquivo vai ser o arquivo de comunicação com a API

import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333/",
});
