
        
                // 抓取元素
                    var addcar = document.getElementById('li_jisuan');
                    console.log(6)
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
                    addcar.onclick = function(e){
                            
                            // 抓取当前图片所对应的商品
                            var good = document.getElementById("li_img");
                        

                            // 抓取li的子元素以便给cookie赋予详细信息
                            var children = currentLi.children;
                            
                            //点击时,先判断商品是否已在购物车里，若不在添加到购物车
                            //设定参数默认不存在
                            var has = false;
                            // 1.判断存在购物车的情况
                            
                            for(i=0;i<carlist.length;i++){
                                if(carlist[i].id == idx){
                                    carlist[i].qty+=1;
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
                                    qty:1,
                                    oldprice:219.99,
                                    // JSON.stringify里不能有多余的逗号
                                    id:idx
                                }
                                carlist.push(goods);
                            }
                            console.log(goods)
                            // 传入cookie
                            document.cookie = "carlist = " + JSON.stringify(carlist)+';path=/;';console.log(66666)
                        
                    }
            