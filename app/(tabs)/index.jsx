import React, { useState } from "react"
import { View, Text } from "react-native"
import { Button } from "react-native"



export default function Home(){
    const [counter, setCounter] = useState(0)

    function updateData(){
        setCounter(counter + 1)
    }

    return (
        <View>
            <Text>Home : {counter}</Text>
            <Button title="click me" onPress={updateData}/>
        
        </View>
    )
}