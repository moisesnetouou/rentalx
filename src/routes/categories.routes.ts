import { Router } from "express"; // para criar a nossa rota

const categoriesRoutes = Router();

const categories = []; // bd

categoriesRoutes.post("/categories", (request, response) => {
  // recurso de categories
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response.status(201).send();
});

export { categoriesRoutes };
