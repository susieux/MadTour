//all default style information used in the formatting of the pages
import { Dimensions } from 'react-native';
const w = Dimensions.get('screen').width;

export default {
    //main view
    //the whole page
    //Colors: white: #efefef, grey: #b8b8b8, pinkwhite: #fad1d1,
    //pink: ff9999, red: c62828, redpink: d32f2f
    container: {
        flex: 1,
        backgroundColor: '#d32f2f',
        padding: 20,
        //using border for debugging
        borderColor:'#fff',
        borderWidth: 2,
    },
    //view inside the view
    //used to separate the pages into groups
    contentContainer: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 0,
        alignContent: 'center',
        //using border for debugging
        borderColor:'#b8b8b8',
        borderWidth:2,
    },
    //Container within the contentContainer
    subContainer: {
        backgroundColor: '#b8b8b8',
        width: w*.8,
        flex:1,
        padding: 30,
        //using border for debugging
        borderColor:'#efefef',
        borderWidth:2,
    },
    titleText: {
        fontSize: 45,
        color: '#222',
        textAlign: 'center',
    },
    //title text
    //header 1
    mainText: {
        fontSize: 20,
        color: '#222',
        textAlign: 'center',
    },
    //"sub" title text
    //header2
    subText: {
        fontSize: 15,
        color: '#444',
        textAlign: "center",
    },
    //content text
    //header 3
    text: {
        fontSize: 10,
        color: '#666',
        textAlign: 'center',
    },
    //text for the buttons
    buttonText: {
        fontSize: 23,
        color: '#222',
        textAlign: "center",
    },
    eventText: {
        fontSize: 23,
        color: '#222',
        textAlign: 'left',
        marginBottom: 15,
        fontWeight: 'bold'
    },
    buttonEventText: {
        fontSize: 23,
        color: '#222',
        textAlign: 'left',
        marginBottom: 15,
        fontWeight: 'bold',
        marginLeft: 20
    },
    //button formatting
    //borderRightColor
    //overlayColor
    //shadowColor Offset Opacity Radius
    //tintColor
    button: {
        backgroundColor: '#b8b8b8',
        paddingVertical: 20,
        borderRadius: 100,
        marginBottom: 20,
        borderWidth: 1,
    },
    //slider formatting background, border
    slider: {
        shadowColor:'#e00',
    },
    //separates the button selections
    buttonContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal: 20,
    },
    eventContainer: {
        backgroundColor: '#aaa',
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius:20,
    },
    //background color of where calendars are
    calendar: {
        flex: 1,
        borderRadius:20,
        padding: 30,
        paddingHorizontal: 30,
        alignContent: 'center',
        //using border for debugging
        backgroundColor:'#708090',
        borderWidth:2,
    },
    images: {
        transform: [{scale: .7}],
        marginLeft: -w/5.5
    }
};