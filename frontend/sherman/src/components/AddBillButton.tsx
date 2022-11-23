import {StyleSheet, Alert, TouchableHighlight, View} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import check from './check'

const AddBillButton = (onAddBill: any) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableHighlight
        onPress={() => Alert.alert('Simple Button pressed')}
        style={styles.btnClickContain}
        underlayColor="#042417">
        <AntIcon
          name="addusergroup"
          size={30}
          color="#042"
        />
      </TouchableHighlight>
    </View>
  );
};

export default AddBillButton;

const styles = StyleSheet.create({
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
