import React, { useState, useCallback, useRef, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Pressable, ScrollView, RefreshControl, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as LocalAuthentication from 'expo-local-authentication';
import CreditCard from "../../components/card/Card";
import TransactionHistoryListTable from "../../components/transactionHistory/TransactionHistoryListTable";
import CardDetailsData from '../../store/cardDetails.json';
import TransactionHistoryData from '../../store/transactions.json';
import { ScreenDimension } from "../../utils/deviceDimension";
import { Ionicons } from '@expo/vector-icons';

const screenWidth = ScreenDimension.width;

export default function HomeScreen({ route }) {
    const [refreshing, setRefreshing] = useState(false);
    const [activeDot, setActiveDot] = useState(0);
    const [cardType, setCardType] = useState("credit");
    const [canView, setCanView] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);
    const isAuthenticated = route.params?.isAuthenticated || false;
    
    const navigation = useNavigation();
    if (!isAuthenticated) {
        navigation.navigate('Login')
        
    }
    
    const goToTransactionDetail = (transaction) => {
        navigation.navigate('TransactionDetail', { transaction, canView })
    }
    
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);
    
    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / screenWidth);
        setActiveDot(currentIndex);
        currentIndex == 0 
            ? setCardType("credit") 
            : setCardType("debit")
    };

    const currentCardTransactions = TransactionHistoryData.filter(transaction => transaction.type === cardType);

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
            <ScrollView
                contentContainerStyle={styles.refreshView}
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <View style={styles.cardHeaderView}>
                    <Text style={styles.cardHeader}> Cards </Text>
                </View>
                <View style={styles.cardView}>
                    <ScrollView
                        ref={scrollViewRef}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        onScroll={handleScroll}
                    >
                        {CardDetailsData.map((card) => (
                            <View style={styles.imageSize}>
                                <CreditCard
                                    cardNumber={card.cardNumber}
                                    cardHolder={card.cardHolder}
                                    expiryDate={card.expiryDate}
                                    type={card.type}
                                />
                            </View>
                        ))}
                    </ScrollView>
                    <View style={styles.dotsContainer}>
                        <TouchableOpacity
                            style={styles.pressableView}
                            onPress={() => {
                                scrollViewRef.current?.scrollTo({ x: 0, animated: true });
                                setActiveDot(0);
                                setCardType("credit");
                            }}
                        >
                            <View style={[styles.dot, activeDot === 0 ? styles.activeDot : null]}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.pressableView}
                            onPress={() => {
                                scrollViewRef.current?.scrollTo({ x: screenWidth, animated: true });
                                setActiveDot(1);
                                setCardType("debit");
                        }}
                        >
                            <View style={[styles.dot, activeDot === 1 ? styles.activeDot : null]}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.transactionHistoryViewHeader}>
                    <Text style={styles.transactionHistoryHeader}> Your spendings </Text>
                    <TouchableOpacity onPress={handleViewAmount} style={styles.eyeIconContainer}>
                        {canView
                            ? <Ionicons name="eye-outline" style={styles.eyeIcon}/>
                            : <Ionicons name="eye-off-outline" style={styles.eyeIcon}/>
                        }
                    </TouchableOpacity>
                </View>
                <ScrollView 
                    contentContainerStyle={styles.transactionHistoryContainerView}
                    showsVerticalScrollIndicator={false}
                >
                    
                    {currentCardTransactions.map((transaction) => (
                        <TouchableOpacity onPress={() => goToTransactionDetail(transaction)} style={styles.imageSize} key={transaction.id}>
                            <TransactionHistoryListTable
                                amount={transaction.amount}
                                date={transaction.date}
                                description={transaction.description}
                                type={transaction.type}
                                canView={canView}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        color: '#fff',
        fontSize: 17,
    },
    button: {
        width: 210,
        alignSelf: 'center',
        backgroundColor: '#03b97e',
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 6
    },
    cardView: {
        height: 220,
        justifyContent: 'center',
        paddingBottom: 5,
    },
    refreshView: {
        flex: 1,
        width: screenWidth,
        alignItems: 'center',
    },
    imageSize: {
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',    
    },
    cardHeaderView: {
        width: 310,
    },
    cardHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingVertical: 10,
    },
    scrollViewIndex: {
        borderColor: 'blue',
        borderWidth: 3,
        alignItems: 'center'

    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    pressableView: {
        padding: 2.5,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: '#cccccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: 'black',
    },
    transactionHistoryViewHeader: {
        width: 310,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical: 10 
    },
    transactionHistoryHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingVertical: 10,
    },
    eyeIconContainer: {
        justifyContent: 'center',
        paddingRight: 9
    },
    eyeIcon: {
        fontSize: 24,
        color: 'black',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    transactionHistoryContainerView: {
        width: screenWidth,
        alignItems: 'center',
    }
})