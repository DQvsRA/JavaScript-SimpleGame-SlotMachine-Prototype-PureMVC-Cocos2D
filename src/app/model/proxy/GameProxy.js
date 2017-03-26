/**
 * Created by dqvsra on 3/19/17.
 */
(function(){

    /**
     * @class model.proxy.GameProxy
     * @extends puremvc.Proxy
     */

    var _params;
    var _gamesplayed = 0;
    var _finishedReels = 0;

    puremvc.define
    (
        // CLASS INFO
        {
            name: 'app.model.proxy.GameProxy',
            parent: puremvc.Proxy,
            constructor: function GameProxy() {
                puremvc.Proxy.prototype.constructor.call(this,
                    [app.model.proxy.GameProxy.NAME],
                    XMLUtils.parse(cc.loader.getRes(res.GameData_xml))
                );
            }
        },

        // INSTANCE MEMBERS
        {
            /* GETTERS */
            getGamesPlayed: function () {
                return _gamesplayed;
            },
            /* END */
            reelsCount: function() {
                return parseInt(_params.getAttribute("count")) || Defaults.REELS_COUNT;
            },
            reelSpeed: function() {
                return _params.getAttribute("speed") || Defaults.REEL_SPEED;
            },
            itemsCount: function() {
                return parseInt(_params.getAttribute("items")) || Defaults.ITEMS_COUNT;
            },
            spinTime: function() {
                return parseInt(_params.getAttribute("spintime")) || Defaults.SPIN_TIME;
            },
            spinTimeSpread: function() {
                return parseInt(_params.getAttribute("timespread")) || Defaults.SPIN_TIME_SPREAD;
            },
            reelItemsNames: function() {
                return _params.getElementsByTagName("item");
            },
            deltaYBetweenItemsInReel: function() {
                return parseInt(_params.getAttribute("deltaY")) || Defaults.ITEMS_DELTA_Y;
            },
            isAllReelsFinished : function () {
                return _finishedReels === this.reelsCount();
            },
            /* SETTERS */

            /* END */

            startGame: function () {
                _finishedReels = 0;
            },
            endGame: function () {
                _gamesplayed += 1;
            },
            reelSpinFinished: function() {
                _finishedReels += 1;
            },
            onRegister: function () {
                _params = this.data.getElementsByTagName("reels")[0];
                console.log("> \t\t\t| Registered - GameProxy -> data:", this.data);
            },
            onRemove: function () {

            }
        },

        // CLASS MEMBERS
        {
            NAME: 'GameProxy'
        }
    );
})();