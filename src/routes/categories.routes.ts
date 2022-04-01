import { Router } from "express"; // para criar a nossa rota

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = []; // bd

categoriesRoutes.post("/", (request, response) => {
  // recurso de categories
  const { name, description } = request.body;

  const category = new Category();
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json({ category });
});

export { categoriesRoutes };
