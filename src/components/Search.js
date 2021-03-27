import React, { useState, useEffect } from "react";
import List from "./List";
import axios from "axios";

function Search() {
	const [value, setValue] = useState("");
	const [results, setResults] = useState([]);

	useEffect(() => {
		let timerId = null;
		if (value) {
			async function getResults() {
				const { data } = await axios.get(
					"https://en.wikipedia.org/w/api.php",
					{
						params: {
							action: "query",
							list: "search",
							prop: "pageimages",
							origin: "*",
							format: "json",
							srsearch: value,
						},
					}
				);
				console.log("data", data);
				// console.log("dataparams", data.query);
				setResults(data.query.search);
				console.log("results", results);
			}
			getResults();
		}
	}, [value]);
	return (
		<>
			<form className="ui form">
				<input
					type="text"
					placeholder="Search Wikipedia..."
					value={value}
					onChange={(e) => setValue(e.target.value)}
				></input>
			</form>
			<List results={results} />
		</>
	);
}

export default Search;
