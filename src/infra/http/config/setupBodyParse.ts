import express, { Application } from "express";

export async function setupBodyParse(app: Application) {
  app.use(express.json())
}