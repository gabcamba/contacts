import {StyleSheet} from 'react-native';

const darkMode = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: '#030303',
  },
  scrollView: {
    backgroundColor: '#030303',
    marginHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
  },
  contactContainer: {
    borderRadius: 40,
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#26282a',
    margin: 5,
  },
  contactSubContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    width: 300,
  },
  contactAvatar: {
    width: 35,
    height: 35,
  },
  contactName: {
    fontSize: 17,
    // fontWeight: 'bold',
    paddingLeft: 15,
    color: 'white',
  },
  contactNumber: {
    fontSize: 15,
    paddingLeft: 15,
    color: '#909090',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft: 20,
    flex: 1,
    shadowColor: 'black',
    paddingBottom: 20,
    paddingTop: 10,
  },
  plusButton: {
    backgroundColor: 'white',
    color: 'skyblue',
    flex: 1,
    alignSelf: 'center',
    paddingRight: 20,
  },
  mainNav: {
    backgroundColor: '#2B2D2F',
    flexDirection: 'row',
    height: 50,
  },
  subNav: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default darkMode;
