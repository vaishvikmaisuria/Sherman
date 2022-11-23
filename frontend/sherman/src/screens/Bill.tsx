import {StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';
import React, { useState } from 'react';
import AddBillButton from '../components/AddBillButton';

const Bill: React.FC = () => {
  const [billName, setBillName] = useState<string>("")
  const [billValue, setBillValue] = useState<Number>(0)


  const onChangeBillName = (billName : string) => {
    setBillName(billName);
  }

  const onChangeBillValue = (billValue : Number) => {
    setBillValue(billValue)
  };

  return (
    <>
      <Text>Bill Name</Text> 
        <TextInput
          style={styles.input}
          onChangeText={(billtxt) => onChangeBillName(billtxt)}
          value={billName}
        />
        <Text>Bill Total Value</Text> 
        <TextInput
          style={styles.input}
          onChangeText={(billval) => onChangeBillValue(parseFloat(billval))}
          value={billValue.toString()}
          keyboardType="numeric"
        />
      <View style={styles.container}>
        <View>
          <AddBillButton />
        </View>
       
      </View>
    </>
  );
};

export default Bill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
