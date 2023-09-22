import React, { useState } from 'react';
import { Button, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlipCard from 'react-native-flip-card'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-deck-swiper'


const Tab = createBottomTabNavigator();
const oxford = { uri: 'https://www.experienceoxfordshire.org/wp-content/uploads/2017/03/Experience-Oxfordshire-Oxford-compressed37-scaled.jpg' };
const image = { uri: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1200' };
const image2 = { uri: 'https://images.pexels.com/photos/2570524/pexels-photo-2570524.jpeg?auto=compress&cs=tinysrgb&w=1200' };

function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerTitleBlue}>
            Re
          </Text><Text style={styles.headerTitleBlack}>
            Card
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: -15,
            borderBottomWidth: 0.5,
            borderBottomColor: '#ccc',
            width: '150%',
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.stackListTitle}>
            Oxford Word Set
          </Text>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.levelStackCards}>
            <View style={styles.levelStackCard}>
              <ImageBackground style={styles.stackBackground} source={oxford} resizeMode="cover">
                <View style={styles.levelStackContent}>
                  <View>
                    <Text style={styles.stackContentTitle}>
                      A1 Seviye
                    </Text>
                  </View>
                  <View style={styles.stackContentBottom}>
                    <Text style={styles.stackContentUserCounter}>
                      <Ionicons name="logo-buffer" size={14} color="white" />
                      100 Items
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.levelStackCard}>
              <ImageBackground style={styles.stackBackground} source={oxford} resizeMode="cover">
                <View style={styles.levelStackContent}>
                  <View>
                    <Text style={styles.stackContentTitle}>
                      A2 Seviye
                    </Text>
                  </View>
                  <View style={styles.stackContentBottom}>

                    <Text style={styles.stackContentUserCounter}>
                      <Ionicons name="logo-buffer" size={14} color="white" />
                      100 Items
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.levelStackCard}>
              <ImageBackground style={styles.stackBackground} source={oxford} resizeMode="cover">
                <View style={styles.levelStackContent}>
                  <View>
                    <Text style={styles.stackContentTitle}>
                      B1 Seviye
                    </Text>
                  </View>
                  <View style={styles.stackContentBottom}>
                    <Text style={styles.stackContentUserCounter}>
                      <Ionicons name="logo-buffer" size={14} color="white" />
                      100 Items
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
          <Text style={styles.stackListTitle}>
            Other Word Sets
          </Text>
          <View style={styles.stackCards}>
            <View style={styles.stackCard}>
              <ImageBackground style={styles.stackBackground} source={image} resizeMode="cover">
                <View style={styles.stackContent}>
                  <View>
                    <Text style={styles.stackContentTitle}>
                      Business World
                    </Text>
                  </View>
                  <View style={styles.stackContentBottom}>

                    <Text style={styles.stackContentUserCounter}>
                      <Ionicons name="logo-buffer" size={14} color="white" />
                      100 Items
                    </Text>
                    <Text style={styles.stackContentPerson}>
                      by <Text style={styles.stackContentPersonBold}>
                        Recard
                      </Text>
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.stackCard}>
              <ImageBackground style={styles.stackBackground} source={image2} resizeMode="cover">
                <View style={styles.stackContent}>
                  <View>
                    <Text style={styles.stackContentTitle}>
                      Animal Kingdom
                    </Text>
                  </View>
                  <View style={styles.stackContentBottom}>

                    <Text style={styles.stackContentUserCounter}>
                      <Ionicons name="logo-buffer" size={14} color="white" />
                      100 Items
                    </Text>
                    <Text style={styles.stackContentPerson}>
                      by <Text style={styles.stackContentPersonBold}>
                        Recard
                      </Text>
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.stackCard}>
              <ImageBackground style={styles.stackBackground} source={image} resizeMode="cover">
                <View style={styles.stackContent}>
                  <View>
                    <Text style={styles.stackContentTitle}>
                      Business World
                    </Text>
                  </View>
                  <View style={styles.stackContentBottom}>

                    <Text style={styles.stackContentUserCounter}>
                      <Ionicons name="logo-buffer" size={14} color="white" />
                      100 Items
                    </Text>
                    <Text style={styles.stackContentPerson}>
                      by <Text style={styles.stackContentPersonBold}>
                        Recard
                      </Text>
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.stackCard}>
              <ImageBackground style={styles.stackBackground} source={image} resizeMode="cover">
                <View style={styles.stackContent}>
                  <View>
                    <Text style={styles.stackContentTitle}>
                      Business World
                    </Text>
                  </View>
                  <View style={styles.stackContentBottom}>

                    <Text style={styles.stackContentUserCounter}>
                      <Ionicons name="logo-buffer" size={14} color="white" />
                      100 Items
                    </Text>
                    <Text style={styles.stackContentPerson}>
                      by <Text style={styles.stackContentPersonBold}>
                        Recard
                      </Text>
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={{ marginBottom: 75 }}></View>
        </ScrollView>
      </View>
    </SafeAreaView>

  );
}

