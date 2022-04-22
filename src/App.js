import { Component } from 'react';
import './App.css';
import { searchByParams, orderByParams } from './constants/defaultOptions';
import Nav from './components/home/Nav';
import Select from './components/general/Select';
import TextInput from './components/general/TextInput';
import ToggleButton from './components/general/ToggleButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: '',
      searchBy: '',
      orderBy: '',
      direction: 'asc',
      list: []
    }
  }

  onInputChange = async (e, name) => {
    let value = e.target.value;
    await this.setState({[name]:value});
    console.log(this.state)
  }

  render() {
    const {direction, searchField} = this.state;
    return (
    <div className="App">
      <Nav />
      <div className='search'>
        <Select label="Search By:" options={searchByParams} name='searchBy' onInputChange={this.onInputChange}/>

        <TextInput label="Search:" value={searchField} name='searchField' onInputChange={this.onInputChange}/>

        <Select label="Order By:" options={orderByParams} name='orderBy' onInputChange={this.onInputChange}/>

        <ToggleButton label="Direction:" value={(direction==='asc')? 1 : 0} name='direction' onInputChange={this.onInputChange}/>
      </div>
    </div>
  );
  }
}

export default App;
