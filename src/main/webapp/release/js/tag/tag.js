$(function() {
	//http://222.88.71.16:8067/lfcfront/login?username=admin&password=123456
	$.ajax({
		type: "get",
		url: "http://222.88.71.16:8067/lfcfront/tagList",
		async: true,
		dataType: 'json',
		data: {},
		success: function(data) {
			if(data) {
				$(".news_right_list  dl").slice(0,2).html("");
				var value = data.tagList;
				console.log(value.length);
				for(var i = 0; i < value.length; i++) {
					//动态生成a标签，根据接口文档的需要
					var oEle = $("<dd><a href='#" + value[i].tagId + "'>" + value[i].tagName + "</a></dd>");
					$(".news_right_list dl").slice(0, 2).append(oEle);	
				}

			}
		}
	})
});