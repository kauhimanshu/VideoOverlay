
import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, PixelRatio } from 'react-native';
import YouTube from 'react-native-youtube';


const YoutubePlayer = () => {

  const singleVideoId = 'YwEKIl3qQzA';
  const [containerMounted, setContainerMounted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(null);
  console.log('player', containerMounted);
  console.log('player', containerWidth);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: { width },
          },
        }) => {
          if (!containerMounted) setContainerMounted(true);
          if (containerWidth !== width) setContainerWidth(width);
        }}>
        {containerMounted && (
          <YouTube
            apiKey="AIzaSyCHcAigNnftcqGWWJQGWcPlHA_iHz0ckmA"
            videoId={singleVideoId}
            controls={1}
            style={[
              {
                height: PixelRatio.roundToNearestPixel(
                  containerWidth / (9 / 7),
                ),
              },
              styles.player,
            ]}

          />
        )}

      </ScrollView>
    </SafeAreaView>
  );
};

export default YoutubePlayer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },

  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});