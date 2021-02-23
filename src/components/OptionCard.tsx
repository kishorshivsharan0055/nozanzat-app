import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

interface OptionCardProps {
  title: string;
}

export const OptionCard: React.FC<OptionCardProps> = ({title}) => {
  let [color, setcolor] = useState('white');
  let [colorText, setcolorText] = useState('black');
  let [Selected, setSelected] = useState(false);

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
      }}>
      <Text
        style={{
          color: colorText,
          fontFamily: 'Poppins-Medium',
          fontWeight: '900',
          fontSize: 15,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionCard;
