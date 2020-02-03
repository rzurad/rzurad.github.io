import React from 'react';
import styled from 'styled-components';
import createScene from './scene';

const Container = styled.div`
    position: fixed;
    z-index: -10000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .canvas-container {
        height: 100%;
        width: 100%;
    }
`;

class Background extends React.Component {
    constructor(props) {
        super(props);

        this.containerRef = React.createRef();
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const container = this.containerRef.current;
        const video = this.videoRef.current;

        this.scene = createScene(container, video);

        if (this.props.animate) {
            this.scene.start();
        }
    }

    componentDidUpdate(prevProps) {
        const { animate } = this.props;

        if (prevProps.animate !== animate) {
            this.scene[animate ? 'start' : 'stop']();
        }
    }

    componentWillUnmount() {
        this.scene.stop();
        this.scene.destroy();
    }

    render() {
        return (
            <Container>
                <video id="video"
                    autoPlay
                    loop
                    muted
                    src="/1080p.mp4"
                    hidden
                    ref={this.videoRef}
                />
                <div
                    className="canvas-container"
                    ref={this.containerRef}
                />
            </Container>
        );
    }
}

export default Background;
