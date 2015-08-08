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
import {isOnClient, isProd} from '../../utils';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

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

        this.getThumbBoundsFn = this.getThumbBoundsFn.bind(this);

        this.photos = require('./photos');

        this.photos.forEach((photo) => {
            // imgur uses the syntax of adding an l at the end to denote the 'large thumbnail' version of an image
            // Nice one, imgur
            //photo.msrc = photo.src.replace(/\.jpg$/, 'l.jpg'); // large thumbnail ~20 - 50kb each
             photo.msrc = photo.src.replace(/\.jpg$/, 'm.jpg'); // medium thumbnail ~15 - 25kb each
        });
    }

    getThumbBoundsFn(i) {
        const photoEl = React.findDOMNode(this.refs[`img-${i}`]);
        const dims = photoEl.getBoundingClientRect();

        const pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

        return {x:dims.left, y:dims.top + pageYScroll, w:dims.width};
    }

    showGallery(i) { // TODO (davidg): img not used any more
        const pswpElement = document.querySelector('.pswp');

        const options = {
            index: i,
            getThumbBoundsFn: this.getThumbBoundsFn,
            //fullscreenEl: false,
            shareEl: false,
            zoomEl: false
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.photos, options);
        gallery.init();
    }

    componentDidMount() {
        const gridEl = document.querySelector('.gallery__wrapper');

        const msnry = new Masonry(gridEl, {
            itemSelector: '.gallery__thumb',
            columnWidth: '.gallery__thumb-sizer',
            percentPosition: true
        });

        imagesLoaded(gridEl).on('progress', () => msnry.layout());
    }

    render() {
        console.log('  --  >  Gallery.jsx:84 > render');
        const classes = classnames(
            'gallery',
            this.props.className
        );

        const photoEls = this.photos.map((img, i) => {
            return (
                <div key={i} className="gallery__thumb">
                    <img ref={`img-${i}`} src={img.msrc} onClick={this.showGallery.bind(this, i)} />
                </div>
            );
        });

        // The below boilerplate and comments are from http://photoswipe.com/documentation/getting-started.html
        return (
            <section ref="galleryWrapper" className={classes}>
                {/*
                <h1 className="heading-1">Not the web</h1>
                <p>Every now and then I leave the code behind and...</p>
                */}

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
