import express from "express";
import IndexRouter from "./items";
import UserRouter from "./users";


const routes = (app) => {
  app.use("/", IndexRouter);
  app.use("/users", UserRouter);
 
};

export default routes;