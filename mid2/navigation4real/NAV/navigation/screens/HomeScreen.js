import * as React from 'react';
import { useState , useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
    const [ data, setData] = useState([]);

    const fetch = () =>{
        console.log('maya')
        axios.get ('http://127.0.0.1:8000/student/list-create')
        .then((res)=> setData(res.data))
        .catch(err => console.log(err))

    }

    const dele =(id) => {
        axios.delete(`http://127.0.0.1:8000/student/update-delete/${id}`).then(
            fetch()
        )
    }
    useEffect (()=>{
        fetch()
    },[])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         {data.map((item)=> {
                return <View style= {{ flex: 1, alignItems: 'center'}}>
                       <Text>{item.studname}</Text>
                       <Button 
                       title='delete'
                       onPress={() => dele(item.id)}
                       />
              </View>
                })}
        </View>
    );
}

