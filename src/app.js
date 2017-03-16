var App = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldsLayer();
        this.addChild(layer);
    }
});



