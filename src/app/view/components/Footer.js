/**
 * Created by dqvsra on 3/19/17.
 */
var Footer = null;
(function () {

    const FOOTER_HEIGHT = Defaults.FOOTER_HEIGHT;
    const FOOTER_COLOR = ColorUtils.hexToRgb("444444");

    const SPIN_FONT_SIZE = 96;
    const SPIN_FONT_FONT = "Arial";
    const SPIN_SCALE = 0.25;
    const SPIN_OFFSET_RIGHT = 16;

    Footer = cc.Layer.extend({
        sprite: null,
        ctor: function ()
        {
            this._super();

            var size = cc.winSize;
            var background = new cc.DrawNode();
            background.drawRect(
                cc.p(size.width, FOOTER_HEIGHT),
                cc.p(0, 0),
                cc.color.apply(null, FOOTER_COLOR),
                0
            );

            var spinButton = new ccui.Button();
            spinButton.loadTextureNormal(res.SpinButton_png);
            spinButton.titleText = "SPIN";
            spinButton.titleFont = SPIN_FONT_FONT;
            spinButton.titleFontSize = SPIN_FONT_SIZE;
            spinButton.setScale9Enabled(true);
            spinButton.setAnchorPoint(cc.p(0,0));
            spinButton.scale = SPIN_SCALE;
            spinButton.x = size.width - spinButton.width * SPIN_SCALE - SPIN_OFFSET_RIGHT;
            spinButton.addTouchEventListener(this.touchEvent, this);

            this.spinButton = spinButton;
            this.addChild(background);
            this.addChild(spinButton);

            return true;
        },
        lock: function() {
            this.spinButton.setEnabled(false);
        },
        unlock: function() {
            this.spinButton.setEnabled(true);
        },
        touchEvent: function (sender, type)
        {
            switch (type)
            {
                case ccui.Widget.TOUCH_BEGAN: cc.log("Touch Down"); break;
                case ccui.Widget.TOUCH_MOVED: cc.log("Touch Moved"); break;
                case ccui.Widget.TOUCH_CANCELLED: cc.log("Touch Cancelled"); break;
                case ccui.Widget.TOUCH_ENDED:
                    cc.eventManager.dispatchCustomEvent(FooterEvents.SPIN_BUTTON_TOUCHED);
                    break;
            }
        }
    });
})();

