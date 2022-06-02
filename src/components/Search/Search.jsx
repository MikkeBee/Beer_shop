import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import CardGallery from "../CardGallery/CardGallery";
import classes from "./Search.module.css";
import squirrel from "../../assets/images/randomsquirrel1.webp";

const Search = () => {
  const [beers, setBeers] = useState([]);
  const [goodSearch, setGoodSearch] = useState(false);
  let { search } = useParams();
  // use this with v5
  search = search.toLowerCase().split(" ");

  useEffect(() => {
    axios
      .get("https://kaljakauppa-json.herokuapp.com/beers%22")
      .then((res) => setBeers(res.data))
      .catch((error) => console.log(error));
  }, []);

  const special = (beers, selection) => {
    return beers
      .filter((beer) => {
        return beer.beer_slug
          .toLowerCase()
          .split("-")
          .some((beer) => {
            const searchTerms = selection.map((sele) => {
              return sele.substr(0, 3);
            });
            if (!goodSearch && beer.startsWith(searchTerms)) {
              setGoodSearch(true);
            }
            return beer.startsWith(searchTerms);
          });
      })
      .map((beer) => {
        return <CardGallery key={beer.id} beer={beer} />;
      });
  };

  const getRandom = () => {
    return Math.floor(Math.random() * beers.length + 1);
  };

  return (
    <section className={classes.beerGallery}>
      {special(beers, search)}
      {!goodSearch && (
        <section className={classes.badSearch}>
          <h4>
            Unfortunately there were no matches for "{search.join(" ")}"... Feel
            free to give us a <Link to={"/contact"}>suggestion!</Link>
          </h4>
          <Link to={`/beers/${getRandom()}`}>
            <img
              className={classes.luckySquirrel}
              src={squirrel}
              alt="squirrel with beer"
            />
          </Link>
        </section>
      )}
    </section>
  );
};

export default Search;
