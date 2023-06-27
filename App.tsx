import React, { useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';

const App = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    checkInitialUrl();
    Linking.addEventListener('url', handleDeepLink);
    return () => {
      Linking.removeEventListener('url', handleDeepLink);
    };
  }, []);

  const checkInitialUrl = async () => {
    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      console.log('Initial URL:', initialUrl);
      setUrl(initialUrl);
    }
  };

  const handleDeepLink = (event: { url: string }) => {
    console.log('Deep link URL:', event.url);
    setUrl(event.url);
  };

  return (
    <View>
      <Text style={{ fontSize: 20, margin: 20 }}>URL: {url}</Text>
    </View>
  );
};

export default App;
