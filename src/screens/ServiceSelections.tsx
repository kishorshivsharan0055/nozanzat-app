import React, {createContext, useContext, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {TotalContext} from '../../App';
import SelectedQuantities from '../components/SelectedQuantity';

interface ServiceSelectionsProps {
  route: {
    params: {
      services: Array<string>;
      options: Array<string>;
    };
  };
  navigation: any;
}

const pinCode = [412101, 411001, 21001, 28981, 47823, 32324, 43242, 4324234];

export const ServiceSelections: React.FC<ServiceSelectionsProps> = ({
  route,
  navigation,
}) => {
  let total = useContext(TotalContext);
  let {services, options} = route.params;
  let len = options.length;

  const [pin_code, setPin_code] = useState(0);
  let [available, setavailable] = useState(0);

  const [SelectedItems, setSelectedItems] = useState<Array<string>>(['']);

  const checkAvailability = (pin: number) => {
    const found = pinCode.find((element) => element == pin);

    if (found == undefined) setavailable(2);
    else setavailable(1);
  };

  const onSelectedItemsChange = (selectedItems: Array<string>) => {
    setSelectedItems(selectedItems);
  };

  const selectedDryCleaningOptions = () => {
    return;
    <View>
      {options.map((el) => {
        <SelectedQuantities title={el} />;
      })}
    </View>;
  };

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

      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Select Quantity
      </Text>

      <ScrollView
        style={{
          maxHeight: '70%',
          elevation: 5,
          backgroundColor: 'white',
          padding: 10,
        }}>
        {services.find((element) => element == 'Wash and Iron (unit)') && (
          <SelectedQuantities title="Wash and Iron (unit)" />
        )}

        {services.find((element) => element == 'Wash and Iron (Kg)') && (
          <SelectedQuantities title="Wash and Iron (Kg)" />
        )}

        {services.find((element) => element == 'Wash and Fold (Kg)') && (
          <SelectedQuantities title="Wash and Fold (Kg)" />
        )}

        {services.find((element) => element == 'Dry Cleaning') && (
          <View>
            <Text style={{padding: 10, fontWeight: 'bold'}}>
              Pick Quantities for Dry CLeaning
            </Text>

            {options.map((value, index) => (
              <SelectedQuantities title={value} key={index} />
            ))}
          </View>
        )}

        <FAB
          style={styles.fab}
          label="Continue"
          color="white"
          icon={require('../images/tick.png')}
        />
      </ScrollView>

      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontWeight: 'bold',
            fontSize: 20,
            margin: 10,
          }}>
          Total
        </Text>

        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontWeight: 'bold',
            fontSize: 20,
            margin: 10,
            right: 10,
            position: 'absolute',
          }}>
          Rs. {total}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
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
