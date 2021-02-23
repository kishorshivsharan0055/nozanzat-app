import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {FAB} from 'react-native-paper';

interface DryCleaningOptionsProps {
  navigation: any;
  route: {
    params: {
      services: Array<string>;
      options: Array<string>;
    };
  };
}
let Options = Array<string>();
// const [Options, setOptions] = useState<Array<string>>(['', '']);

export const DryCleaningOptions: React.FC<DryCleaningOptionsProps> = ({
  route,
  navigation,
}) => {
  // const [MensOptions, setMensOptions] = useState<Array<string>>([
  //   'Shirt',
  //   'T-Shirt',
  //   'Trouser',
  //   'Suit(2 piece)',
  //   'Suit(3 piece)',
  //   'Jacket-Light',
  //   'Jacket-Medium',
  //   'Jacket-Heavy',
  //   'Kurta-Light',
  //   'Kurta-Medium',
  //   'Kurta-Heavy',
  //   'Payjama',
  //   'Leather Jacket-Heavy',
  // ]);

  // MensOptions.map((value, index) => {
  // });

  const {services} = route.params;

  return (
    <View style={styles.parent}>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontWeight: 'bold',
          fontSize: 18,
        }}>
        Select options from Dry Cleaning
      </Text>

      <ScrollView>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 10,
            }}>
            Men's
          </Text>

          <OptionCard title="Shirt" key={0} />

          <OptionCard title="T-Shirt" key={1} />
          <OptionCard title="Trouser" key={2} />
          <OptionCard title="Suit(2 piece)" key={3} />
          <OptionCard title="Suit(3 piece)" key={4} />
          <OptionCard title="T-Jacket-Light" key={5} />
          <OptionCard title="Jacket-Medium" key={6} />
          <OptionCard title="Jacket-Heavy" key={7} />
          <OptionCard title="Kurta-Light" key={9} />
          <OptionCard title="Kurta-Medium" key={10} />
          <OptionCard title="Kurta-Heavy" key={11} />
          <OptionCard title="Payjama" key={12} />
          <OptionCard title="Leather Jacket-Heavy" key={13} />

          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 10,
            }}>
            Women's
          </Text>

          {services.map((value, index) => (
            <OptionCard title={value} key={index} />
          ))}

          {/* <OptionCard title="Top-Light" key={14} />
          <OptionCard title="Top-Medium" key={15} />
          <OptionCard title="Top-Long" key={16} />
          <OptionCard title="Skirt-Medium" key={17} />
          <OptionCard title="Skirt-Long" key={18} />
          <OptionCard title="Blouse" key={19} />
          <OptionCard title="Blouse-Heavy" key={20} />
          <OptionCard title="Saree-Plain" key={21} />
          <OptionCard title="Saree Zari-Light" key={22} />
          <OptionCard title="Saree Zari-Medium" key={23} />
          <OptionCard title="Kurta-Medium" key={24} />
          <OptionCard title="Dupatta" key={25} />
          <OptionCard title="Kurta-Plain" key={26} />
          <OptionCard title="Kurta-Fancy" key={27} /> */}

          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 10,
            }}>
            Wolens's
          </Text>

          {/* <OptionCard title="Sweater-Light" key={28} />
          <OptionCard title="Sweater-Medium" key={29} />
          <OptionCard title="Sweater-Heavy" key={30} />
          <OptionCard title="Sweat Shirt" key={31} />
          <OptionCard title="Overcoat-Light" key={32} />
          <OptionCard title="Overcoat-Heavy" key={33} />
          <OptionCard title="Shawl-Light" key={34} />
          <OptionCard title="Shawl-Medium" key={35} />
          <OptionCard title="Shawl-Heavy" key={36} />
          <OptionCard title="Cardigan" key={37} />
          <OptionCard title="Blanket/Quilt-Single" key={38} />
          <OptionCard title="Blanket/Quilt-Double" key={39} />
          <OptionCard title="Winter Wear on Kg" key={40} /> */}

          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 10,
            }}>
            Non-Wearable Household Items
          </Text>

          {/* <OptionCard title="Bedsheet-Single" key={41} />
          <OptionCard title="Bedsheet-Double" key={42} />
          <OptionCard title="Curtains-Window" key={43} />
          <OptionCard title="Curtains-Door" key={44} /> */}
        </View>
      </ScrollView>

      <FAB
        style={styles.fab}
        color="white"
        icon={require('../images/tick.png')}
        onPress={() => {
          navigation.navigate('ServiceSelection', {
            services: services,
            options: Options,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10,
  },
  fab: {
    position: 'absolute',
    margin: 5,
    right: 0,
    backgroundColor: 'red',
    bottom: 0,
  },
});

interface OptionCardProps {
  title: string;
}

export const OptionCard: React.FC<OptionCardProps> = ({title}) => {
  let [color, setcolor] = useState('white');
  let [Selected, setSelected] = useState(false);
  let [colorText, setcolorText] = useState('black');

  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 40,
        justifyContent: 'center',
        elevation: 0,
        backgroundColor: color,
        padding: 10,
        margin: 2,
        borderRadius: 5,
      }}
      onPress={() => {
        Selected ? setSelected(false) : setSelected(true);
        !Selected ? setcolor('red') : setcolor('white');
        !Selected ? setcolorText('white') : setcolorText('black');

        if (!Selected) {
          setcolor('red');
          setcolorText('white');
          Options.push(title);
        } else {
          setcolor('white');
          setcolorText('black');
          let index = Options.indexOf(title);
          Options.splice(index, 1);
        }
      }}>
      <Text
        style={{fontFamily: 'Poppins-Medium', fontWeight: '900', fontSize: 15}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default {OptionCard, DryCleaningOptions};
