window.onload = function(){
    xzl();
    hxl();

/*-------------------商品详情--------------------------------*/
    function xzl(){

        // 获取url
        var params = location.search;
        // url解码
        params=decodeURI(params);
        // 截取？后面的字符
        params=params.slice(1);
        // 以&为分隔线分割字符串
        params=params.split('&');
        // 修改页面传参时修改的字符&
        var reg=/ ! /ig;
        var obj={};
        for(var i=0;i<params.length;i++){
                params[i]=params[i].replace(reg,' & ');
                params[i]=params[i].split('=');
                obj[params[i][0]]=params[i][1];
        }

        //新增内容
        var li_myul=document.getElementsByClassName('li_myul')[0];
        var li_imgs=li_myul.getElementsByTagName('img');
        var li_arr=[];
       

        var li_img=document.getElementById('li_img');
        //页面加载是的图片
        li_img.src=obj.imgurl;
           for(var i=0;i<li_imgs.length;i++){
                if(li_imgs[i].src==li_img.src){
                   li_imgs[i].parentNode.style.boxSizing='border-box';
                   li_imgs[i].parentNode.style.marginLeft='10px';
                   li_imgs[i].parentNode.style.border='3px solid #FF6701';
                    li_imgs[i].style='width:55px;height:56px;';
                        }
                }
        //鼠标hover的时候把大图显示到大img里面
               li_myul.onmouseover=function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                
                if(target.parentNode.className=='li_color'&&target.nodeName.toLowerCase()=='img'){
                
                // 鼠标悬停抓取被选中图片所对应idx和图片路径
                idx = target.getAttribute('data-guid');console.log(idx)
                imgurl = target.src;console.log(imgurl)
                title = target.title;console.log(title)

                for(var i=0;i<li_imgs.length;i++){
                    li_imgs[i].parentNode.style.border='1px solid #E0E0E0';
                    li_imgs[i].parentNode.style.boxSizing='content-box';
                    li_imgs[i].parentNode.style.marginLeft='8px'
                    li_imgs[i].style='width:62px;height:61px;';
                }
                   li_img.src=target.src;
                   target.parentNode.style.boxSizing='border-box';
                    target.parentNode.style.marginLeft='10px';
                   target.parentNode.style.border='3px solid #FF6701';
                    target.style='width:55px;height:56px;';
                   
                    obj.imgurl=target.src;
                }
            }

        //点击时价格边框变色
        var li_mylis=document.getElementsByClassName('li_main_div1_cl2')[0];

        var li_ul1=document.getElementById('li_cl2_ul1');
        var li_lists1=li_ul1.getElementsByTagName('li');
        var li_ul2=document.getElementById('li_cl2_ul2');
        var li_lists2=li_ul2.getElementsByTagName('li');


            li_ul1.onclick=function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                for(var i=1;i<li_lists1.length;i++){
                    if(!li_lists1[i].id){
                    li_lists1[i].style.border='1px dashed #ccc';
                     }   
                }
                if(target.nodeName.toLowerCase()=='li'&& !target.id){
                    target.style.border='1px solid #FF4B29';
                 
                    
                        obj.size=target.innerHTML;
                    
                    console.log(obj);
                }
            }

        li_ul2.onclick=function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                for(var i=1;i<li_lists2.length;i++){
                    if(!li_lists2[i].id){
                    li_lists2[i].style.border='1px dashed #ccc';
                     }   
                }
                if(target.nodeName.toLowerCase()=='li'&& !target.id){
                    target.style.border='1px solid #FF4B29';
                 
                    
                        obj.color=target.innerHTML;
                    
                    console.log(obj);
                }
        }

        //购物的数量
        var li_inp2=document.getElementById('li_inp2');
        var li_btn1=document.getElementById('li_btn1');
        var li_btn2=document.getElementById('li_btn2');
        var li_shu=document.getElementById('li_shu');
        var li_price=document.getElementById('li_price');
        var li_span=document.getElementById('input_span')
        li_inp2.onchange=function(){
            if(String(Number(li_inp2.value))=='NaN'){
                li_inp2.value=1;
            }
            li_shu.innerHTML=li_inp2.value;
            var a=li_shu.innerHTML*119.99;
            li_price.innerHTML=a.toFixed(2)+'py.6';
            obj.pay=li_price.innerHTML;
            obj.numbers=li_shu.innerHTML;
            console.log(obj);
        }

            li_btn1.onclick=function(e){
                e=e||window.event;
                e.stopPropagation();
                var i=li_inp2.value;
                i++;
                li_inp2.value=i;
                li_shu.innerHTML=li_inp2.value;
                var a=li_shu.innerHTML*119.99;
                li_price.innerHTML=a.toFixed(2)+'py.6';
                obj.pay=li_price.innerHTML;
              //商品的数量
              obj.numbers=i;
            }

            li_btn2.onclick=function(e){
                e=e||window.event;
                e.stopPropagation();
                var i=li_inp2.value;

                i--;
                if(i<0){
                    i=0;
                }
                 li_inp2.value=i;
                 li_shu.innerHTML=li_inp2.value;
                var a=li_shu.innerHTML*119.99;
                li_price.innerHTML=a.toFixed(2)+'py.6';
                  obj.pay=li_price.innerHTML;
                   obj.numbers=i;
            }
            //添加到购物车，就是写入cookie,保存7天
            var li_add=document.getElementById('li_jisuan');
            li_add.onclick=function(){
                var date=new Date();
                date.setDate(date.getDate()+7);
                document.cookie='gouwu='+JSON.stringify(obj)+';expires='+date.toString()+';path=/';
        }


        // 抓取元素
        var addcar = document.getElementById('li_jisuan');
        
        var carlist = [];

        // 在进入页面之前先判断cookie是否有值
        var cookies = document.cookie;
        if(cookies.length>0){
            // split()方法返回新数组，所以得重新赋值
            cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0]=='carlist'){
                    carlist = JSON.parse(temp[1]);
                }
            })
        }


        // 设置点击事件，用事件委托
        addcar.onclick = function(e){console.log(666)
            e = e || window.event;
            var target = e.target || e.srcElement;
            // 获取数量
            var num = li_inp2.value;console.log(num)
            
            //点击时,先判断商品是否已在购物车里，若不在添加到购物车
            //设定参数默认不存在
            var has = false;
            // 1.判断存在购物车的情况
            
            for(i=0;i<carlist.length;i++){
                if(carlist[i].id == idx){
                    carlist[i].qty=num;
                    // 若存在改变参数
                    has = true;
                }
            }
            // 2.若不存在，添加进数组
            if(has == false){
                var goods={
                    imgurl:imgurl,
                    title:title,
                    prices:119.99,
                    qty:num,
                    oldprice:219.99,
                    // JSON.stringify里不能有多余的逗号
                    id:idx
                }
                carlist.push(goods);
            }
            console.log(goods)
            // 传入cookie
            document.cookie = "carlist = " + JSON.stringify(carlist)+';path=/;';console.log(goods)
        
        }
    }
