import React, { useState } from "react";

const List = ({ results }) => {
	const musicArray = [];
	const movieArray = [];
	let uniqueMusic = [];
	let uniqueMovie = [];

	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index;
	}

	const renderedList = results.map((item) => {
		if (item.snippet.includes("film") || item.snippet.includes("movie")) {
			// console.log("movie", item);
			uniqueMovie = movieArray.filter(onlyUnique);
			movieArray.push(item);

			console.log("uniquemovie", uniqueMovie);
		}
		if (
			item.snippet.includes("band") ||
			item.snippet.includes("musician")
		) {
			uniqueMusic = musicArray.filter(onlyUnique);
			musicArray.push(item);

			// console.log(movieArray);
		}

		return (
			<div>
				{uniqueMusic.map((musicItem, i) => {
					return (
						<div className="ui segment">
							<h1 style={{ color: "red" }}>{musicItem.title}</h1>
							<h4>{musicItem.snippet}</h4>
						</div>
					);
				})}
				{uniqueMovie.map((movieItem, i) => {
					return (
						<div className="ui segment">
							<h1 style={{ color: "green" }}>
								{movieItem.title}
							</h1>
							<h4>{movieItem.snippet}</h4>
						</div>
					);
				})}
				{/* <h2>
					<a
						href={"https://en.wikipedia.org?curid=" + item.pageid}
						className="header"
						target="_blank"
						rel="noopener noreferrer"
					>
						{item.title}
					</a>
				</h2>
				<p dangerouslySetInnerHTML={{ __html: item.snippet }}></p> */}
			</div>
		);
	});
	return renderedList;
};

export default List;
