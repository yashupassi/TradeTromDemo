import React, { memo, useEffect, useMemo, useState } from 'react'
import { Utils } from '../util'
import { Header, InnerListComponent, Summary } from '../components'
import { WView } from '../baseComponents/ui'
import CollapsableCard from '../components/CollapsableCard'
import { FlatList, SafeAreaView } from 'react-native'
import Colors from '../color/Colors'
import { useDispatch } from 'react-redux'
import { updateSummaryUIConstraints } from '../redux/summary/Action'
import { SUMMARY_DATA } from '../redux/Types'



function Strategies() {
    const { container, headerContainer, bodyContainer } = getStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        Utils.updateData(() => {
            dispatch(updateSummaryUIConstraints({
                [SUMMARY_DATA]: new Date().getTime()
            }))
        })
    }, [])

    const _renderItem = ({ item, index }: any) => {
        return (
            <CollapsableCard title={item?.title} subTitle={item?.subTitle} total={item?.value}>
                <InnerListComponent id={item?.id} />
            </CollapsableCard>
        )
    }

    const renderList = useMemo(() => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: Utils.scaleSize(15) }}
                data={Utils.getFilteredData()}
                renderItem={_renderItem}
                keyExtractor={(item: any) => item?.id}
            />
        )
    }, [])

    return (
        <SafeAreaView style={container}>
            <WView style={headerContainer}>
                <Header label={"Strategies"} />
            </WView>
            <WView style={bodyContainer}>
                <Summary />
                {renderList}
            </WView>
        </SafeAreaView>
    )
}
const getStyles = () => {
    return ({
        container: {
            flex: 1,
            backgroundColor: Colors.white,
        },
        headerContainer: {
            height: Utils.scaleSize(52),
        },
        bodyContainer: {
            flex: 1,
            paddingHorizontal: Utils.scaleSize(15),
            marginTop: Utils.scaleSize(10),
        },
    })
}

export default memo(Strategies)