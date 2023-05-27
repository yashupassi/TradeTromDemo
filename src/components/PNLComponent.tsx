import React, { memo, useMemo } from 'react'
import { WRow, WText, WView } from '../baseComponents/ui'
import { Utils } from '../util'
import Colors from '../color/Colors'
import { shallowEqual, useSelector } from 'react-redux';
import { getSummartStateToProps } from '../redux/summary/Action';
import {Platform} from 'react-native'

function PNLComponent({ id }: any) {
  const { pnList } = useSelector(getSummartStateToProps.bind(PNLComponent, id), shallowEqual);
  const { container, textContainer } = getStyles()

  const renderList = useMemo(() => {
    return (
      <>
        {pnList?.map((item:any, index:number) => {
          const stats = item?.stats
          return (
            <WView key={index} style={container}>
              <WView style={textContainer}>
                <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"400"}>{`${index + 1}. ${item?.itemName}`}</WText>
              </WView>
              <WRow style={{ marginTop: Utils.scaleSize(5) }} spaceBetween dial={5}>
                <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"400"}>{stats?.qty}</WText>
                <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"400"}>{stats?.ltp}</WText>
                <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"400"}>{stats?.val}</WText>
                <WText fontSize={Utils.scaleSize(12)} color={Colors.black} fontWeight={"400"}>{stats?.pnl?.toFixed(1)}</WText>
              </WRow>
            </WView>
          )
        })}
      </>
    )
  }, [pnList])

  return renderList
}

const getStyles = () => {
  return ({
    container: {
      paddingVertical: Utils.scaleSize(10)
    },
    textContainer: {
      borderBottomWidth: Utils.scaleSize(Platform.OS === 'ios' ? 1 : 3),
      borderBottomColor: Colors.black
    }
  })
}

export default memo(PNLComponent)