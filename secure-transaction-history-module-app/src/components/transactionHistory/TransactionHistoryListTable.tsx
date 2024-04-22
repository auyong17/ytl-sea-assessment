import React from 'react';
import { View, Text } from 'react-native';
import { TransactionProp } from '../../types/TransactionInterface';
import { styles } from './style';

const TransactionHistoryTable: React.FC<TransactionProp> = ({ amount, date, description, type, canView }) => {
  return (
     <View style={styles.scrollableContainer}>
        <View style={styles.container}>
          <View style={styles.historyDetail}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.amountView}>
            <Text style={
              [styles.amount, 
              {color: amount < 0 
                ? 'red' 
                : 'green'
              }]}>
              {!canView 
                ? "RM ****" 
                : (amount < 0 
                  ? `-RM${Math.abs(amount).toFixed(2)}` 
                  : `RM${amount.toFixed(2)}`
                  )}
            </Text>
          </View>
        </View>
      </View>
    
  );
};

export default TransactionHistoryTable;
