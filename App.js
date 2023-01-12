import {StyleSheet, StatusBar, SafeAreaView, View} from 'react-native';
import Header from './components/Header';
import List from './components/List';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#ff3300'} />
      <SafeAreaView style={styles.AndroidSafeArea}>
        <Header />
        <View style={{flex: 1}}>
          <List />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#111',
  },
});

export default App;
