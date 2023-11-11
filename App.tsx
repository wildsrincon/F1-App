import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { colors } from './src/constants/colors';
import racesResponse from './assets/data/races.json';

/**
 * Props for the RaceListItem component.
 */
type RaceListItemProps = {
  item: {
    competition: {
      name: string,
      location: {
        country: string;
      }
    }
  }
}

const races = racesResponse.data.races.response;

function RaceListItem({ item }: RaceListItemProps) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.datesContainer}>
        <Text style={styles.date}>03-05</Text>
        <Text style={styles.month}>NOV</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.round}>ROUND 21</Text>
        <Text style={styles.country}>{item.competition.location.country}</Text>
        <Text style={styles.description}>Formula 1 {item.competition.name} 2023</Text>
      </View>
      <Entypo name="chevron-right" size={24} color={colors.primary} />
    </View>
  );
};

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ marginTop:20 }}>
        <FlatList 
          data={races}
          renderItem={({ item }) => <RaceListItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: Platform.OS === 'android' ? 20 : 0
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    /* shadow */
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  date: {},
  month: {
    backgroundColor: 'gainsboro',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    color: 'dimgray',
    fontWeight: 'bold',
    marginTop: 5
  },
  round: {
    color: colors.primary
  },
  country: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 12,
    color: 'gray'
  },
  datesContainer: {
    padding: 10,
    marginRight: 10,
    borderRightWidth: 1,
    borderColor: 'gainsboro',
    alignItems: 'center'
  }
});
