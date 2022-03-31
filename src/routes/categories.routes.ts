import { Router } from "express"; // para criar a nossa rota
import { v4 as uuidV4 } from "uuid";

const categoriesRoutes = Router();

const categories = []; // bd

categoriesRoutes.post("/", (request, response) => {
  // recurso de categories
  const { name, description } = request.body;

  const category = {
    id: uuidV4(),
    name,
    description,
  };

  categories.push(category);

  return response.status(201).send();
});

export { categoriesRoutes };
