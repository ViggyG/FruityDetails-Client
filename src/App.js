import { Component } from 'react';
import './App.css';
import { 
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client';
import {onError} from '@apollo/client/link/error'
import { searchByParams, orderByParams } from './constants/defaultOptions';
import Nav from './components/home/Nav';
import Select from './components/general/Select';
import TextInput from './components/general/TextInput';
import ToggleButton from './components/general/ToggleButton';
import FruitList from './components/home/FruitList';
import { API_URL } from './config';

const errorLink = onError((graphqlErrors, networkErrors) => {
  if(graphqlErrors) {
    console.log(graphqlErrors)
  }
});

const link = from([
  errorLink,
  new HttpLink({uri: API_URL})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchParams: {
        searchField: '',
        searchBy: 'name',
        orderBy: 'calories',
        direction: 'asc',
      }
    }
  }

  onInputChange = (e, name) => {
    let value = e.target.value;
    this.setState(Object.assign(this.state.searchParams, {[name]:value}));
  }

  render() {
    const {direction, searchField} = this.state.searchParams;
    return (
      <ApolloProvider client={client} >
        <div className="App">
          <Nav />
          <div className='search'>
            <Select label="Search By:" options={searchByParams} name='searchBy' onInputChange={this.onInputChange}/>

            <TextInput label="Search:" value={searchField} name='searchField' onInputChange={this.onInputChange}/>

            <Select label="Order By:" options={orderByParams} name='orderBy' onInputChange={this.onInputChange}/>

            <ToggleButton label="Direction:" value={(direction==='asc')? 1 : 0} name='direction' onInputChange={this.onInputChange}/>
          </div>
          <FruitList params={this.state.searchParams} />
        </div>
      </ApolloProvider>
  );
  }
}

export default App;
