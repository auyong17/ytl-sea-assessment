import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as LocalAuthentication from 'expo-local-authentication';
import { ScreenDimension } from "../../utils/deviceDimension";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const screenWidth = ScreenDimension.width;

export default function TransactionDetailScreen({ route }) {
    const [canView, setCanView] = useState(route.params?.canView || false);
    const { transaction } = route.params;

    const handleViewAmount = async () => {
        if (!canView) {
            try {
                const result = await LocalAuthentication.authenticateAsync({
            });
            
            if (result.success) {
                setCanView(true);
            } else {
                console.log('Cannot View');
            }
            } catch (error) {
                console.error('Authentication error:', error);
            }
            setCanView(true);
        } else {
            setCanView(false);
        }
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.button}>
            <View>
                <Text style={[styles.header, 
                {color: transaction.amount < 0 
                    ? 'red' 
                    : 'green'
                }]}>
                    {transaction.amount < 0 
                        ? "You've spent" 
                        : "You've earned"
                    }
                </Text>
            </View>
                <View style={[styles.itemContainer, styles.borderStart]}>
                    <View style={styles.icon}>
                        <FontAwesome name="dollar" size={55} color="black" marginHorizontal={12}/>
                    </View>
                    <View>
                        <Text style={
                            [styles.amountHeader, 
                            {color: transaction.amount < 0 
                                ? 'red' 
                                : 'green'
                            }]}>
                            {!canView
                                ? "RM ****" 
                                : (transaction.amount < 0 
                                    ? `- RM${Math.abs(transaction.amount).toFixed(2)}` 
                                    : `+ RM${transaction.amount.toFixed(2)}`
                                )}
                        </Text>
                    </View>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={handleViewAmount}>
                            {canView
                                ? <Ionicons name="eye-outline" style={styles.eyeIcon}/>
                                : <Ionicons name="eye-off-outline" style={styles.eyeIcon}/>
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.icon}>
                        <Ionicons name="card-outline" size={55} color="black"/>
                    </View>
                    <View>
                        <Text style={styles.detailHeader}>Type</Text>
                        <Text style={styles.desc}>{transaction.type.toUpperCase()} CARD</Text>
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={styles.icon}>
                        <Feather name="calendar" size={55} color="black" paddingTop={5}/>
                    </View>
                    <View>
                        <Text style={styles.detailHeader}>Date</Text>
                        <Text style={styles.desc}>{transaction.date}</Text>
                    </View>
                </View>
                <View style={[styles.itemContainer, styles.borderEnd]}>
                    <View style={styles.descIcon}>
                        <MaterialIcons name="description" size={55} color="black" paddingTop={7}/>
                    </View>
                    <View>
                        <Text style={styles.descHeader}>Description</Text>
                        <Text style={styles.bigDesc}>{transaction.description}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#cccccc',
        borderWidth: 0.5,
    },
    header: {
        color: 'red',
        fontSize: 50,
        padding: "20%",
        alignSelf: 'center'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderWidth: 0.25,
        paddingVertical: 5,
        borderColor: "#cccccc",
        alignItems:'center',
    },
    borderStart: {
        borderColor: "#cccccc",
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
    },
    borderEnd: {
        borderColor: "#cccccc",
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15
    },
    eyeIcon: {
        fontSize: 30,
        color: 'black',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    icon:{
        paddingHorizontal: 10,
        alignSelf: 'center',
        justifyContent:'center',
        alignItems:'center',
    },
    descIcon:{
        paddingHorizontal: 10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf: 'flex-start',
    },
    amountHeader: {
        width: screenWidth * 0.5,
        alignSelf: 'center',
        fontSize: 21,
        padding: 2,
        paddingLeft: 10,
        paddingVertical: 30,
    },
    detailHeader: {
        color: '#cccccc',
        fontSize: 20,
        padding: 4,
        paddingLeft: 10,
    },
    desc: {
        color: '#000',
        fontSize: 20,
        padding: 4,
        paddingLeft: 10,
    },
    descHeader: {
        color: '#cccccc',
        fontSize: 20,
        padding: 4,
        paddingLeft: 10,
        paddingVertical: 1,
    },
    bigDesc: {
        color: '#000',
        height: 90,
        width: 239,
        fontSize: 20,
        padding: 5,
        paddingLeft: 10,
    },
    button: {
        height: "90%",
        width: screenWidth,
        justifyContent: 'flex-end',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        borderColor: '#cccccc',
    }
})