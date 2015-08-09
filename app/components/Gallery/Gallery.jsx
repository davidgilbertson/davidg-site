/**
 * This page is a bit heavy on the plugins, but here we go:
 *
 * Masonry is in charge of laying out the thumbnails in a grid.
 * It does maths once the images are loaded, the sizing is done in CSS
 *
 * PhotoSwipe is just awesome and used for showing individual images and
 * handling all the swiping, pinchy zoomy, etc.
 *
 * imagesloaded is a library by the masonry guy and just fires a function as each
 * image finishes loading, without this, Masonry doesn't really work.
 *
 **/

import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {isOnServer, isProd} from '../../utils';
import {ANIMATION_DURATION_MS} from '../../utils/constants.js';

const PhotoSwipe = require('photoswipe/dist/photoswipe.js');
const photoSwipeUIDefault = require('photoswipe/dist/photoswipe-ui-default.js');

if (!isProd) {
    require('./gallery.scss');
    require('./photoswipe/photoswipe.css');
    require('./photoswipe/default-skin/default-skin.css');
}

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.calcThumbBoundsFn = this.calcThumbBoundsFn.bind(this);

        this.photos = require('./photos');
        this.msnry = undefined;
    }

    calcThumbBoundsFn(i) {
        const photoEl = React.findDOMNode(this.refs[`img-${i}`]);
        const dims = photoEl.getBoundingClientRect();

        const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

        return {x: dims.left, y: dims.top + pageYScroll, w: dims.width};
    }

    showGallery(i) {
        const pswpElement = document.querySelector('.pswp');

        const options = {
            index: i,
            getThumbBoundsFn: this.calcThumbBoundsFn,
            shareEl: false,
            zoomEl: false
        };

        // Initializes and opens PhotoSwipe
        const gallery = new PhotoSwipe(pswpElement, photoSwipeUIDefault, this.photos, options);
        gallery.init();
    }

    componentWillMount() { // client and server
        if (isOnServer) return; // No point doing this when server-side rendering

        // On mount, set the thumbnail version to medium or large
        // imgur uses the syntax of adding an 'l' or 'm' at the end to denote a large or medium thumbnail version of an image
        // I haven't been able to find what they use for 'small'
        this.photos.forEach((photo) => {
            if (window.innerWidth >= 1300 || photo.doubleWidth) {
                photo.msrc = photo.src.replace(/\.jpg$/, 'l.jpg'); // large thumbnail ~20 - 50kb each;  640px
            } else {
                photo.msrc = photo.src.replace(/\.jpg$/, 'm.jpg'); // medium thumbnail ~15 - 25kb each;  320px
            }
        });
    }

    componentDidMount() { // client side only
        const Masonry = require('masonry-layout');
        const imagesLoaded = require('imagesloaded');

        const gridEl = document.querySelector('.gallery__wrapper');

        this.msnry = new Masonry(gridEl, {
            itemSelector: '.gallery__thumb',
            columnWidth: '.gallery__thumb-sizer',
            percentPosition: true
        });

        imagesLoaded(gridEl).on('progress', () => this.msnry.layout());
    }

    shouldComponentUpdate(newProps) {
        if (newProps.showNav !== this.props.showNav) {
            setTimeout(() => {
                this.msnry.layout();
            }, ANIMATION_DURATION_MS);
        }

        return false;
    }

    render() {
        const classes = classnames(
            'gallery',
            this.props.className
        );

        const photoEls = this.photos.map((img, i) => {
            // TODO (davidg): in here, if I'm selecting double width I should be taking the big thumb
            let thumbClasses = 'gallery__thumb';

            if (img.doubleWidth) {
                thumbClasses += ' gallery__thumb--double';
            }

            return (
                <div key={i} className={thumbClasses}>
                    <img ref={`img-${i}`} src={img.msrc} onClick={this.showGallery.bind(this, i)} />
                </div>
            );
        });

        // The below boilerplate and comments are from http://photoswipe.com/documentation/getting-started.html
        return (
            <section ref="galleryWrapper" className={classes}>
                <div className="gallery__wrapper">
                    <div className="gallery__thumb-sizer"></div>
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

                        {/* Default (photoSwipeUIDefault) interface on top of sliding area. Can be changed. */}
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
    className: PropTypes.string,
    showNav: PropTypes.bool
};

export default Gallery;