function StackScreen() {


  const [c, setC] = useState(0);


  const getBackgroundColor = () => {
    console.log(c);
    if (c > 10) {
      return '#bde7bd';
    } else if (c < -10) {
      return '#ffb6b3';
    } else {
      return '#fff';
    }
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SafeAreaView style={{ width: '90%', height: '100%' }}>
        <View style={styles.pageHeader}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 22, marginLeft: 10 }}>
            Oxford A1 Word Set
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Swiper
        disableTopSwipe={true}
        disableBottomSwipe={true}
      cardVerticalMargin={20}
      cardHorizontalMargin={0}
      cards={[
        'Hello', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU',
        'HAPPY', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY', 'MORE', 'OF', 'WHAT', 'MAKES',
        'YOU', 'HAPPY', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY', 'MORE', 'OF', 'WHAT',
        'MAKES', 'YOU', 'HAPPY', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'Hello'
      ]}
      renderCard={(card) => {
        return (
          <FlipCard style={[styles.flipCard]} flipHorizontal={true} flipVertical={false}>
            <View style={[styles.face, { backgroundColor: getBackgroundColor() }]}>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>{card}</Text>
              </View>
            </View>
            <View style={[styles.back,  { backgroundColor: getBackgroundColor() }]}>
              <View style={styles.cardContent}>
                <Text style={styles.cardText}>Hello</Text>
              </View>
            </View>
          </FlipCard>
        )
      }}
      onSwipedRight={(cardIndex) => {setC(0); console.log('Yes: ' + cardIndex);}}
      onSwipedLeft={(cardIndex) => {setC(0); console.log('No: ' + cardIndex);}}
      onSwiping={(value) => { setC(value) }}
      onSwipedAll={() => { setC(0) }}
      cardIndex={0}
      backgroundColor={'#4FD0E9'}
      stackSize={3}
    >
          </Swiper>
        </View>
      </SafeAreaView>
    </View>
  );
}


function AccountScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My Account!</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'My Sets') {
              iconName = focused ? 'ios-folder' : 'ios-folder-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#445d7d',
          tabBarInactiveTintColor: 'gray'
        })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="My Sets" component={StackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    marginBottom: 15,


    elevation: 4,


  },
  logo: {
    fontSize: 32,
    fontWeight: '700',
    paddingBottom: 10,


  },
  main: {
    paddingHorizontal: 15,
  },
  headerTitleBlue: {
    fontSize: 28,
    fontWeight: '600',
    color: '#445d7d',
  },
  headerTitleBlack: {
    fontSize: 28,
    fontWeight: '600',
    color: '#000',
  },
  stackListTitle: {
    fontSize: 22,
    marginVertical: 10,
    marginTop: 35,
    fontWeight: '600'
  },
  levelStackCards: {
    paddingTop: 0,
    display: 'flex',
    flexDirection: 'row',
  },
  levelStackCard: {
    marginRight: 10,
    borderRadius: 8,
    width: 150,
    overflow: 'hidden',
  },
  stackCard: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  stackBackground: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  levelStackContent: {
    padding: 15,
    backgroundColor: '#00000075',
    height: 150,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  stackContent: {
    padding: 15,
    backgroundColor: '#00000075',
    height: 200,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  stackContentTitle: {
    marginBottom: 8,
    fontWeight: '600',
    color: '#fff',
    fontSize: 18,
  },
  stackContentUserCounter: {
    color: '#fff',
    fontSize: 14,
  },
  stackContentPerson: {
    color: '#fff',
    fontSize: 14,
  },
  stackContentPersonBold: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 14,
  },
  stackContentBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardText: {
    fontSize: 32,
  },
  face: {
    marginTop: 20,
    backgroundColor: 'white',
    width: '90%',
    height: '70%',
    borderWidth: 1,
    borderColor: '#ccccc',
    borderRadius: 16,
  },
  back: {
    marginTop: 20,
    backgroundColor: 'white',
    width: '90%',
    height: '70%',
    borderWidth: 1,
    borderColor: '#ccccc',
    borderRadius: 16,
  },
  container: {
    paddingVertical: 50,
    paddingHorizontal: 16,
    backgroundColor: '#edf8ff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
