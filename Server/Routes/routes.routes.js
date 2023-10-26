import express from "express";
import { InsertEmployees } from "../Controller/EmployeesRepository.js";

const router = express.Router();

router.post("/createEmployees", InsertEmployees);

export default router;