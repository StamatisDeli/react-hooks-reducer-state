import React from "react";

const Episodes = (props)=> {
  const { episodes, state } = props;

  return episodes.map(episode => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          // src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
        </section>
      </section>
    );
  });
}
export default Episodes