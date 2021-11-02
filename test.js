var Video_Time = null;
var Video_setInterval = null;

//获取视频总时长
document.getElementById("video").mozFragmentEnd;


//获取点击按钮的方法
document.getElementsByClassName('public_submit');
var Intervar_button = setInterval(function(){
  var button_watch = $('.public_submit')
  if(button_watch.length>0){
    button_watch.click();
    console.log('继续播放..');
  }else{
    console.log("视频正在监听中...");                                     
  }
},2000);


var Interval_Time = 2000;
var Interval_ID = null;

/*打开课程panel*/
function Open_Panel(){
    var course_block=$('.panel.panel-info');
    for (j=1;j<=course_block.length-1;j++){
      course_block.eq(j).children(".panel-heading").click();
    };
};

/*点击选课按钮*/
function Click_Button(){
    var course_block=$('.body_tr');
    for (k=0;k<course_block.size();k++){
        if(course_block.eq(k).children('.jsxm').text()=='尔雅'||
           course_block.eq(k).children('.jsxm').text()=='卓越'){
            if(course_block.eq(k).children('.an').children("button").text()=='选课'){
                /*点击选课按钮*/
				course_block.eq(k).children(".an").children("button").click();
				/*点击跨校区选课确认按钮*/
                $('#btn_confirm').click();
                console.log("抢课成功");
            };
        };
    };
};

/*刷新课程列表*/
function Refresh_Classes(){
    var btn=$('.btn.btn-primary.btn-sm');
    btn.eq(0).click();
};

/*循环函数*/
function Start_Selecting(){
    Refresh_Classes();
    Open_Panel();
    setTimeout(Click_Button,0.1);
    console.log("完成一次抢课");
};

/*开始或停止*/
function startorstop(){
    if(Interval_ID == null){
        Interval_ID = setInterval(Start_Selecting,Interval_Time);
	}
	else{
		clearInterval(Interval_ID);
        Interval_ID = null;
	};
};


