function set2fig(num) {
    // 桁数が1桁だったら先頭に0を加えて2桁に調整する
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
 }
 function showClock() {
    var nowTime = new Date();
    var nowHour = set2fig( nowTime.getHours() );
    var nowMin  = set2fig( nowTime.getMinutes() );
    var nowSec  = set2fig( nowTime.getSeconds() );
    var msg = "現在時刻は、" + nowHour + "時" + nowMin + "分です。";
   //  var msg = "現在時刻は、" + nowHour + "時" + nowMin + "分" + nowSec + "秒です。";
    document.getElementById("a").innerHTML = msg;
 }
 setInterval('showClock()',1000);

 