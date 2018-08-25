/**
 * Created by yaozhixing on 2018/8/24.
 */

const express = require("express");
const app = express();
const request = require("superagent");

const HOST = 'http://api.douban.com/v2'

/**
 * CORS support.
 */

app.all('*', function(req, res, next) {
    res.set("Access-Control-Allow-Origin", "*");  
    res.set("Access-Control-Allow-Headers", "X-Requested-With");  
    res.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.set("X-Powered-By",' 3.2.1')  
    res.set("Content-Type", "application/json;charset=utf-8");
    // 允许证书 携带cookie
    res.set("Access-Control-Allow-Credentials", "true")
    next();
});

app.all('*', function (req, res, next) {
  if (!req.get('Origin')) return next();
  // use "*" here to accept any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  res.set("Content-Type", "application/json;charset=utf-8");
  // res.set('Access-Control-Allow-Max-Age', 3600);
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

/*热门*/
app.get('/api/movie/in_theaters', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

/*即将上映*/
app.get('/api/movie/coming_soon', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

/*最新电影*/
app.get('/api/movie/new_movies', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

/*电影推荐*/
app.get('/api/movie/top250', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

/*电影内容信息*/
app.get('/api/movie/subject/:id', function (req, res) {
  let ori_url = cutUrl(req.originalUrl);
  let sreq = request.get( HOST + ori_url )
  sreq.pipe(res);
  sreq.on('end', function (error, res) {
    console.log('end');
  });
})

app.listen(8080,() => {
    console.log('HTTP Server is running in http://127.0.0.1:8080')
})


/*截取url， /api/movie/in_theaters => /movie/in_theaters */
function cutUrl(url) {
	if(url.indexOf('/api') >= -1){
		return url.substr(4);
	}
	else{
		return url;
	}
}