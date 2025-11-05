import { startups } from "../data";

export const getAllData = (req, res) => {
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
}
