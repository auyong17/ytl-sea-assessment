import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function TransactionHistoryScreen() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text> Transaction History Page </Text>
            <TouchableOpacity onPress={navigation.goBack} style={styles.button} activeOpacity={0.7}>
                <Text style={styles.text}>
                    Go back
                </Text>
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