/*------------------------------------------------------------*/
    
/*--------------------tab部分-------------------------------*/
    function hxl(){
        //获取页面上的元素
        var h_offer = document.getElementsByClassName("offer")[0];
        var h_offerlist = h_offer.children;
        var h_ul = document.getElementsByClassName("sp_b")[0];
        var h_ullist = h_ul.children;


        //初始化1：高亮offer1·
        h_offerlist[0].className = "active";
        //初始化2：隐藏其他元素
        for(var i=0;i<h_offerlist.length;i++){
            if(i>0){
                h_ullist[i].style.display = "none";
            }

            //个头offer绑定点击事件
            ////为了解决this问题，给tablist的dom中添加idx属性
            h_offerlist[i].idx = i;
            h_offerlist[i].onclick = function(e){
                //获取当前的idx
                var idx = this.idx;

                for(var j=0;j<h_offerlist.length;j++){
                    if(j===idx){
                        h_offerlist[j].className = "active";
                        h_ullist[j].style.display = "block";
                    }else{
                        h_offerlist[j].className = "";
                        h_ullist[j].style.display = "none";
                    }
                }
                e.preventDefault();
            }
        }
/*----------------------------------------------------------*/

/*-------------------右侧边栏------------------------------*/
        //获取detail.html页面中有侧边栏的ul
        var h_ullist1 = document.getElementsByClassName("h_ullist1")[0];
        //生成数据列表
        var h_goodslist = [
            {   
                imgurl:"../img/img1.png",
                detail:"Decent Module Case Silicone Skin Cover for iPhone...",
                listPrice:"py6. 219",
                ourPrice:"py6. 189",
                save:"Save py6. 30"
            },
            {
                imgurl:"../img/img2.png",
                detail:"Decent Module Case Silicone Skin Cover for iPhone...",
                listPrice:"py6. 219",
                ourPrice:"py6. 189",
                save:"Save py6. 30"
            },
            {   
                imgurl:"../img/img3.png",
                detail:"Decent Module Case Silicone Skin Cover for iPhone...",
                listPrice:"py6. 219",
                ourPrice:"py6. 189",
                save:"Save py6. 30"
            }
        ];

        //对数据列表进行遍历
        var obj = h_goodslist.map(function(item){
            //对数组里面的对象进行遍历
            return '<li><img src="'+item.imgurl+'"><p class="detail">'+item.detail+'</p><p class="listPrice">List Price: <span>'+item.listPrice+'</span></p><p class="ourPrice">Our Price: <span>'+item.ourPrice+'</span></p><p class="save">'+item.save+'</p></li>';
        }).join("");
        //生成html结构
        h_ullist1.innerHTML = obj;
/*----------------------------------------------------------*/

/*-------------------评论区域-------------------------------*/
        //获取评论区域
        var comment = document.getElementsByClassName("comment")[0];
        //获取表单上的元素
        var xingxing = document.getElementsByClassName("xingxing")[0];
        var xinglist = xingxing.children;
        var showDate = document.getElementsByClassName("showDate")[0];
        var testName = document.getElementsByClassName("testName")[0];
        var dianzan = document.getElementsByClassName("dianzan")[0];
        var budian = document.getElementsByClassName("budian")[0];
        var icon_zan1 = document.getElementsByClassName("ic1")[0];
        var icon_zan2 = document.getElementsByClassName("ic2")[0];
        var li_l = document.getElementsByClassName("li_l")[0];
        var li_r = document.getElementsByClassName("li_r")[0];


        var h_username = document.getElementById("h_username");
        var h_txt = document.getElementById("h_txt");
        var h_photos = document.getElementById("h_photos");
        var h_myCode = document.getElementById("h_myCode");
        var h_showCode = document.getElementById("h_showCode");
        var h_btnTo = document.getElementById("h_btnTo");

        //生成随机验证码
        
        function createCode(){
            var str = 'abcdefghijklmnopqrstuvwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var randomCode = "";
            for(var i=0;i<4;i++){
                var idx = Math.floor(Math.random()*str.length);
                randomCode +=str[idx];
            }
            return randomCode;
        }
        h_showCode.innerHTML = createCode();

        //创建时间
        function createDate(){
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var dateDetail =   day +"/" + month + "/" + year;
            return dateDetail;
        }

        //点击星星时，给星星加active类
        // var xingCount = 0;
        // for(var i=0;i<xinglist.length;i++){
        //     xinglist[i].onclick = function(){
        //         this.className = "active1";
        //         console.log(this);
        //         xingCount++; 
                
        //         this.onclick = function(){
        //             this.className = "";
        //             xingCount--;
        //         }
        //     }
        // }
        console.log(xinglist)
        var score = 1;
        xinglist[0].className = "active1";
        xingxing.onmouseover = e=>{
            e = e || window.event;
            var target = e.target || e.which;
            if(target.tagName.toLowerCase()==="span"){

                var index = 0;
                //获取target所在的索引值
                for(let i=0;i<xinglist.length;i++){
                    if(xinglist[i]===target){
                        index = i;
                    }
                }
                //再次遍历
                //把小于等于index的都添加高亮,大于的去掉高亮
                for(let i=0;i<xinglist.length;i++){
                    if(i<=index){
                        xinglist[i].className = "active1";
                    }else{
                        xinglist[i].className = "";
                    }
                }

            }
        }
        xingxing.onmouseout = e=>{
            e = e || window.event;
            var target = e.target || e.which;
            if(target.tagName.toLowerCase()==="span"){
                for(let i=0;i<xinglist.length;i++){
                    if(i>=score){
                        xinglist[i].className = "";
                    }
                }
            }
        }
        xingxing.onclick = e=>{
            e = e || window.event;
            var target = e.target || e.which;
            if(target.tagName.toLowerCase()==="span"){
                for(let i=0;i<xinglist.length;i++){
                    if(xinglist[i]===target){
                        score = i + 1;
                    }
                }
            }
        }


        

        //绑定点击事件，将输入的值放到li中
        h_btnTo.onclick = function(e){
            //获取输入的值
             _h_username = h_username.value;
             _h_txt = h_txt.value;
             _h_photos = h_photos.value;
             _h_myCode = h_myCode.value;


            //判断用户输入的验证码是否正确
            if(_h_myCode==h_showCode.innerText.toLowerCase()){
                h_showCode.innerHTML = createCode();
                h_myCode.value = "";

                 //添加li左边的div
                var li = document.createElement("li");
                var li_l = document.createElement("div");
                li_l.className = "li_l";

                //创建评分的星星
                var star = document.createElement("p");
                star.className = "star";
                var starSpan1 = document.createElement("span");
                var starSpan2 = document.createElement("span");
                var starSpan3 = document.createElement("span");
                var starSpan4 = document.createElement("span");
                var starSpan5 = document.createElement("span");
                star.appendChild(starSpan1);
                star.appendChild(starSpan2);
                star.appendChild(starSpan3);
                star.appendChild(starSpan4);
                star.appendChild(starSpan5);


                var starI1 = document.createElement("i");
                starI1.className = "iconfont" + " icon-xing";
                var starI2 = document.createElement("i");
                starI2.className = "iconfont" + " icon-xing";

                var starI3 = document.createElement("i");
                starI3.className = "iconfont" + " icon-xing";

                var starI4 = document.createElement("i");
                starI4.className = "iconfont" + " icon-xing";

                var starI5 = document.createElement("i");
                starI5.className = "iconfont" + " icon-xing";


                starSpan1.appendChild(starI1);
                starSpan2.appendChild(starI2);
                starSpan3.appendChild(starI3);
                starSpan4.appendChild(starI4);
                starSpan5.appendChild(starI5);
                li_l.appendChild(star);
                

                var starIarr = [];
                starIarr.push(starI1,starI2,starI3,starI4,starI5);
                for(var i=0;i<starIarr.length;i++){
                    starIarr[i].style.color = "#ccc";
                }
                for(var j=0;j<score;j++){
                    starIarr[j].style.color = "#FF9D03";
                }
                


                var showDate = document.createElement("span");
                showDate.className = "showDate";

                //把当前时间传上去
                showDate.innerHTML = createDate();
                li_l.appendChild(showDate);
                var testName = document.createElement("p");
                testName.className = "testName";
                //把用户名传上去,
                testName.innerText = _h_username;
                li_l.appendChild(testName);
                h_username.value= "";




                var iconfont = document.createElement("p");
                //添加点赞
                var dianzan = document.createElement("span");
                iconfont.appendChild(dianzan);
                var icon_zan1 = document.createElement("i");
                icon_zan1.className = 'iconfont' + ' icon-zan1' + " ic1";
                dianzan.appendChild(icon_zan1);
                var icount1 = document.createElement("i");
                icount1.style.color = "#FF898E";
                dianzan.appendChild(icount1);
                //添加不喜欢
                var budianzan = document.createElement("span");
                iconfont.appendChild(budianzan);
                var icon_zan2 = document.createElement("i");
                icon_zan2.className = "iconfont" +  " icon-zan2" + " ic2";
                budianzan.appendChild(icon_zan2);
                var icount2 = document.createElement("i");
                icount2.style.color = "#FF898E";
                budianzan.appendChild(icount2);

                li_l.appendChild(iconfont);

                //点赞/不喜欢点击的数量
                var dianzanCount = 0;
                var budianCount = 0;
                icon_zan1.onclick = function(){
                    dianzanCount++;
                     icount1.innerHTML ="(" +  dianzanCount + ")";
                     icon_zan1.parentNode.style.color = "#f60";
                }
                icon_zan2.onclick = function(){
                    budianCount++;
                    icount2.innerHTML = "(" +budianCount + ")";
                     icon_zan2.parentNode.style.color = "#f60";
                }


                //添加li右边的div
                var li_r = document.createElement("div");
                li_r.className = "li_r";
                //用p装评论内容，还要过滤敏感字符
                var p_com = document.createElement("p");
                p_com.className = "p_com";
                p_com.style.color = "#333";
                var mingan = 'shit,fuck,法轮功,金三胖,六合彩,赌博,我操,尼玛'.split(',');
                var data = [];
                mingan.forEach(function(item){
                    var reg = new RegExp(item,'ig');
                            //替换
                    _h_txt = _h_txt.replace(reg,'**');
                    
                });
                    data.push(_h_txt);
                    mag(_h_txt);
                    h_txt.value= '';
                    

                function mag(str){
                    var res = data.map(function(item){
                        return item
                        }).join('');
                    p_com.innerHTML = res;
                }
                li_r.appendChild(p_com);

                //用div来装传上去的图片
                var unloadImg = document.createElement("img");
                unloadImg.className = "ima";
                console.log(_h_photos);
                var arr = _h_photos.split("\\");
                var lujing = "";
                lujing +=arr[2];
                unloadImg.src = "../img/" + lujing;
                li_r.appendChild(unloadImg);

                var imgThank = document.createElement("img");
                imgThank.className = "ima1";
                imgThank.src = "../img/thank.png";
                li_r.appendChild(imgThank);


                li.appendChild(li_l);
                li.appendChild(li_r);
                comment.appendChild(li);
            }
            else{
                alert("请重新输入验证码");
                //验证码刷新
                h_showCode.innerHTML = createCode();
                h_myCode.value = "";
            }
        }
    }
/*-----------------------------------------------------------*/

}