/**
 * Created by dqvsra on 3/19/17.
 */
var Reels = null;

(function () {

    var _viewport = null;
    var _spinners = [];
    var _itemHeight = 0;

    var _createSprite;
    var _spriteCache;

    Reels = cc.Layer.extend({
        sprite: null,
        ctor: function ()
        {
            this._super();

            var size = cc.winSize;

            _viewport = new cc.Rect(0, 0, size.width, size.height - Defaults.FOOTER_HEIGHT - Defaults.HEADER_HEIGHT);

            var background = new cc.DrawNode();
            background.drawRect(
                cc.p(_viewport.width, -_viewport.height),
                cc.p(0, _viewport.height * 0.5),
                cc.color.apply(null, ColorUtils.hexToRgb("ffcc00")),
                0
            );

            _spriteCache = cc.spriteFrameCache;
            _createSprite = cc.Sprite.create;

            this.addChild(background, 0);

            this.setAnchorPoint(cc.p(0,0));
            this.x = 0;
            this.y = Defaults.FOOTER_HEIGHT;

            return true;
        },
        spin:function() {
            var spinnerFinished = 0;
            _spinners.map(function(spinner){
                var delataTime = Math.random() * 0.4;
                var time = 0.4 * 2 + delataTime;
                var yPos = spinner.y - _viewport.height * 2 + 10;
                var position = cc.p(spinner.x, yPos);
                var tween = cc.moveTo(time, position)
                    .easing(cc.easeIn(0.5));
                var action = spinner.runAction(tween);

                action.update = function(){
                    var currentItem = 0;
                    return function (p) {
                        var currentPos = yPos * p;
                        if(Math.floor(-currentPos / _itemHeight) > currentItem) {
                            var child = spinner.getChildByTag(currentItem % 4);
                            var newChild = new _createSprite(_spriteCache.getSpriteFrame(SpritesNames.ALL[Math.floor(SpritesNames.ALL.length*Math.random())]));
                            newChild.setTag(child.getTag());
                            newChild.setAnchorPoint(cc.p(0.5, 0));
                            newChild.setScale(  _itemHeight / newChild.height,
                                                _itemHeight / newChild.height);
                            newChild.x = 0;
                            currentItem++;
                            newChild.y = (currentItem + 3) * (_itemHeight + 10);
                            spinner.removeChild(child);
                            spinner.addChild(newChild);
                        }
                        spinner.y = yPos*p;
                        if(p === 1) {
                            spinner.y = 0;
                            var allChildren = spinner.getChildren();
                            allChildren.forEach(function (item, index) {
                                item.y = 10 + (10 + _itemHeight) * index;
                                item.setTag(index);
                            });
                            spinnerFinished++;
                            if(spinnerFinished) {
                                cc.eventManager.dispatchCustomEvent(ReelsEvents.SPIN_COMPLETED);
                            }
                        }
                    }
                }();
            });
        },
        setup: function(reelsCount, itemsCount)
        {
            trace("reelsCount", reelsCount);
            trace("itemsCount", itemsCount);

            var reelWidth = _viewport.width / reelsCount;
            var reelHeight = _viewport.height / itemsCount - 10;
            var rnd, sprt, xp, yp;
            var allPossibleSprites = SpritesNames.ALL;
            var allItemsCount = allPossibleSprites.length;

            itemsCount += 1;

            xp = 0;
            var spinner;
            for (var i = 0; i < reelsCount; i++)
            {
                spinner = new cc.Sprite();
                yp = 10;
                for (var j = 0; j < itemsCount; j++)
                {
                    rnd = Math.floor(Math.random() * allItemsCount);

                    sprt = new _createSprite(_spriteCache.getSpriteFrame(allPossibleSprites[rnd]));
                    sprt.setTag(j);
                    sprt.setAnchorPoint(cc.p(0.5, 0));
                    sprt.setScale(reelHeight / sprt.height, reelHeight / sprt.height)
                    sprt.x = 0;
                    sprt.y = yp;
                    yp += reelHeight + 10;
                    spinner.addChild(sprt);
                }
                _spinners.push(spinner);
                spinner.x = xp + reelWidth * 0.5;
                spinner.y = 0;
                this.addChild(spinner);
                xp += reelWidth;
            }
            _itemHeight = reelHeight;
        }
    });
})();

