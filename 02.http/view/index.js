exports.index = function(title,list,contents){
    return `
    <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="margin:50px">
    <h1><a href="/">웹 기술</a></h1>
    <ul>
      ${list} <!--22.appList.js에서 변경된 내용 -->
    </ul>
    <hr>
    <p>
        ${contents} <!--app 조회에서 변경된 내용 -->
    </p>   
</body>
</html>
    `;
}