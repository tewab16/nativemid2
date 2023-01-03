import * as React from 'react';
import { useState , useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

export default function SettingsScreen({ navigation }) {
    const [ data, setData] = useState([]);

    const fetch = () =>{
        console.log('maya')
        axios.get ('http://127.0.0.1:8000/student/list-create')
        .then((res)=> setData(res.data))
        .catch(err => console.log(err))

    }
    const dele =(id) => {
        axios.delete(`http://127.0.0.1:8000/teacher/update-delete/${id}`).then(
            fetch()
        )
    }
    useEffect (()=>{
        fetch()
    },[])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>teacher Screen</Text> */}
                {/* <Text>check</Text> */}

        {data.map((item)=>{
              return <View>
                       <Text>{item.teachname}</Text>
                       <Button 
                       title='delete'
                       onPress={() => dele(item.id)}
                       />
              </View>


                })}
        </View>
    );
}
