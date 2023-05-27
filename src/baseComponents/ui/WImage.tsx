import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Image } from 'react-native';
import { WView } from '.';

export default class WImage extends Component {
    isStateChange: boolean;
    state: any = {
        width: 0,
        height: 0
    };
    props: any;
    image: any;

    constructor(props: any) {
        super(props);

        this.isStateChange = true;
    }

    componentDidMount = () => {
        this.isStateChange = true;
    }

    componentWillUnmount() {
        this.isStateChange = false;
    }

    static propTypes = {
        dial: PropTypes.number,
        containerStyle: PropTypes.any,
        imageStyle: PropTypes.any,
        source: PropTypes.any,
        width: PropTypes.number,
        ratio: PropTypes.number
    }

    static defaultProps = {
        dial: 5,
        width: 0,
        source: { uri: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }
    }

    _onLayout(event: any) {
        const { width, source, ratio }: any = this.props;
        const containerWidth = width ? width : event.nativeEvent.layout.width;

        if (this.props.ratio) {
            this.setState({
                width: containerWidth,
                height: containerWidth * ratio
            });
        } else {
            this.isStateChange &&
                Image.getSize(source && source.uri ? source.uri : source, (width, height) => {
                    this.setState({
                        width: containerWidth,
                        height: containerWidth * height / width
                    });
                });
        }
    }

    render() {
        const { source, containerStyle, imageStyle }: any = this.props;
        const { dial }: any = this.props;

        return (
            <WView dial={dial} onLayout={this._onLayout.bind(this)} style={[containerStyle]}>
                <Image
                    ref={ref => this.image = ref}
                    source={source}
                    style={[
                        {
                            width: this.state.width,
                            height: this.state.height
                        },
                        imageStyle
                    ]} />
            </WView>
        );
    }
}

const styles = {
    container: {

    }
}