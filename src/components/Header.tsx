import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native';
import Utils from '../util/Utils';
import { WRow, WText, WTouchable, WView } from '../baseComponents/ui';
import Colors from '../color/Colors';

function Header({ label, leftPress, rightPress, rightLabel, showBackImg }:any) {
    const leftImg = require("../../assets/img/menu.png");
    const { container, leftIconContainer, backImgContainer, rightIconContainer } = getStyles();

    const leftIcon = useMemo(() => {

        return (
            <WTouchable onPress={leftPress} dial={5} stretch padding={[Utils.scaleSize(1), Utils.scaleSize(1)]} style={leftIconContainer}>
                <Image source={leftImg} style={ backImgContainer} resizeMode={'contain'} />
            </WTouchable>
        )
    }, [showBackImg]);

    const rightIcon = useMemo(() => {
        return (
            <WTouchable onPress={rightPress} dial={5} stretch style={rightIconContainer}>
                        <WText fontSize={Utils.scaleSize(14)} color={Colors.white} fontWeight={"bold"}>{rightLabel}</WText>
            </WTouchable>
        )
    }, [rightLabel]);

    return (
        <WRow padding={[0, Utils.scaleSize(15)]} style={container} dial={5} backgroundColor={Colors.white}>
            {leftIcon}
            <WView flex dial={5}>
                <WText fontSize={Utils.scaleSize(18)} color={Colors.black} fontWeight={"600"}>{label}</WText>
            </WView>
            {rightIcon}
        </WRow>
    )
}

const getStyles = () => {

    return ({
        container: {
            minHeight: Utils.scaleSize(56)
        },
        backImgContainer: {
            width: Utils.scaleSize(22),
            height: Utils.scaleSize(22)
        },
        leftIconContainer: {
            width: Utils.scaleSize(30),
            height: Utils.scaleSize(30)
        },
        rightIconContainer: {
            width: Utils.scaleSize(30),
            height: Utils.scaleSize(30)
        },
    })
}

Header.propTypes = {
    label: PropTypes.string,
    leftPress: PropTypes.func,
    rightPress: PropTypes.func,
    showRightIcon: PropTypes.bool
}

export default memo(Header);
