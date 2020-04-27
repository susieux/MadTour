//all default style information used in the formatting of the pages
import { Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

const colors = {
    // bg: '#fad1d1', //light pink for backgrounds
    // bgMid: '#ff9999', //darker pink used as a middle red for backgrounds
    // bgAccent: '#e57373', //even darker red to accent the bgMid color
    // mainFill: '#c62828', //main red for logos and important pieces
    // offwhite:'#efefef', //a very off white to be used in place of white
    // gray:'#757575',
    
    white:'#ffffff',
    black:'#212121',
    subBlack:'#202020',
    
    debugGreen:'#0f0',
    debugBlue:'#00f',
    debugYellow:'#ff0',

    pLight:'#ef5046',
    pMain:'#b6131d',
    pDark:'#7e0000',
    sLight:'#a4a4a4',
    sMain:'#757575',
    sDark:'#494949',
    
    background:'#efefef',
}

export default {
    //main view
    //the whole page
    container: {
        flex:1,
        backgroundColor: colors.white,
        // paddingVertical:10,
        paddingHorizontal:20,
        //using border for debugging
        // borderColor:colors.debugGreen,
        // borderWidth: 2,
    },
    //view inside the view
    //used to separate the pages into groups
    contentContainer: {
        flex:1.75,
        // paddingHorizontal: 10,
        alignContent: 'center',
        //using border for debugging
        // borderColor:colors.debugYellow,
        // borderWidth:2,
    },
    //special container for quiz page instead of contentContainer
    quizContainer:{
        paddingVertical:14,
        paddingHorizontal:20,
        //using border for debugging
        // backgroundColor:'#708090',
        // borderWidth:2,
    },
    //Container within the contentContainer - used mainly for quiz scroll section
    subContainer: {
        backgroundColor: colors.background,
        width: w*.8,
        borderRadius:12,
        flex:1,
        // paddingHorizontal: 40,
        paddingBottom:20,
        // justifyContent:'space-evenly',
        //shadow option
        shadowColor: '#000',
        shadowOpacity: 0.5,
        elevation: 10,
        shadowRadius: 20 ,
        shadowOffset : { width: 0, height: 2},
        //using border for debugging
        // borderColor:colors.debugBlue,
        // borderWidth:2,

    },
    //container for logo within contentContainer
    logoContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
        paddingBottom:10,
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
        height:60,
    },

    titleText: {
        fontSize: 45,
        color: colors.black,
        textAlign: 'center',
    },
    //title text
    mainText: {
        fontSize: RFValue(20,h),
        color: colors.black,
        textAlign: 'center',
    },
    //header title
    headText:{
        fontSize: RFValue(18,h),
        color: colors.subBlack,
        textAlign: "center",
    },
    //"sub" title text
    //header2
    subText: {
        fontSize: RFValue(14,h),
        color: colors.subBlack,
        textAlign: "center",
    },
    //content text
    //body
    text: {
        fontSize: RFValue(12,h),
        color: colors.black,
        textAlign: 'center',
    },
    //text for the buttons
    buttonText: {
        fontSize: RFValue(24,h),
        fontWeight:'bold',
        color: colors.offwhite,
        textAlign: "center",
    },
    eventText: {
        fontSize: RFValue(22,h),
        color: colors.subBlack,
        textAlign: 'left',
        marginBottom: 6,
        fontWeight: 'bold'
    },
    buttonHeaderEventText:{
        fontSize: RFValue(22,h),
        color: colors.subBlack,
        textAlign: 'center',
        marginBottom: 6,
        fontWeight: 'bold',
    },
    buttonEventText: {
        fontSize: RFValue(20,h),
        color: colors.subBlack,
        textAlign: 'left',
        marginBottom: 10,
        marginLeft: 20,
    },
    //button formatting
    button: {
        backgroundColor: colors.pMain,
        paddingVertical: 14,
        marginHorizontal:10,
        borderRadius:12,
        //shadow option
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 0, height: 8},
    },
    questionText:{
        fontSize: RFValue(26,h),
        fontWeight:'bold',
        lineHeight:30,
        color: colors.white,
        textAlign: 'center',
        backgroundColor:colors.pDark,
        paddingVertical:40,
        paddingHorizontal:30,
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        //using border for debugging
        // borderColor:colors.debugBlue,
        // borderWidth:2,
    },
    //slider formatting background, border
    sliderContainer:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:40,
        //using border for debugging
        // borderColor:colors.debugBlue,
        // borderWidth:2,
    },
    slider: {
        shadowColor:'#e00',
    },
    sliderEndText:{
        fontSize: RFValue(14,h),
        color: colors.black,
        justifyContent:'space-between',
        flexDirection:'row',
    },
    //different flex size for homepage button
    homeButtonContainer: {
        flex:1.1,
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal:52,
    },
     //button containers for all other buttons
    buttonContainer: {
        flex:0.2,
        flexDirection: "column",
        justifyContent: "space-around",
        paddingHorizontal:52,
    },
    eventContainer: {
        backgroundColor: colors.background,
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius:20,
        //shadow option
        shadowColor: '#000',
        shadowOpacity: 0.5,
        elevation: 10,
        shadowRadius: 20 ,
        shadowOffset : { width: 0, height: 2},
        //using border for debugging
        // borderColor:colors.debugBlue,
        // borderWidth:2,
    },
    //calendar stuff
    calendar: {
        transform: [{ scale: 1.4 }],
        marginTop: 68,
        marginRight: 50,
        margin:40,
        alignContent: "center",
        borderRadius:12,
        backgroundColor:colors.background,
        paddingTop:2,
        paddingBottom:10,
      },
};