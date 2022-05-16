import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions,TouchableHighlight} from 'react-native'
import { Button, Overlay } from 'react-native-elements';
import VideoPlayer from 'react-native-video-controls';
// import Video from 'react-native-video';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width, height } = Dimensions.get('screen')
const App = () => {
  const [visible, setVisible] = useState(false);
  const [screen, setScreen] = useState(false);
console.log(screen);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

// const overlayScreen =() =>{
//   setScreen(screen)
// }

  return (
    <View style={{ margin: 10 }}>
      <Button title="Open Overlay" onPress={toggleOverlay}  />
      <View >
        <Overlay isVisible={visible} fullScreen={screen}   >
          <VideoPlayer disableVolume={true} disableFullscreen={true} disableBack={true} source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }} style={styles.video} />
          <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => setVisible(false)}>
            <Entypo name='cross' size={33} color='grey'/>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row-reverse', marginTop: -30, marginLeft: 10 }}>
            <TouchableOpacity onPress={() => (screen === true ? setScreen(false): setScreen(true))}>
            <MaterialCommunityIcon name='arrow-top-right-bottom-left' size={29} color='grey' />
            </TouchableOpacity>
          </View>
          


        </Overlay>

      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  video: {
    // height: height,
    position: "absolute",
    top: 0,
    left: 0,
    // alignItems: "stretch",
    bottom: 0,
    right: 0,
    borderRadius: 20

  },
  button:{
    // height:'100%'
  }
 
})