import {StyleSheet, Text, View, Button, Alert, TextInput, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import AddBillButton from '../components/AddBillButton';
import AntIcon from 'react-native-vector-icons/AntDesign';

const Bill: React.FC = () => {
  const [billName, setBillName] = useState<string>('');
  const [billValue, setBillValue] = useState<Number>(0);
  const [splitMembers, setSplitMember] = useState<string[]>([]);

  const onChangeBillName = (billName: string) => {
    setBillName(billName);
  };

  const onChangeBillValue = (billValue: Number) => {
    setBillValue(billValue);
  };

  return (
    <>
      <Text style={styles.textName}>Bill Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={billtxt => onChangeBillName(billtxt)}
        value={billName}
      />
      <Text style={styles.textName}>Bill Total Value</Text>
      <TextInput
        style={styles.input}
        onChangeText={billval => onChangeBillValue(parseFloat(billval))}
        value={billValue.toString()}
        keyboardType="numeric"
      />

      <Text style={styles.textName}>Add user to split bill</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={billval => onChangeBillValue(parseFloat(billval))}
        value={billValue.toString()}
        keyboardType="numeric"
      />
      <View style={styles.btnContainer}>
        <TouchableHighlight
          onPress={() => Alert.alert('Simple Button pressed')}
          style={styles.btnClickContain}
          underlayColor="#042417">
          <AntIcon name="addusergroup" size={30} color="#042" />
        </TouchableHighlight>
      </View>
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
  textName: {
    marginLeft: 10,
    marginTop: 10,
  },
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
  btnContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 25,
    marginRight: 25,
   
  },
  btnClickContain: {
    borderWidth: 0.25,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 25,
   
  },
});
