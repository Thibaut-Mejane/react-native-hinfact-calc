import { Text } from "react-native"
import React from 'react';
import useNetworkInfo from "../hooks/useNetworkInfo";
import NetworkIcon from "./icon/NetworkIcon";


function NetworkInfo() {
    const {isConnected} = useNetworkInfo();

    return(<NetworkIcon color={isConnected ? "#000000" : "#CFCFCF"}/>)
}

export default NetworkInfo