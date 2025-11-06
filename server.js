import express from "express"
import { apiRouter } from "./routes/apiRoutes.js";

const PORT = 8000;

const app = express();
app.use('/api', apiRouter);

app.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
}) 