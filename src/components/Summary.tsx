import {  Image, Platform } from 'react-native'
import React, { memo } from 'react'
import { WRow, WText, WView } from '../baseComponents/ui'
import { Utils } from '../util'
import Colors from '../color/Colors'

function Summary() {
    const bottomArrow = require("../../assets/img/downArrow.png")
    const { container, dropDownBtn, arrowImg, subValueText } = getStyles()
    return (
        <WView style={container}>
            <WRow dial={5} spaceBetween>
                <WText fontSize={Utils.scaleSize(18)} color={Colors.white} fontWeight={"700"}>{"Summary"}</WText>
                <WRow style={dropDownBtn} dial={5} spaceBetween>
                    <WText fontSize={Utils.scaleSize(14)} color={Colors.white} fontWeight={"400"}>{"Expiry"}</WText>
                    <Image source={bottomArrow} style={arrowImg} resizeMode={'contain'} />
                </WRow>
            </WRow>
            <WRow style={{ marginTop: Utils.scaleSize(20) }} spaceBetween dial={5}>
                <WView dial={5}>
                    <WText fontSize={Utils.scaleSize(16)} color={Colors.white} fontWeight={"700"}>{"Capital:"}</WText>
                    <WText style={subValueText} fontSize={Utils.scaleSize(10)} color={Colors.white} fontWeight={"400"}>{"₹ 5.13 Cr"}</WText>
                </WView>
                <WView dial={5}>
                    <WText fontSize={Utils.scaleSize(16)} color={Colors.white} fontWeight={"700"}>{"P&L:"}</WText>
                    <WText style={subValueText} fontSize={Utils.scaleSize(10)} color={Colors.white} fontWeight={"400"}>{"₹ -43.66 k (-0.009%)"}</WText>
                </WView>
                <WView dial={5}>
                    <WText fontSize={Utils.scaleSize(16)} color={Colors.white} fontWeight={"700"}>{"Value:"}</WText>
                    <WText style={subValueText} fontSize={Utils.scaleSize(10)} color={Colors.white} fontWeight={"400"}>{"₹ -43.66 L (43)"}</WText>
                </WView>
            </WRow>
        </WView>
    )
}

const getStyles = () => {
    return ({
        container: {
            backgroundColor: Colors.purple,
            paddingHorizontal: Utils.scaleSize(10),
            paddingVertical: Utils.scaleSize(15),
            borderRadius: Utils.scaleSize(10),
        },
        dropDownBtn: {
            borderColor: Colors.gray,
            borderWidth: Utils.scaleSize(Platform.OS === 'ios' ? 1 : 3),
            borderRadius: Utils.scaleSize(5),
            padding: Utils.scaleSize(5),
            minWidth: Utils.scaleSize(100)
        },
        arrowImg: {
            width: Utils.scaleSize(20),
            height: Utils.scaleSize(20)
        },
        subValueText: {
            marginTop: Utils.scaleSize(5)
        }
    })
}

export default memo(Summary)