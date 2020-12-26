import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchResult from './searchResult';
import './searchComponent.css';


export default class Counter extends React.Component {

  constructor(props) {
    super(props);


    //binding user events for data binding
    this.change_cuisineType = this.change_cuisineType.bind(this);
    this.change_mealType = this.change_mealType.bind(this);
    this.change_dishType = this.change_dishType.bind(this);
    this.change_healthType = this.change_healthType.bind(this);
    this.change_searchText = this.change_searchText.bind(this);


    // initializing component state data
    this.state = {
      SearchResultDiv: "",
      cuisineType: "",
      dishType: "",
      mealType: "",
      healthType: "",
      searchText: "",
      userSearch: []

    }


  }

  applySearch = () => {


    var userSearch_temp = this.state.userSearch;

    //remove old value from usear search array
    if (userSearch_temp.length == 5) {
      userSearch_temp.splice(0, 1);
    }

    // checking for duplicate value in usersearch array
    if(!userSearch_temp.some(item => this.state.searchText === item))
      userSearch_temp.push(this.state.searchText);

      // updating usersearch array in state
      
    this.setState({ SearchResultDiv: "", userSearch: userSearch_temp });

    //loading search result component
    const timer = setTimeout(() => {
      this.setState({
        SearchResultDiv: <SearchResult
          cuisineType={this.state.cuisineType}
          mealType={this.state.mealType}
          dishType={this.state.dishType}
          healthType={this.state.healthType}
          searchText={this.state.searchText}
          userSearch={this.state.userSearch}
        />
      })
    }, 100);
    return () => clearTimeout(timer);


  }


// update search text in state
  change_searchText = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }

  // update searched cuisine type in state
  change_cuisineType = (event) => {
    this.setState({
      cuisineType: event.target.value
    })
  }

  // update searched meal type in state
  change_mealType = (event) => {
    this.setState({
      mealType: event.target.value
    })
  }

  // update searched meal type in state
  change_dishType = (event) => {
    this.setState({
      dishType: event.target.value
    })
  }

  // update searched meal type in state
  change_healthType = (event) => {
    this.setState({
      healthType: event.target.value
    })
  }


  render() {
    return (
      <div>

        <h2>Light House</h2>
        Cuisine :
        <select onChange={this.change_cuisineType}>
          <option value="">Select</option>
          <option value="American">American</option>
          <option value="Asian">Asian</option>
          <option value="British">British</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Central Europe">Central Europe</option>
          <option value="Chinese">Chinese</option>
          <option value="Eastern Europe">Eastern Europe</option>
          <option value="French">French</option>
          <option value="Indian">Indian</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="Kosher">Kosher</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Mexican">Mexican</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Nordic">Nordic</option>
          <option value="South American">South American</option>
          <option value="South East Asian">South East Asian</option>



        </select>

        <label style={{ marginLeft: "10px" }} >Meal :</label>
        <select onChange={this.change_mealType}>
          <option value="">Select</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>

        <label style={{ marginLeft: "10px" }} >Dish :</label>
        <select onChange={this.change_dishType}>
          <option value="">Select</option>
          <option value="Alcohol-cocktail">Alcohol-cocktail</option>
          <option value="Biscuits and cookies">Biscuits and cookies</option>
          <option value="Bread">Bread</option>
          <option value="Cereals">Cereals</option>
          <option value="Condiments and sauces">Condiments and sauces</option>
          <option value="Drinks">Drinks</option>
          <option value="Desserts">Desserts</option>
          <option value="Egg">Egg</option>
          <option value="Main course">Main course</option>
          <option value="Omelet">Omelet</option>
          <option value="Pancake">Pancake</option>
          <option value="Preps">Preps</option>
          <option value="Preserve">Preserve</option>
          <option value="Salad">Salad</option>
          <option value="Sandwiches">Sandwiches</option>
          <option value="Soup">Soup</option>
          <option value="Starter">Starter</option>
        </select>


        <label style={{ marginLeft: "10px" }} >Health :</label>
        <select onChange={this.change_healthType}>
          <option value="">Select</option>
          <option value="alcohol-free">Alcohol-free</option>
          <option value="immuno-supportive">Immuno-Supportive</option>
          <option value="celery-free">Celery-free</option>
          <option value="crustacean-free">Crustacean-free</option>
          <option value="Condiments and sauces">Condiments and sauces</option>
          <option value="dairy-free">Dairy</option>
          <option value="egg-free">Eggs</option>
          <option value="fish-free">Fish</option>
          <option value="fodmap-free">Fodmap-free</option>
          <option value="gluten-free">Gluten-free</option>
          <option value="keto-friendly">Keto</option>
          <option value="kidney-friendly">Kidney Friendly</option>
          <option value="kosher">Kosher</option>
          <option value="low-potassium">Low Potassium</option>
          <option value="lupine-free">Lupine-free</option>
          <option value="mustard-free">Mustard-free</option>
          <option value="No-oil-added">No-oil-added</option>
        </select>

        <input style={{ marginLeft: "10px" }} placeholder="type to search.." type="text" onChange={this.change_searchText} />


        <input type="button" value="Search" onClick={this.applySearch} id="searchButton" />

        <br>
        </br>

        {this.state.SearchResultDiv}


      </div>
    );
  }


}


