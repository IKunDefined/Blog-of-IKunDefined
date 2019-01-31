const Content = require("../../models/Content");

module.exports = function (req, res) {
  Content.find().then(function (contentList) {
    let responseData;
    responseData = {
        code: 0,
        message: "",
        contentList: contentList
    }
    res.json(responseData)
    //   if (!contentInfo.length) {
    //       res.render("admin/content", {
    //           contents: null,
    //           isContent: true
    //       });
    //   } else {
    //       res.render("admin/content", {
    //           contents: contentInfo,
    //           isContent: true,
    //       });
    //   }
  });
}