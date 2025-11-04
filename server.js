import express from "express"
import {startups} from "./data.js"

const PORT = 8000;

const app = express();
app.get("/api", (req, res) => {
	let filteredData = startups;
	const {industry, country, continent, is_seeking_funding, has_mvp} = req.query;
	if (industry) {
		filteredData =filteredData.filter(startup => 
			startup.industry.toLocaleLowerCase() === industry.toLocaleLowerCase()
		)
	}
	if (country) {
		filteredData =filteredData.filter(startup => 
			startup.country.toLocaleLowerCase() === country.toLocaleLowerCase()
		)
	}
	if (continent) {
		filteredData =filteredData.filter(startup => 
			startup.continent.toLocaleLowerCase() === continent.toLocaleLowerCase()
		)
	}
	if (is_seeking_funding) {
		filteredData =filteredData.filter(startup => 
			startup.is_seeking_funding === JSON.parse(is_seeking_funding.toLocaleLowerCase())
		)
	}
	if (has_mvp) {
		filteredData =filteredData.filter(startup => 
			startup.has_mvp === JSON.parse(has_mvp.toLocaleLowerCase())
		)
	}
	res.json(filteredData);
})
app.get("/api/:field/:term", (req, res) => {
	const { field, term } = req.params;
	const allowedFields = ['country', 'continent', 'industry'];
	if (allowedFields.includes(field)) {
		const filteredData = startups.filter(startup => 
			startup[field].toLocaleLowerCase() === term.toLocaleLowerCase()
		);
		res.json(filteredData);
	} else {
		res.status(400);
		res.json(
			{
				message: "Search field not allowed. Please use only 'country', 'continent', 'industry'"
			});
		return ;
	}
})
app.listen(PORT, () => {
	console.log(`server started on port: ${PORT}`);
}) 