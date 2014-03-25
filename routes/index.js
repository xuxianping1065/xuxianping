
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: '徐先平的博客'});
};


/*
 * GET list page.
 */
exports.list = function(req, res){
    res.render('list', { title: '徐先平的博客' });
};


/*
 *  GET detail page
 */
exports.detail = function(req, res){
    res.render('detail', { title: 'Hello,World', author: "徐先平", publishDate: "2014年1月1日", content: "是" });
};