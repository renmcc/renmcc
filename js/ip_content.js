//获取当前IP地址和浏览器标识
function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}

var ip_content = document.querySelector(".ip_content");

// console.log('aaaaaaaaa')
// const xhr = new XMLHttpRequest();
// xhr.open('GET','https://whois.pconline.com.cn/ipJson.jsp');
// xhr.setRequestHeader("Content-type","application/json");
// xhr.send();

// xhr.onreadystatechange = function() {
//     // 判断相应状态码200 404 403 401 500
//     // 2xx 成功
//     if(xhr.readyState === 4) {
//         if(xhr.status >= 200 && xhr.status < 300) {
//             // 处理结果 行 头 空行 体
//             // 1.相应行
//             console.log(xhr.status);//状态码
//             console.log(xhr.statusText);//状态字符串
//             console.log(xhr.getAllResponseHeaders());//所有响应头
//             console.log(xhr.response);//响应体
//         }
//     }
// }


if (ip_content != null && typeof (ifconfig_io ) != undefined) {
    ip_content.innerHTML = '欢迎来自 <span class="p red">' + ifconfig_io ["country_code"] + "</span> 的小伙伴<br>" + "访问IP为： <span class='p cyan'>" + ifconfig_io ["ip"] + "</span><br>浏览器版本：<span class='p blue'>" + getBrowserInfo() + '</span>';
}




