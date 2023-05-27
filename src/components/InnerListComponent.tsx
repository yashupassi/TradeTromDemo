import React, { memo } from 'react'
import { WRow, WText, WView } from '../baseComponents/ui'
import { Utils } from '../util'
import Colors from '../color/Colors'
import PNLComponent from './PNLComponent'

function InnerListComponent({id}:any) {
    const { container } = getStyles()
    return (
        <WView style={container}>
            <WRow spaceBetween dial={5}>
                <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"600"}>{"QTY:"}</WText>
                <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"600"}>{"LPT:"}</WText>
                <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"600"}>{"VAL:"}</WText>
                <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"600"}>{"PNL:"}</WText>
            </WRow>
            <PNLComponent id={id} />
        </WView>
    )
}

const getStyles = () => {
    return ({
        container:{ 
            marginTop: Utils.scaleSize(10) 
        },
        
    })
}

export default memo(InnerListComponent)