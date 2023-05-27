import { Dimensions, Platform, PixelRatio } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const isPortrait = SCREEN_HEIGHT > SCREEN_WIDTH ? true : false
const scale = (isPortrait ? SCREEN_WIDTH : SCREEN_HEIGHT) / 320;

let signInProcess: any;

let arr: any = [
    {
        id: 1,
        title: "GSA BSF Directional",
        subTitle: "Live Entered",
        value: "2,502 (1.00 %)",
        logs: [
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            }
        ]
    },
    {
        id: 2,
        title: "GSA Nifty Directional",
        subTitle: "Excited",
        value: "2,502 (1.00 %)",
        logs: [
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
        ]
    },
    {
        id: 3,
        title: "Banknifty Fighter Lite Positional",
        subTitle: "Live Entered",
        value: "2,502 (1.00 %)",
        logs: [
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
    ]
    },
    {
        id: 4,
        title: "Banknift Fighter Positional",
        subTitle: "Live Entered",
        value: "2,502 (1.00 %)",
        logs: [
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
    ]
    },
    {
        id: 5,
        title: "Overnight Miner",
        subTitle: "Excited",
        value: "2,502 (1.00 %)",
        logs: [
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
    ]
    },
    {
        id: 6,
        title: "Overnight Miner Nifty",
        subTitle: "Excited",
        value: "2,502 (1.00 %)",
        logs: [
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_CE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
            {
                itemName: 'OPTIDX_BANKNIFTY_04MAY2023_PE_45000',
                stats: {
                    qty: 0,
                    ltp: 2.30,
                    val: 0,
                    pnl: -22
                }
            },
    ]
    }
]

export default class Utils {

    static getHeightInPortraitMode = isPortrait ? SCREEN_HEIGHT : SCREEN_WIDTH;



    static isPortrait = () => {
        const {
            width,
            height,
        } = Dimensions.get('window');

        return height > width ? true : false;
    }

    static scaleSize(size: number) {
        const newSize = size * scale
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize))
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
        }
    }

    static getFilteredData() {
        const tempArr = arr?.map(({ logs, ...rest }: any) => ({ ...rest }))
        return tempArr
    }
    static getWholeData() {
        return arr
    }

    static updateData(cb: any) {
        var PNL = (fn: any, interval: any) => {
            setTimeout(() => {
                fn();
                cb();
                PNL(fn, interval);
            }, interval);
        }

        PNL(() => {
            arr = arr?.map((ele: any) => {
                ele.logs = ele?.logs?.map((item: any) => {
                    item.stats.pnl = Math.random() * 100
                    return item
                })
                return ele
            })
        }, 500)
    }

    static modifyPNLData() {

    }

}