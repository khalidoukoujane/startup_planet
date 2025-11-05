import { startups } from "../data";

export const getDataByPathParams = (req, res) => {
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
}
