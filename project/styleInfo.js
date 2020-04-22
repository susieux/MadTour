//all default style information used in the formatting of the pages
import { Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const w = Dimensions.get('screen').width;

const colors = {
    bg: '#fad1d1', //light pink for backgrounds
    bgMid: '#ff9999', //darker pink used as a middle red for backgrounds
    bgAccent: '#e57373', //even darker red to accent the bgMid color
    mainFill: '#c62828', //main red for logos and important pieces
    white:'#efefef', //a very off white to be used in place of white
    black:'#101010',
    subBlack:'#202020',
    gray:'#757575',
    debugGreen:'#0f0',
    debugBlue:'#00f',
    debugYellow:'#ff0',
}

export default {
    //main view
    //the whole page
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 20,
        //using border for debugging
        borderColor:colors.debugGreen,
        borderWidth: 2,
    },
    //view inside the view
    //used to separate the pages into groups
    contentContainer: {
        flex:1.4,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignContent: 'center',
        //using border for debugging
        borderColor:colors.debugYellow,
        borderWidth:2,
    },
    //Container within the contentContainer
    subContainer: {
        backgroundColor: colors.bgMid,
        width: w*.8,
        flex:1,
        padding: 30,
        //using border for debugging
        borderColor:colors.debugBlue,
        borderWidth:2,
    },
    //container for logo within contentContainer
    logoContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
        //using border for debugging
        // borderColor:'#fff',
        // borderWidth:5,
    },
    logosquare:{
        width:240,
        height:240,
    },
    logo:{
        width:280,
        height:70,
    },

    titleText: {
        fontSize: 45,
        color: colors.black,
        textAlign: 'center',
    },
    //title text
    //header 1
    mainText: {
        fontSize: 20,
        color: colors.black,
        textAlign: 'center',
    },
    //"sub" title text
    //header2
    subText: {
        fontSize: 15,
        color: colors.subBlack,
        textAlign: "center",
    },
    //content text
    //header 3
    text: {
        fontSize: 10,
        color: colors.black,
        textAlign: 'center',
    },
    //text for the buttons
    buttonText: {
        fontSize: 23,
        color: colors.subBlack,
        textAlign: "center",
    },
    eventText: {
        fontSize: 23,
        color: colors.subBlack,
        textAlign: 'left',
        marginBottom: 15,
        fontWeight: 'bold'
    },
    buttonEventText: {
        fontSize: 23,
        color: colors.subBlack,
        textAlign: 'left',
        marginBottom: 15,
        fontWeight: 'bold',
        marginLeft: 20
    },
    //button formatting
    button: {
        backgroundColor: colors.gray,
        paddingVertical: 20,
        borderRadius: 100,
        marginVertical: 10,
        //shadow option
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 0, height: 8},
    },
    //slider formatting background, border
    slider: {
        shadowColor:'#e00',
    },
    //separates the button selections
    buttonContainer: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal:50,
    },
    eventContainer: {
        backgroundColor: '#aaa',
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius:20,
    },
    //background color of where calendars are
    calendar: {
        flex:1,
        borderRadius:20,
        padding: 30,
        paddingHorizontal: 30,
        alignContent: 'center',
        //using border for debugging
        backgroundColor:'#708090',
        borderWidth:2,
    }
};