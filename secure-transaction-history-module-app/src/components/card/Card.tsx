import React from 'react';
import { View, Text } from 'react-native';
import { CardDetailProp } from '../../types/CardInterface';
import { styles } from './style';

const CreditCard: React.FC<CardDetailProp> = ({ cardNumber, cardHolder, expiryDate, type }) => {
  return (
    <View style={[styles.card, { backgroundColor: type === 'credit' ? '#2F2B2B' : 'orange' }]}>
      <View style={styles.cardTop}>
        <Text style={styles.cardType}>{type.toUpperCase()}</Text>
      </View>
      <View style={styles.cardMiddle}>
        <Text style={styles.cardNumber}>{cardNumber}</Text>
      </View>
      <View style={styles.cardBottom}>
        <View style={styles.cardHolder}>
            <Text style={styles.cardHolderTitle}>Card Holder Name</Text>
            <Text style={styles.cardHolderName}>{cardHolder}</Text>
        </View>
        <View style={styles.cardExpiry}>
            <Text style={styles.cardExpiryTitle}>Expiry Date</Text>
            <Text style={styles.cardExpiryDate}>{expiryDate}</Text>
        </View>
      </View>
    </View>
  );
};

export default CreditCard;
