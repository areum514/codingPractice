module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(topic){
    var list = '<ul>';
    var i = 0;
    while(i < topic.length){
      list = list + `<li><a href="/?id=${topic[i].id}">${topic[i].title}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}
