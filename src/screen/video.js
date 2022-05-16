import React, { useState } from 'react';
import {View,Text,TouchableHighlight,TouchableOpacity,StyleSheet} from 'react-native'
import { Button, Overlay } from 'react-native-elements';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const OverlayExample = () => {
  const [visible, setVisible] = useState(false);
  const [screen, setScreen] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  
  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} fullScreen={screen} onBackdropPress={toggleOverlay}  overlayStyle={{ height: 450, width: 230, borderRadius: 30, marginTop: 60, marginRight: 100 }} >
     
        <TouchableOpacity style={ screen ? styles.btnNormal : styles.btnPress}
            onPress={() => setScreen({screen: !screen})} >
            <MaterialCommunityIcon name='arrow-top-right-bottom-left' size={29} color='gray' />
            </TouchableOpacity>
      </Overlay>
    </View>
  );
};

export default OverlayExample;

const styles = StyleSheet.create({
    btnNormal: {
        
        height: '100%',
        width: '100%',
      },
      btnPress: {
       
        height: '100%',
        width: '100%',
      },
})