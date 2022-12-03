import React from 'react';
import { ViewBase, Text, View, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({data}){

function LeftActions(){
    return(
        <View style={styles.leftAction}>
            <Text style={styles.actionText}>Concluir</Text>
        </View>
    );
}

    return(
        <Swipeable
        renderLeftActions={LeftActions}
        >
            <View style={styles.container}>
                <Text style={styles.text}> {data.tarefa} </Text>
            </View>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        paddingHorizontal: 10,
        paddingVertical: 40,
    },
    text:{
        fontSize: 17,
        color: '#222'
    },
    leftAction:{
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        flex:1,
    }
});