import theme from '@src/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import YouTubePlayer from 'react-native-youtube-iframe';

export default function ({ video }) {
  const [status, setStatus] = React.useState({});
  return (
    <View style={Styles.container}>
      {
        <YouTubePlayer
          videoId={video.keyword}// The YouTube video ID
          height={400}
          play // control playback of video with true/false
          fullscreen // control whether the video should play in fullscreen or inline
          loop // control whether the video should loop when ended
          onReady={(e) => setStatus({ isReady: true })}
          onChangeState={(e) => setStatus({ status: e.state })}
          onChangeQuality={(e) => setStatus({ quality: e.quality })}
          onError={(e) => setStatus({ error: e.error })}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          style={Styles.player}
        />
      }
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    height: 230,
    paddingHorizontal:20,
  },
  player: {
    height: '100%',
  },
});
