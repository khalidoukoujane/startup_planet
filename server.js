import express from "express"

const PORT = 8000;

const app = express();
app.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
})