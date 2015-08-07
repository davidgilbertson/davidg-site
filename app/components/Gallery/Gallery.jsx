import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {isOnClient, isProd} from '../../utils';

const PhotoSwipe = require('photoswipe/dist/photoswipe.js');
const PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default.js');

if (!isProd) {
    require('./gallery.scss');
    require('./photoswipe/photoswipe.css');
    require('./photoswipe/default-skin/default-skin.css');
}

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.photos = [
            {
                w: 1680,
                h: 1120,
                src: 'http://i.imgur.com/c0G4Ffs.jpg',
                title: 'Mondrian meets Fibonacci and together they make a table'
            },
            {
                w: 3648,
                h: 1739,
                src: 'http://i.imgur.com/YjxLUSh.jpg',
                title: 'Lift in Lauterbrunnen'
            },
            {
                w: 761,
                h: 1024,
                src: 'http://i.imgur.com/OWR32gJ.jpg',
                title: 'Pencil on paper, obviously'
            },
            {
                w: 1680,
                h: 1466,
                src: 'http://i.imgur.com/SR3DSag.jpg',
                title: 'Floating panel coffee table'
            },
            {
                w: 2048,
                h: 1622,
                src: 'http://i.imgur.com/d2jcTYO.jpg',
                title: 'Piano up close and personal'
            },
            {
                w: 2048,
                h: 1365,
                src: 'http://i.imgur.com/WRZ4mZU.jpg',
                title: 'Very pepper'
            },
            {
                w: 2383,
                h: 1759,
                src: 'http://i.imgur.com/ydYdtzc.jpg',
                title: 'Liquid light in Vienna'
            }
        ];

        this.photos.forEach((photo) => {
            photo.msrc = photo.src.replace(/\.jpg$/, 'l.jpg');
        });

        this.state = {
            imageHeight: 200
        };
    }

    componentDidMount() {
        this.setState({
            imageHeight: isOnClient ? window.innerWidth / 5 : 200
        });
    }

    showGallery(index) {
        const pswpElement = document.querySelector('.pswp');

        const options = {index: index};

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.photos, options);
        gallery.init();
    }

    render() {
        const classes = classnames(
            'gallery',
            this.props.className
        );

        const photoEls = this.photos.map((img, i) => {
            return (
                <img key={i} className="gallery__thumb" height={this.state.imageHeight} src={img.msrc} onClick={this.showGallery.bind(this, i)} />
            );
        });

        // The below boilerplate and comments are from http://photoswipe.com/documentation/getting-started.html
        return (
            <section className={classes}>
                <h1 className="heading-1">Photos, sketches, paintings and furniture...</h1>

                <div className="gallery_wrapper">
                    {photoEls}
                </div>
                {/* Root element of PhotoSwipe. Must have class pswp. */}
                <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">

                    {/* Background of PhotoSwipe.
                         It's a separate element as animating opacity is faster than rgba(). */}
                    <div className="pswp__bg"></div>

                    {/* Slides wrapper with overflow:hidden. */}
                    <div className="pswp__scroll-wrap">

                        {/* Container that holds slides.
                            PhotoSwipe keeps only 3 of them in the DOM to save memory.
                            Don't modify these 3 pswp__item elements, data is added later on. */}
                        <div className="pswp__container">
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                            <div className="pswp__item"></div>
                        </div>

                        {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
                        <div className="pswp__ui pswp__ui--hidden">

                            <div className="pswp__top-bar">

                                {/*  Controls are self-explanatory. Order can be changed. */}

                                <div className="pswp__counter"></div>

                                <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

                                <button className="pswp__button pswp__button--share" title="Share"></button>

                                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                                <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                                {/* Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR */}
                                {/* element will get class pswp__preloader--active when preloader is running */}
                                <div className="pswp__preloader">
                                    <div className="pswp__preloader__icn">
                                        <div className="pswp__preloader__cut">
                                            <div className="pswp__preloader__donut"></div>
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                    <div className="pswp__share-tooltip"></div>
                                </div>

                                <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                                </button>

                                <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                                </button>

                                <div className="pswp__caption">
                                    <div className="pswp__caption__center"></div>
                                </div>

                            </div>

                        </div>

                    </div>
            </section>
        );
    }
}

Gallery.propTypes = {
    className: PropTypes.string
};

export default Gallery;
