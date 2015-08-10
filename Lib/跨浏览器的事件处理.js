//跨浏览器的事件处理程序
var EventUtil = {
	//添加事件
	addHandler: function (element,type,handler) {             
		if (element.addEventListener) {
			element.addEventListener(type,handler,false);
		} else if (element.attachEvent) {
			element.attachEvent("on"+type,handler);
		} else {
			element["on"+type] = handler;
		}
	},

	//取得event对象
	getEvent: function (event) {
		return event ? event : window.event;
	},

	//返回事件的目标
	getTarget: function (event) {
		return event.target || event.srcElement;
	},

	//取消事件的默认行为
	preventDefault: function (event) {
		if (event.preventDefault) {
			event.preventDefault();		
		} else{
			event.returnValue = false;
		}
	},

	//取得相关元素
	getRelatedTarget: function (event) {
		if (event.relatedTarget) {
			return event.relatedTarget;
		} else if (event.toElement) {
			return event.toElement();
		} else if (event.fromElement) {
			return event.fromElement;	
		} else{
			return null;
		}
	},

	//检测按钮信息
	getButton: function (event) {
		if (document.implementation.hasFeature("MouseEvents","2.0")) {
			return event.button;
		} else{
			switch(event.button){
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0;   //主鼠标按钮
				case 2:
				case 6:
					return 2;   //中间的鼠标按钮
				case 4:
					return 1;   //次鼠标按钮
			}
		}
	},

	//取得键盘字符编码
	getCharCode: function (event) {
		if (typeof event.charCode == "number") {
			return event.charCode;
		} else{
			return event.keyCode;
		}
	},

	//移除事件
	removeHandler: function (element,type,handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type,handler,false);
		} else if (element.detachEvent) {
			element.detachEvent("on"+type,handler);
		} else {
			element["on"+type] = null;
		}
	},

	stopPropagation: function (event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else{
			event.cancelBubble = true;
		}
	}
};