import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import isProd from '../../utils/isProd.js';

const PhotoSwipe = require('photoswipe/dist/photoswipe.js');
const PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default.js');

if (!isProd) {
    require('./gallery.scss');
    require('./photoswipe/photoswipe.css');
    require('./photoswipe/default-skin/default-skin.css');
}

class Gallery extends Component {
    componentDidMount() {
        const pswpElement = document.querySelector('.pswp');

        this.photos = [
            {w: 1024, h: 1365, src: require('file!../../assets/images/photo-1_1024x1365.jpg')},
            {w: 2048, h: 1365, src: require('file!../../assets/images/photo-2_2048x1365.jpg')},
            {w: 1709, h: 1978, src: require('file!../../assets/images/photo-3_1709x1978.jpg')}
        ];
        // define options (if needed)
        const options = {
            // optionName: 'option value'
            // for example:
            index: 0 // start at first slide
        };

        // Initializes and opens PhotoSwipe
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, this.photos, options);
        gallery.init();
    }

    render() {
        const classes = classnames(
            'gallery',
            this.props.className
        );

        return (
            <section className={classes}>
                <h1>I am a gallery</h1>
                {/* Root element of PhotoSwipe. Must have class pswp. */}
                <div className="pswp" tabindex="-1" role="dialog" aria-hidden="true">

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
    className: PropTypes.string,
    onToggleNav: PropTypes.func.isRequired
};

export default Gallery;
