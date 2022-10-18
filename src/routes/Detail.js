import { useEffect } from "react";
import { json, useParams } from "react-router-dom";

function Detail() {
  const test = "";
  const name = "방충림";
  const { id } = useParams();
  console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    const test = json.data.movie.id;
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>detail</h1>
      <div>{name}</div>
      <div>{test}</div>
    </div>
  );
}

export default Detail;
