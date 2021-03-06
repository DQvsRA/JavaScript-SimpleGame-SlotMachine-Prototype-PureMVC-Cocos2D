/**
 * Created by dqvsra on 3/16/17.
 */
var Header = null;
(function () {

    const TF_SCORE_TEXT = "SCORE: @";
    const TF_GAMES_TEXT = "GAMES: @";
    const TF_FONT_SIZE = 24;
    const TF_FONT_FONT = "Arial";
    const TF_FONT_WIDTH = 144;
    const TF_FONT_MARGIN_X = 96;
    const TF_FONT_CLR_SCORE = ColorUtils.hexToRgb("454545");
    const TF_FONT_CLR_GAMES = ColorUtils.hexToRgb("ffffff");

    const HEADER_HEIGHT = Defaults.HEADER_HEIGHT;
    const HEADER_COLOR = ColorUtils.hexToRgb("121212");

    Header = cc.Layer.extend({
        sprite: null,
        ctor: function ()
        {
            this._super();

            var size = cc.winSize;

            var background = new cc.DrawNode();
            background.drawRect(
                cc.p(size.width, size.height - HEADER_HEIGHT),
                cc.p(0, size.height),
                cc.color.apply(null, HEADER_COLOR),
                0
            );

            this.scoreTF = new cc.LabelTTF(TF_SCORE_TEXT, TF_FONT_FONT, TF_FONT_SIZE, cc.size(TF_FONT_WIDTH,TF_FONT_SIZE), cc.TEXT_ALIGNMENT_LEFT);
            this.scoreTF.x = TF_FONT_MARGIN_X;
            this.scoreTF.y = size.height - TF_FONT_SIZE - 8;
            this.scoreTF.textAlign = cc.TEXT_ALIGNMENT_LEFT;
            this.scoreTF.color = cc.color.apply(null, TF_FONT_CLR_SCORE);

            this.gamesTF = new cc.LabelTTF(TF_GAMES_TEXT, TF_FONT_FONT, TF_FONT_SIZE, cc.size(TF_FONT_WIDTH,TF_FONT_SIZE), cc.TEXT_ALIGNMENT_CENTER);
            this.gamesTF.x = size.width * 0.5;
            this.gamesTF.y = this.scoreTF.y;
            this.gamesTF.color = cc.color.apply(null, TF_FONT_CLR_GAMES);

            this.addChild(background);
            this.addChild(this.scoreTF);
            this.addChild(this.gamesTF);

            return true;
        },
        setScore:function(value) {
            this.scoreTF.setString(TF_SCORE_TEXT.replace("@", value));
        },
        setGames:function(value) {
            this.gamesTF.setString(TF_GAMES_TEXT.replace("@", value));
        }
    });
})();

