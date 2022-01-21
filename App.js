import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';
import { EmployeesView } from './src/views/employees-view'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <EmployeesView />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
});
