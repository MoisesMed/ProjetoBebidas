import React from 'react';
import {ToastAndroid} from "react-native";

class Misc extends React.Component {

    static showToast = (mensagem) => {
        ToastAndroid.showWithGravity(mensagem, ToastAndroid.SHORT, ToastAndroid.CENTER);
    };
}

export default Misc;