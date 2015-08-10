var num1 = 0,num2 = 0,op = 0,c = 0;
var str = "",str1 ="",str2="",rStr="";   
var end = false;

function input (a) {
	if (end&&(!op)) {Clear();record("</br>"+a);}   //检查结束标志，是否继续运算
	else {
		record(a);
	}
	str1=str1+a;
	display (a);	
}

function operation (b) {
	
	if (!op) {               //检查运算符号是否重复输入
		op=b;
		str2=str1;
		str1="";
	    switch (op){
	    	case 1:display("+");         //加法标志	
	    	record("+");
	    	break;
	    	case 2:display("-")         //减法标志
	    	record("-");
	    	break;
	    	case 3:display("*") 		//乘法标志
	    	record("*");
	    	break;
	    	case 4:display("/")			//除法标志
	    	record("/");
	    	break;}
	};
}

function equal () {
	record("=");
	if (check(str1)&&check(str2)) {
		switch (op){
			case 1:num1=accAdd(str2, str1);
			break;
			case 2:num1=accSub(str2, str1);
			break;
			case 3:num1=accMul(str2, str1);
			break;
			case 4:num1=accDiv(str2, str1);
			break;
	}
	Clear();
	str1=num1.toString();
	display(str1);
	record(str1);
	end = true;
	} 
	else{
		Clear();
		document.getElementById("disText").value="Error";
	}

}

function negative () {
	record("negative");
	if(check(str1)){
		num1=parseFloat(str1);
		num2=-num1;
		clearError ();
		str1=num2.toString();
		display(str1);
	}
	else{
		Clear();
		document.getElementById("disText").value="Error";
	}
	
}

function reciprocal () {
	record("1/x");
	num1=accDiv("1", str1);
	clearError ();
	str1=num1.toString();
	display(str1);
	record(str1);
	end = true;
}

function square () {
	record("square");
	if(check(str1)){
		num1=parseFloat(str1);
		num1=Math.sqrt(num1);
		clearError ();
		str1=num1.toString();
		display(str1);
		record(str1);
		end = true;
	}
	else{
		Clear();
		document.getElementById("disText").value="Error";
	}
	
}

function percent () {
	record("%");
	if (str2=="") {Clear();} 
	else{
		num1=accDiv(str1, "100");
		str1=num1.toString();
		num1=accMul(str1,str2);
		clearError();
		str1=num1.toString();
		display(str1);
		record(str1);
	};
}

function display (c) {
	str=str+c;
	document.getElementById("disText").value=str;
}

function Clear () {
	if (c) {record("CE");c=0;};
	str1 = "";
	str2 = "";
	op = 0;
	str = "";
	end = false;
	document.getElementById("disText").value="0";
}

function clearError (){
	if (c) {record("CE");c=0;};
	
	if (str1=!"") 
		{
			switch (op)
			{
				case 0:Clear();
				break;
				case 1:str1="";str=str2+"+";display("");
				break;
				case 2:str1="";str=str2+"-";display("");
				break;
				case 3:str1="";str=str2+"*";display("");
				break;
				case 4:str1="";str=str2+"/";display("");
				break;
			}	
		}
}

function back () {
	record("<--");
	if (str1=="") {
		op=0;
	} else{
		str1=str1.substring(0,str1.length-1);
	};
	str=str.substring(0,str.length-1);
	display("");
}

//检查是否为数字（包含正负和小数点）
function check (s) {	
	var regu = "^\-?[0-9]+\.?[0-9]*$"; 
	var re = new RegExp(regu); 
	if (re.test(s)) { 
	return true; 
	}else{ 
	return false; 
}
} 

function keyPress(e)
{
	var currKey=0,CapsLock=0,e=e||event;
	currKey=e.keyCode||e.which||e.charCode;
	CapsLock=currKey>=65&&currKey<=90;
	keyName = String.fromCharCode(currKey);
	switch(keyName)
	{  		
	   		case "1":input("1");break;
	   		case "2":input("2");break;
	   		case "3":input("3");break;
	   		case "4":input("4");break;
	   		case "5":input("5");break;
	   		case "6":input("6");break;
	   		case "7":input("7");break;
	   		case "8":input("8");break;
	   		case "9":input("9");break;
	   		case "0":input("0");break;
	   		case ".":input(".");break;
	   		case "+":operation(1);break;
	   		case "-":operation(2);break;
	   		case "*":operation(3);break;
	   		case "/":operation(4);break;
	   		case "=":equal();break;
	}
};

function keyDown(d)
{
var d=d||vent;
var currKey=d.keyCode||d.which||d.charCode;
   switch(currKey)
   {
   		case 8:back();break;
    	case 27:Clear();break;
    	case 46:clearError();; break;
    }
}

function accDiv(s1, s2) {

        var t1 = 0, t2 = 0, r1, r2;

        try { t1 = s1.split(".")[1].length } catch (e) { }

        try { t2 = s2.split(".")[1].length } catch (e) { }

        with (Math) {

            r1 = Number(s1.replace(".", ""))

            r2 = Number(s2.replace(".", ""))

            return (r1 / r2) * pow(10, t2 - t1);

        }

    }

    function accMul(s1, s2) {
        var m = 0, s1 = s1.toString(), s2 = s2.toString();
        try { m += s1.split(".")[1].length } catch (e) { }
        try { m += s2.split(".")[1].length } catch (e) { }
        return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
    }

    function accAdd(s1, s2) {

        var r1, r2, m, c;

        try { r1 = s1.split(".")[1].length } catch (e) { r1 = 0 }

        try { r2 = s2.split(".")[1].length } catch (e) { r2 = 0 }

        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2))
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                s1 = Number(s1.replace(".", ""));
                s2 = Number(s2.replace(".", "")) * cm;
            }
            else {
                s1 = Number(s1.replace(".", "")) * cm;
                s2 = Number(s2.replace(".", ""));
            }
        }
        else {
            s1 = Number(s1.replace(".", ""));
            s2 = Number(s2.replace(".", ""));
        }
        return (s1 + s2) / m

    }

    function accSub(s1,s2){
    	var r1,r2,m,n; try{r1=s1.split(".")[1].length}catch(e){r1=0}
    	try{r2=s2.split(".")[1].length}catch(e){r2=0}
    	m=Math.pow(10,Math.max(r1,r2));
    	//动态控制精度长度
		n=(r1>=r2)?r1:r2;
		return ((s1*m-s2*m)/m).toFixed(n);
}

//记录日志
function record (r) {
	if (r=="="|| r=="1/x" || r=="square" || r=="%") {var r = r + "</br>";}	
	document.getElementById("recText").innerHTML+=r ;
}

//清空记录
function recordClear () {
	document.getElementById("recText").innerHTML="";
	r="";
}