import { getAllData } from "../controllers/getAllData.js";
import { getDataByPathParams } from "../controllers/getDataByPathParams.js";
import express from 'express';

export const apiRouter = express.Router();

apiRouter.get('/', getAllData);
apiRouter.get('/:field/:term', getDataByPathParams);

