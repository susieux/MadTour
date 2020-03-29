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
        flex:1,
        padding: 30,
        //using border for debugging
        borderColor:'#00f',
        borderWidth:2,
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
        fontsize: 10,
        color: '#666',
        textAlign: 'center',
    },
    //text for the buttons
    buttonText: {
        fontSize: 15,
        color: '#222',
        textAlign: "center"
    },
    //button formatting
    button: {
        backgroundColor: '#ddd',
        paddingVertical: 20,
        borderRadius: 100
    },
    //slider formatting
    slider: {
        color:'#e00',
    },
    //separates the button selections
    buttonContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal: 20,
    },
};