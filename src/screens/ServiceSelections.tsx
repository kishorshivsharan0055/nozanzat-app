import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import SelectedQuantities from '../components/SelectedQuantity';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {prices} from '../utils/prices';

interface ServiceSelectionsProps {}

const pinCode = [412101, 411001, 21001, 28981, 47823, 32324, 43242, 4324234];

export const ServiceSelections: React.FC<ServiceSelectionsProps> = () => {
  const [array, setArray] = useState<Array<string>>([
    'Dry Cleaning',
    'Wash and Iron (Unit)',
    'Wash and Iron (Kg)',
    'Wash and Fold (Kg)',
  ]);
  const [pin_code, setPin_code] = useState(0);
  let [available, setavailable] = useState(0);

  const [SelectedItems, setSelectedItems] = useState<Array<string>>(['']);

  const addItem = () => setArray([...array, '']);

  const checkAvailability = (pin: number) => {
    const found = pinCode.find((element) => element == pin);

    if (found == undefined) setavailable(2);
    else setavailable(1);
  };

  const onSelectedItemsChange = (selectedItems: Array<string>) => {
    setSelectedItems(selectedItems);
  };

  const items = [
    // this is the parent or 'item'
    {
      name: 'Fruits',
      id: 0,
      // these are the children or 'sub items'
      children: [
        {
          name: 'Apple',
          id: 10,
        },
        {
          name: 'Strawberry',
          id: 17,
        },
        {
          name: 'Pineapple',
          id: 13,
        },
        {
          name: 'Banana',
          id: 14,
        },
        {
          name: 'Watermelon',
          id: 15,
        },
        {
          name: 'Kiwi fruit',
          id: 16,
        },
      ],
    },
  ];

  return (
    <View style={styles.parent}>
      {/* <View>
                    <Text style={{fontFamily: 'Poppins-Medium', fontWeight: 'bold', fontSize: 20}}>Check Availability</Text>
                    
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            label="Pin Code"
                            mode='outlined'
                            style={{height: 35, width: '40%', paddingTop: 5}} 
                            onChangeText={(value) => setPin_code(parseInt(value))}   
                        />

                        <Button 
                            mode='contained'
                            color='red' 
                            style={{marginTop: 15, right: 0, position: 'absolute'}}
                            onPress={() => checkAvailability(pin_code)}                             
                        >
                            Check
                        </Button>                        
                    </View>
                    {
                        (available == 1 ? (<Text style={{color: 'green'}}>Service is Available</Text>) : null )                        
                    }
                    {
                        (available == 2 ? (<Text style={{color: 'red'}}>Service is not available</Text>) : null )
                    }
                </View> */}

      <View style={{paddingTop: 10}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Select Quantitiy
        </Text>

        {array.find((element) => element == 'Dry Cleaning') && (
          <View>
            <Text>Select options from Dry Cleaning</Text>
          </View>
        )}

        {array.find((element) => element == 'Wash and Iron (Unit)') && (
          <SelectedQuantities title="Wash and Iron (Unit)" />
        )}

        {array.find((element) => element == 'Wash and Iron (Kg)') && (
          <SelectedQuantities title="Wash and Iron (Kg)" />
        )}

        {array.find((element) => element == 'Wash and Fold (Kg)') && (
          <SelectedQuantities title="Wash and Fold (Kg)" />
        )}

        <FAB
          style={styles.fab}
          label="Continue"
          color="white"
          icon={require('../images/tick.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 5,
  },
  fab: {
    position: 'absolute',
    margin: 5,
    right: 0,
    backgroundColor: 'red',
    bottom: -80,
  },
});

export default ServiceSelections;
