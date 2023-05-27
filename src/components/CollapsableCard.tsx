import React, { useState } from "react";
import {
    LayoutAnimation,
    UIManager,
    Platform,
} from "react-native";
import { WRow, WText, WTouchable } from "../baseComponents/ui";
import { Utils } from "../util";
import Colors from "../color/Colors";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}


const CollapsableCard = ({ children, title, subTitle, total }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const {container} = getStyles()

    const toggleOpen = () => {
        setIsOpen(value => !value);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    return (
        <>
        <WTouchable onPress={toggleOpen} style={container}  >
            <WText fontSize={Utils.scaleSize(13)} color={Colors.purple} fontWeight={"600"}>{title}</WText>
            <WRow style={{ marginTop: Utils.scaleSize(3) }} spaceBetween dial={5}>
                <WText fontSize={Utils.scaleSize(12)} color={subTitle === "Excited" ? Colors.yellow : Colors.darkGray} fontWeight={"400"}>{subTitle}</WText>
                <WRow dial={5}>
                    <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"400"}>{"₹"}</WText>
                    <WText fontSize={Utils.scaleSize(12)} color={Colors.green} fontWeight={"400"}>{total}</WText>
                </WRow>
            </WRow>
        </WTouchable>
        {isOpen && children}
        </>
    );
};

const getStyles = () => {
    return ({
        container: {
            borderBottomWidth: Utils.scaleSize(Platform.OS === 'ios' ? 1 : 3), 
            borderBottomColor: Colors.gray, 
            paddingVertical: Utils.scaleSize(10)
        },
        bodyContainer: {
            flex: 1,
            paddingHorizontal: Utils.scaleSize(15),
            marginTop: Utils.scaleSize(10),
        },
    })
}

export default CollapsableCard;
