import React, {useEffect} from 'react';
import { useQuery} from '@apollo/client';
import { GET_ALL_FRUIT } from '../../graphql/Queries';
import { sortByField } from '../../controllers/fruitController';
import './FruitList.css'


function FruitList ({params}) {

    const {data} = useQuery(GET_ALL_FRUIT);
    const {orderBy, direction, searchBy, searchField} = params;

    useEffect(() => {
        console.log(data)
    },[data]);

    let sortedData = [];

    if(data) {
        sortedData = data.getAllFruit;
        //sortByField(sortedData, orderBy, direction)
    }

    if(data && searchField !== '' ) {
        //sortedData = sortedData.filter((item) => {
            //return item[searchBy].contains(searchField);
        //})
        //console.log(sortedData)
    }

    let JSXData = [];

    if(sortedData) {
        JSXData = sortedData.map((item) => {
            return (
                <div className='fruit-list-item' key={item.name}>
                    <p>Name: {item.name}</p>
                    <p>Family: {item.family}</p>
                    <p>Fat: {item.nutritions.fat}</p>
                </div>
            );
        })
    }
   
    return (
        <div className='fruit-list'>
            {JSXData}
        </div>
      );
}

export default FruitList;