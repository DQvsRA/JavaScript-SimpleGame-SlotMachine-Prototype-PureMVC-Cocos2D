/**
 * Created by dqvsra on 3/19/17.
 */
window.XMLUtils = {
    parse: function(text) {
        var xmlDoc;

        // get a reference to the requested corresponding xml file
        if (window.DOMParser)
        {
            xmlDoc = new DOMParser().parseFromString(text, "text/xml");
        }
        else // Internet Explorer (untested!)
        {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = "false";
            xmlDoc.loadXML(text);
        }
        return xmlDoc;
    }
};
