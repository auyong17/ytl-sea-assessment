import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
    const navigation = useNavigation();
    const goToTransactionDetail = () => {
        navigation.navigate('TransactionDetail')
    }
    const goToTransactionHistory = () => {
        navigation.navigate('TransactionHistory')
    }

    return (
        <View style={styles.container}>
            <Text> Home Page </Text>
            <TouchableOpacity onPress={goToTransactionDetail}>
                <Text> To Transaction Detail</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToTransactionHistory}>
                <Text> To Transaction History</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        color: '#fff',
        fontSize: 17,


    },
    button: {
        backgroundColor: '#03b97e',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 6
    }
})