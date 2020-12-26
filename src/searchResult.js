import React from 'react';
import './App.css';
import axios from 'axios';
import './searchResult.css';



export default class Counter extends React.Component {

  constructor(props) {
    super(props);

    //initializing search reasukt and last 5 user search data
    this.state = {
      data: [],
      userSearch: []
    }


  }

  componentDidMount() {
    this.getSearchResult();
  }

  getSearchResult = async () => {

    // fetching search result data with async request

    var res = await axios.get("https://test-es.edamam.com/search?q=" + this.props.searchText + "&cuisineType=" + this.props.cuisineType + "&health=" + this.props.healthType + "&mealType=" + this.props.mealType + "&dishType=" + this.props.dishType);
    //var res = await axios.get("/");

    res = JSON.parse(res)

    this.setState({
      data: res.hits
    })

  }

  render() {
    return (
      <div>
        <div style={{ marginTop: "40px", fontWeight: "bold" }}>{this.state.data == undefined ? 0 : this.state.data.length} results found</div>
        <table width="100%">
          <tr>
            <td style={{ width: "80%" }}>


              {this.state.data.map((item, key) =>
                <div className="recipeDiv" key={key}>

                  <img src={item.recipe.image} ></img>
                  <div>
                    <label className="recipeName">{item.recipe.label}</label>
                    <label className="spanIngredients">
                      Ingredients:

      </label>

                    <ul>
                      {item.recipe.ingredientLines.slice(0, 3).map((ingredient, ingredientkey) =>

                        <li>{ingredient}</li>

                      )}
                    </ul>
                  </div>

                </div>
              )}</td>
            <td className="lastSearchColumn">

              <div className="lastSearchDiv">
                <label className="lastSearchLabel">
                  Last 5 User Search :

      </label>
                {this.props.userSearch.map((item, key) =>
                  <div>
                    {item}
                  </div>
                )}

              </div>
            </td>
          </tr>
        </table>



      </div>
    );
  }


}


