//all default style information used in the formatting of the pages
import { Dimensions } from 'react-native';
const w = Dimensions.get('screen').width;

export default {
    //main view
    //the whole page
    container: {
        flex: 1,
        backgroundColor: '#d00',
        padding: 20,
        //using border for debugging
        borderColor:'#fff',
        borderWidth: 2,
    },
    //view inside the view
    //used to separate the pages into groups
    contentContainer: {
        flex: 1,
        padding: 30,
        alignContent: 'center',
        //using border for debugging
        borderColor:'#0f0',
        borderWidth:2,
    },
    //Container within the contentContainer
    subContainer: {
        backgroundColor: '#ddd',
        width: w*.8,
        flex:1,
        padding: 30,
        //using border for debugging
        borderColor:'#00f',
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
        fontSize: 15,
        color: '#222',
        textAlign: "center"
    },
    eventText: {
        fontSize: 24,
        color: '#222',
        textAlign: 'left',
        marginBottom: 15,
        fontWeight: 'bold'
    },
    buttonEventText: {
        fontSize: 24,
        color: '#222',
        textAlign: 'left',
        marginBottom: 15,
        fontWeight: 'bold',
        marginLeft: 20
    },
    //button formatting
    button: {
        backgroundColor: '#ddd',
        paddingVertical: 20,
        borderRadius: 100,
        marginBottom: 20
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
    //background color of where calendars are
    calendar: {
        flex: 1,
        padding: 30,
        alignContent: 'center',
        //using border for debugging
        backgroundColor:'#708090',
        borderWidth:2,
    }
};