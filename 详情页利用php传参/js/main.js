window.onload = function(){
                    // -----------------轮播图---------------------
 var header_1 = document.getElementById('header_1');
      var header_2 = document.getElementById('header_2');
            var nav = document.getElementById('nav');
            var main = document.getElementById('main');

            //滚动窗口滚动条时触发
            window.onscroll = function(){
                if(window.scrollY>=100){
                    // 添加class属性为fixed
                    // 
                    header_1.className = 'fixed3';
                    header_2.className = 'fixed2';
                    nav.className = 'fixed1';
                    main.style.marginTop = '52px';
                }else{
                    // 清空class属性
                    header_1.className = '';
                    header_2.className = '';
                    nav.className = '';
                    main.style.marginTop = 0;
                }
            }

//获取页面上的元素
    var ul_l = document.getElementById("ul_l");
    var ul_r = document.getElementById("ul_r");
    var priceOrder = document.getElementById("priceOrder");//商品价格的id----升序
    var priceOrder1 = document.getElementById("priceOrder1");//商品价格的id----降序


/*---------------------------左边侧边栏数据列表生成--------------------------------------*/
//左边ul的数据列表
    var dataList1 = [
        {   
            imgURL:"img/img1.png",
            detail:"Decent Module Case Silicone Skin Cover for IPhone...",
            listPrice:"USD 219",
            ourPrice:"USD 189",
            save:"Save USD 30"
        },
        {
            imgURL:"img/img2.png",
            detail:"Decent Module Case Silicone Skin Cover for IPhone...",
            listPrice:"USD 219",
            ourPrice:"USD 189",
            save:"Save USD 30"
        },
        {
            imgURL:"img/img3.png",
            detail:"Decent Module Case Silicone Skin Cover for IPhone...",
            listPrice:"USD 219",
            ourPrice:"USD 189",
            save:"Save USD 30"
        }
    ];

    function goods1(){
        //遍历读取数据列表
        var res1 = dataList1.map(function(item){
        return  '<li><img src="'+item.imgURL+'"><p class="detail">'+item.detail+'</p><p class="listPrice">List Price: <span>'+item.listPrice+'</span></p><p class="ourPrice">Our Price: <span>'+item.ourPrice+'</span></p><p class="save">'+item.save+'</p></li>';
        }).join("");
        //生成html结构，写入左栏的ul中
        ul_l.innerHTML = res1;
    }
    goods1();
/*------------------------------------------------------------------------------------------*/





/*--------------------------------右边数据列表生成-----------------------------------------*/

//右边板块的ul数据列表
    var dataList2 = [
        {
            imgURL:"img/img1.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:189,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img2.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:289,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img3.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:3389,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img4.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:300,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img5.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:132,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img6.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:99,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img7.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:1809,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img8.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:489,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
            {
            imgURL:"img/img1.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:189,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img2.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:289,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img3.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:389,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img4.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:301,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img5.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:101,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img6.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:199,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img7.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:789,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img8.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:4089,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img2.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:288,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img3.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:389,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img4.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:302,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img1.png",
            ck:"",
            detail:"Up & Down Open Cowhide Leather Case width Crocodile...",
            listPrice:"USD 219",
            ourPrice:100,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img5.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:1089,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img5.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:1089,
            save:"Save USD 30",
            wholesale:"wholesale"
        },
        {
            imgURL:"img/img5.png",
            ck:"",
            detail:"Decent Module Case Silicone Skin Cover for iPhone...",
            listPrice:"USD 219",
            ourPrice:1089,
            save:"Save USD 30",
            wholesale:"wholesale"
        }
    ];
   
    function goods2(){
        //遍历数组
        var res2 = dataList2.map(function(item,idx){
        return '<li id="li'+idx+'"><img src="'+item.imgURL+'"/><input type="checkBox" class="ck"/><span class="detail">'+item.detail+'</span><br><span class="listPrice">'+item.listPrice+'</span> <span class="ourPrice"><span>USD </span>'+item.ourPrice+'</span><p class="save">'+item.save+'</p><a href="#" class="wholesale">'+item.wholesale+'</a></li>'
        }).join("");

        //生成html结构

        ul_r.innerHTML = res2;
    }

    goods2();
    transfer();
/*-----------------------------------------------------------------------------------------*/

    




/*---------------------------------按照价格对商品进行排序---------------------------------*/
//要求按照价格排序(

    priceOrder.onclick = function(){
        dataList2.sort(function(a,b){
            return b.ourPrice - a.ourPrice;
        });
        ul_r.innerHTML = "";
        goods2();
        transfer();
    }
    priceOrder1.onclick = function(){
        dataList2.sort(function(a,b){
            return a.ourPrice - b.ourPrice;
        });
        ul_r.innerHTML = "";
        goods2();
        transfer();
    }
/*----------------------------------------------------------------------------------------*/





/*--------------------------------------数据传参------------------------------------------*/
//获取元素li，当点击li时就会跳转并把参数传到详情页
    function transfer(){
        var li0 = document.getElementById("li0");
        var li1 = document.getElementById("li1");
        var li2 = document.getElementById("li2");
        var li3 = document.getElementById("li3");
        var li4 = document.getElementById("li4");
        var li5 = document.getElementById("li5");
        var li6 = document.getElementById("li6");
        var li7 = document.getElementById("li7");
        var li8 = document.getElementById("li8");
        var li9 = document.getElementById("li9");
        var li10 = document.getElementById("li10");
        var li11 = document.getElementById("li11");
        var li12 = document.getElementById("li12");
        var li13 = document.getElementById("li13");
        var li14 = document.getElementById("li14");
        var li15 = document.getElementById("li15");
        var li16 = document.getElementById("li16");
        var li17 = document.getElementById("li17");
        var li18 = document.getElementById("li18");
        var li19 = document.getElementById("li19");
        var li20 = document.getElementById("li20");
        var li21 = document.getElementById("li21");
        var li22 = document.getElementById("li21");
        var li23 = document.getElementById("li21");

        function toDetail(){
            var params = "";
            //对数组进行遍历
            for(var i=0;i<dataList2.length;i++){

                var obj = dataList2[i];
                //再对数组里面的对象进行遍历
                for(var att in obj){
                    params +=att + "=" +obj[att] + "&";
                }
            }
            //去掉最后多余的&
            params = params.slice(0,-1);
            console.log(params);
            location.href = "html/detail.html?" + params;
        }


        li0.onclick = function(){
            toDetail();
        }
        li1.onclick = function(){
            toDetail();
        }
        li2.onclick = function(){
            toDetail();
        }
        li3.onclick = function(){
            toDetail();
        }
        li4.onclick = function(){
            toDetail();
        }
        li5.onclick = function(){
            toDetail();
        }
        li6.onclick = function(){
            toDetail();
        }
        li7.onclick = function(){
            toDetail();
        }
        li8.onclick = function(){
            toDetail();
        }
        li9.onclick = function(){
            toDetail();
        }
        li10.onclick = function(){
            toDetail();
        }
        li11.onclick = function(){
            toDetail();
        }
        li12.onclick = function(){
            toDetail();
        }
        li13.onclick = function(){
            toDetail();
        }
        li14.onclick = function(){
            toDetail();
        }
        li15.onclick = function(){
            toDetail();
        }
        li16.onclick = function(){
            toDetail();
        }
        li17.onclick = function(){
            toDetail();
        }
        li18.onclick = function(){
            toDetail();
        }
        li19.onclick = function(){
            toDetail();
        }
        li20.onclick = function(){
            toDetail();
        }
        li21.onclick = function(){
            toDetail();
        }
        li22.onclick = function(){
            toDetail();
        }
        li23.onclick = function(){
            toDetail();
        }
    }
/*------------------------------------------------------------------------------------*/
}