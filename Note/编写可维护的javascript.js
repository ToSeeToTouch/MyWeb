/**
 * 检测数组
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
function isArray (value) {
	if (typeof Array,isArray === "function") {
		return Array.isArray(value);
	} else{
		return Object.prototype.toString.call(value) === "[obeject Array]";
	}
}
