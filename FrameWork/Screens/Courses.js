import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, View, Platform, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faBook, faDownload, faBookOpen, faFilm,
    faPeopleGroup, faComment, faFunnelDollar,
    faBarsProgress, faContactCard
} from '@fortawesome/free-solid-svg-icons';
import { Theme } from '../Components/Theme';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile';
import Carousel from 'react-native-reanimated-carousel';


const carouselLinks = [
  "https://delete-accound.profiterworld.com/app-carousel-img/slide1.png",
  "https://delete-accound.profiterworld.com/app-carousel-img/slide2.png",
  "https://delete-accound.profiterworld.com/app-carousel-img/slide3.png",
  "https://delete-accound.profiterworld.com/app-carousel-img/slide4.png",
  "https://delete-accound.profiterworld.com/app-carousel-img/slide5.png",
];


export function Courses() {

  const screenWidth = Dimensions.get("screen").width



  return (
    <SafeAreaView style={styles.container}>
      <View>
                    <Text style={{ fontFamily: Theme.fonts.text600, fontSize: 20, paddingTop:15, margin:15 }}>AVAILABLE COURSES</Text>
                    <Text style={styles.welcomeText}>Learn, Grow, Explore!</Text>
                </View> 

                <View style={{ marginVertical: 10, paddingHorizontal: 20 }}>
                <Carousel
                    loop
                    width={screenWidth - 40}
                    height={170}
                    autoPlay={true}
                    data={carouselLinks}
                    style={{ borderRadius: 10 }}
                    scrollAnimationDuration={2000}
                    renderItem={({ index }) => (
                        <Image style={{ width: '100%', height: 170, borderRadius: 10, }} source={{ uri: carouselLinks[index] }} defaultSource={require("../../assets/slide4.png")} />
                    )}
                />
            </View>
            <View style={styles.gridContainer}>
                {[
                    { icon: faBook, title:"Web Development"  },
                    { icon: faBook, title: 'Data Science' },
                    { icon: faBook, title: 'Cybersecurity' },
                    { icon: faBook, title: 'App Development' },
                    { icon: faBook, title: 'JavaScripts' },
                    { icon: faBook, title: 'HTML' },
                    { icon: faBook, title: 'CSS' },
                   
                ].map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.gridItem}
                    // You can add onPress handlers here later
                    >
                        <View style={styles.gridItemContent}>
                            <FontAwesomeIcon
                                icon={item.icon}
                                size={30}
                                color="#22C55E"
                            />
                            <Text style={styles.gridItemText}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
                );
              }
 const styles = StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: 'white',
                    paddingTop: 20,
                },
                headerContainer: {
                    flexDirection: "row",
                    gap: 5,
                    alignItems: 'center',
                    marginBottom: 20,
                    paddingHorizontal: 20,
                },
                welcomeText: {
                  fontSize: 30,
                  color: Theme.colors.gray,
                  fontFamily: Theme.fonts.text600,
                  margin:15,
                  paddingTop:-70,
              },
              gridContainer: {
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                  paddingHorizontal: 10,
              },
              gridItem: {
                  width: '30%',
                  aspectRatio: 1,
                  marginVertical: 7,
                  borderRadius: 15,
                  backgroundColor: '#F0F4F8',
                  // shadowColor: '#000',
                  // shadowOffset: { width: 0, height: 2 },
                  // shadowOpacity: 0.1,
                  // shadowRadius: 4,
                  elevation: Platform.OS == "android" ? 5 : null,
              },
              gridItemContent: {
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  color: "#22C55E",
              },
              gridItemText: {
                  marginTop: 8,
                  fontSize: 14,
                  color: "#22C55E",
                  fontFamily: Theme.fonts.text600,
                  textAlign: 'center',
              },
          });