import React from 'react';
import createScene from './scene';

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
            <>
                <video id="video"
                    autoPlay
                    loop
                    muted
                    src="/480p.mp4"
                    hidden
                    ref={this.videoRef}
                />
                <div id="canvas-container"
                    className="canvas-container"
                    ref={this.containerRef}
                />
            </>
        );
    }
}

export default Background;
