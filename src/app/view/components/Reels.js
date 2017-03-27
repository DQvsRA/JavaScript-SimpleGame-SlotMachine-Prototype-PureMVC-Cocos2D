/**
 * Created by dqvsra on 3/19/17.
 */
var Reels = null;

(function () {

    var _viewport = null;
    var _spinners = [];
    var _itemHeight = 0;
    var _itemProportion = 0;
    var _deltaYBetweenItemsInReel;

    var _createSprite;
    var _spriteCache;

    const ALL_SPRITES = SpritesNames.ALL;
    const ALL_COUNT = ALL_SPRITES.length;

    const ClearSpinnerPosition = function (spinner) {
        spinner.y = 0;
        var currentPos = _deltaYBetweenItemsInReel;
        spinner.getChildren().forEach(function (item, index) {
            item.y = currentPos;
            currentPos += _itemHeight;
            item.setTag(index);
        });
    };

    Reels = cc.Layer.extend({
        sprite: null,
        ctor: function ()
        {
            this._super();

            var size = cc.winSize;

            _viewport = new cc.Rect(0, 0, size.width, size.height - Defaults.FOOTER_HEIGHT - Defaults.HEADER_HEIGHT);

            // var background = new cc.DrawNode();
            // background.drawRect(
            //     cc.p(_viewport.width, -_viewport.height),
            //     cc.p(0, _viewport.height * 0.5),
            //     cc.color.apply(null, ColorUtils.hexToRgb("ffcc00")),
            //     0
            // );

            _spriteCache = cc.spriteFrameCache;
            _createSprite = cc.Sprite.create;

            // this.addChild(background, 0);

            this.setAnchorPoint(cc.p(0,0));
            this.x = 0;
            this.y = Defaults.FOOTER_HEIGHT;

            return true;
        },
        spinWithFinalReplacement:function(spinTime, timeSpread, combinations)
        {
            _spinners.map(function(spinner)
            {
                const reelIndex = spinner.getTag();
                const reelCombination = combinations[reelIndex].innerHTML;
                const finalCombination = reelCombination.split(",");

                var deltaTime = Math.random() * timeSpread * 2 - timeSpread;
                var time = Math.ceil(spinTime + deltaTime) || spinTime;
                var yPos = spinner.y - _viewport.height * (spinTime + timeSpread);
                var position = cc.p(spinner.x, yPos);
                var tween = cc.moveTo(time, position)
                                .easing(cc.easeOut(0.1))
                                .speed(0.9 + Math.random() * 0.5);

                finalCombination.push(Math.floor(ALL_COUNT * Math.random()));

                var startReplaceFrom = Math.floor(Math.abs(yPos) / _itemHeight) - finalCombination.length;
                spinner.speed = Math.abs(yPos) / time;

                spinner.runAction(tween);
                tween.update = function(){
                    var currentItem = 0;
                    var child = null;
                    var rndIndex = 0;
                    var currentPos = 0;
                    var reelItems = spinner.getChildrenCount();
                    var alwaysVisible = reelItems - 1;

                    return function (p) {
                        currentPos = yPos * p;
                        if(Math.floor(-currentPos / _itemHeight) > currentItem)
                        {
                            if(currentItem < startReplaceFrom) {
                                rndIndex = Math.floor(ALL_COUNT * Math.random());
                            } else {
                                rndIndex = finalCombination.shift();
                            }
                            child = spinner.getChildByTag(currentItem % reelItems);
                            child.setSpriteFrame(ALL_SPRITES[rndIndex]);
                            currentItem++;
                            spinner.removeChild(child);
                            child.y = (currentItem + alwaysVisible) * _itemHeight;
                            spinner.addChild(child);
                        }

                        spinner.y = currentPos;

                        if(p === 1) {
                            ClearSpinnerPosition(spinner);
                            cc.eventManager.dispatchCustomEvent(
                                ReelsEvents.COMBINATION_SPIN_COMPLETED
                            );
                        }
                    }
                }();
            });
        },
        setup: function(reelsCount, itemsCount, deltaY)
        {
            var rnd, item, xp, yp, name, frame;

            var reelWidth = Math.floor(_viewport.width / reelsCount);
            var reelWidthHalf = reelWidth * 0.5;

            _itemHeight = Math.floor(_viewport.height / itemsCount) - deltaY;
            _deltaYBetweenItemsInReel = deltaY;

            itemsCount += 1;

            var generateItem = function () {
                rnd = Math.floor(Math.random() * ALL_COUNT);
                name = ALL_SPRITES[rnd];
                frame = _spriteCache.getSpriteFrame(name);
                return new _createSprite(frame);
            };

            item = generateItem();
            _itemProportion = _itemHeight / item.height;

            _itemHeight += deltaY;

            xp = reelWidthHalf;
            var spinnerContainer;
            for (var i = 0; i < reelsCount; i++)
            {
                yp = deltaY;
                spinnerContainer = new cc.Sprite();
                for (var j = 0; j < itemsCount; j++)
                {
                    item = generateItem();
                    item.setTag(j);
                    item.setAnchorPoint(cc.p(0.5, 0));
                    item.setScale(_itemProportion, _itemProportion);
                    item.x = 0;
                    item.y = yp;
                    spinnerContainer.addChild(item);
                    yp += _itemHeight;
                }

                _spinners.push(spinnerContainer);
                spinnerContainer.x = xp;
                spinnerContainer.y = 0;
                spinnerContainer.setTag(i);
                this.addChild(spinnerContainer);

                xp += reelWidthHalf + reelWidthHalf;
            }
        }
    });
})();
