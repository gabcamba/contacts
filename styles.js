import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  text: {
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
    backgroundColor: '#f5f5f5',
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
  },
  contactNumber: {
    fontSize: 15,
    paddingLeft: 15,
    color: '#909090',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft: 20,
    flex: 1,
    shadowColor: 'black',
    paddingBottom: 20,
    paddingTop: 10,
  },
  plusButton: {
    backgroundColor: 'black',
    color: 'skyblue',
    flex: 1,
    alignSelf: 'center',
    paddingRight: 20,
  },
  mainNav: {
    backgroundColor: 'white',
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

export default styles;
