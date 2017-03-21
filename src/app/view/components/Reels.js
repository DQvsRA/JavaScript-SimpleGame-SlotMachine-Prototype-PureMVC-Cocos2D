/**
 * Created by dqvsra on 3/19/17.
 */
var Reels = null;

(function () {

    var _viewport = null;

    Reels = cc.Layer.extend({
        sprite: null,
        ctor: function ()
        {
            this._super();

            var size = cc.winSize;

            _viewport = new cc.Rect(0, 0, size.width, size.height - Defaults.FOOTER_HEIGHT - Defaults.HEADER_HEIGHT);

            this.setAnchorPoint(cc.p(0,0));
            this.x = 0;
            this.y = Defaults.FOOTER_HEIGHT;

            return true;
        },
        setup: function(reelsCount, itemsCount)
        {
            var reelWidth = _viewport.width / reelsCount;
            var reelHeight = _viewport.height / itemsCount - 10;

            var spriteCache = cc.spriteFrameCache;
            var CreateSprite = cc.Sprite.create;

            var rnd, sprt, xp, yp;
            var allPossibleSprites = SpritesNames.ALL;
            var allItemsCount = allPossibleSprites.length;

            xp = 0;
            for (var i = 0; i < reelsCount; i++)
            {
                yp = 10;
                for (var j = 0; j < itemsCount; j++)
                {
                    rnd = Math.floor(Math.random() * allItemsCount);

                    sprt = new CreateSprite(spriteCache.getSpriteFrame(allPossibleSprites[rnd]));
                    sprt.setAnchorPoint(cc.p(0.5, 0));
                    sprt.setScale(reelHeight / sprt.height, reelHeight / sprt.height)
                    sprt.x = xp + reelWidth * 0.5;
                    sprt.y = yp;
                    yp += reelHeight + 10;
                    this.addChild(sprt);
                }
                xp += reelWidth;
            }
        }
    });
})();

