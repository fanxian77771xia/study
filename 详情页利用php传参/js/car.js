/* 
* @Author: Marte
* @Date:   2017-08-26 16:06:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-09 18:01:03
*/

        document.addEventListener('DOMContentLoaded',function(){
                
                
                
                //创建购物车列表对象
                var car = {
                    //定义属性
                    carList : document.getElementById("carList"),
                    saving : document.getElementsByClassName("saving")[0],
                    subPrice : document.getElementsByClassName("subPrice")[0],
                    btnClear : document.getElementById("btnClear"),
                    
                    // 定义sumprice和sumoldprice用来计算所有商品总价
                    sumprice : 0,
                    sumoldprice : 0,
                    // 先读取cookie
                    cookies : document.cookie,
                    // 设置calist用来存货物详情
                    carlist : [],
                    // 抓取删除按钮
                    btnClose : document.getElementsByClassName("btn-close"),
                    // 先获取加减按钮
                    addbtn : document.getElementsByClassName("addbtn"),
                    substractbtn : document.getElementsByClassName("substractbtn"),
                    //现读取上一次的cookie,初始化时把上一次的数据写入
                    getcookie:function(){
                        var cookies = document.cookie;
                        if(cookies.length>0){
                            cookies = cookies.split("; ");
                            cookies.forEach(function(item){
                                var temp = item.split("=");
                                if(temp[0]==="carlist"){
                                    car.carlist = JSON.parse(temp[1]);
                                }
                            })
                        }
                        return this;
                    },
                    //初始化
                    init:function(){
                        if(this.cookies.length>0){
                            this.cookies = this.cookies.split("; ");
                            this.cookies.forEach(function(item){
                                var temp = item.split("=");
                                if(temp[0]==="carlist"){
                                    this.carlist = JSON.parse(temp[1]);
                                }
                            })
                        }
                        
                        return this;
                    },
                    //生成列表
                    bianli:function(){

                        // 每次遍历都要把总计归零
                        this.sumprice = 0;
                        this.sumoldprice = 0;
                        // 把carlist的对象进行遍历输出
                        var ul = document.createElement("ul");
                        for(i=0;i<this.carlist.length;i++){
                            var li = document.createElement("li")
                            
                            
                            // 图片
                            var imgurl = document.createElement("div");
                            imgurl.style.background = "url("+this.carlist[i].imgurl+") no-repeat center center";
                            li.appendChild(imgurl);
                            // 商品名称
                            var title = document.createElement("p");
                            title.innerHTML = this.carlist[i].title;
                            li.appendChild(title);
                            // 价格
                            var price = document.createElement("p");
                            price.className = "price";
                            price.innerHTML = this.carlist[i].prices+"py6.";
                            li.appendChild(price);
                            // 物品数量(包括加减键和数目)
                            var total = document.createElement("div");
                                
                                // 减键
                                var subtract = document.createElement("span");
                                subtract.className = "substractbtn";
                                // subtract.innerHTML = "-";
                                total.appendChild(subtract);
                                // 数目显示
                                var num = document.createElement("span");
                                num.innerHTML = this.carlist[i].qty;
                                total.appendChild(num);
                                // 加键
                                var add = document.createElement("span");
                                add.className = "addbtn";
                                // add.innerHTML = "+";
                                total.appendChild(add);
                            
                            li.appendChild(total);  
                            // 总价
                            var sum = document.createElement("span");
                            sum.innerHTML = this.carlist[i].qty*this.carlist[i].prices.toFixed(2)+"py6.";
                            sum.setAttribute('_sum',this.carlist[i].qty*this.carlist[i].prices);
                            
                            li.appendChild(sum);
                            // 删除按钮
                            var del = document.createElement("span");
                            // del.innerHTML = "&times;";
                            del.className = "btn-close";
                            li.appendChild(del);
                            // 老价格
                            var oldprice = document.createElement("p");
                            oldprice.className = "oldprice";
                            oldprice.innerHTML = this.carlist[i].oldprice.toFixed(2)+"py6.";
                            li.appendChild(oldprice);
                            // 每个商品老价格与现价格之差
                            var distance = document.createElement("p");
                            distance.className = "distance";
                            //如果要拼接表达式要给它个括号否则表达式里的字符（如加减号）会使其成字符串
                            distance.innerHTML = 'You save '+(this.carlist[i].oldprice*this.carlist[i].qty-this.carlist[i].qty*this.carlist[i].prices).toFixed(2) +'py6';
                            li.appendChild(distance);
                            // 计算sumprice
                            this.sumprice+=this.carlist[i].qty*this.carlist[i].prices;
                            // 计算老价格sumoldprice
                            this.sumoldprice+=this.carlist[i].qty*this.carlist[i].oldprice;
                            
                            ul.appendChild(li);
                        }
                        this.carList.appendChild(ul);
                        // 输出总价
                        this.subPrice.innerHTML =this.sumprice.toFixed(2) + "py6";
                        this.saving.innerHTML ="Your Total Savings: " + (this.sumoldprice - this.sumprice).toFixed(2)+" py6";
                        return this;
                    },
                    // 设置删除按钮事件
                    del:function(){

                        for(i=0;i<this.btnClose.length;i++){
                            this.btnClose[i].onclick = (e)=>{
                                e = e || window.event;
                                var target = e.target || e.srcElement;
                                if(target.className=="btn-close"){
                                    var currentparent = target.parentNode.parentNode;
                                    currentparent.removeChild(target.parentNode);
                                    //先在carlist里修改数据
                                    for(l=0;l<this.carlist.length;l++){
                                        if(this.carlist[l].title==target.parentNode.children[1].innerHTML){
                                            this.carlist.splice(l,1);console.log(this.carlist)
                                        }
                                    }
                                    // 再把carlist数据覆盖在原来cookie里去
                                    // 记住要与根目录路径一样才能覆盖
                                    document.cookie = "carlist=" + JSON.stringify(this.carlist)+';path=/;';
                                        console.log("carlist=" + JSON.stringify(this.carlist));
                                        
                                    
                                    // 删除之后在算所有商品总价并显示
                                    // 遍历剩下所有商品并获取_sum进行运算
                                    // 用于计算删除列表后的总价
                                    // 这两个元素得在生成列表后才开始抓取
                                    var carListUl = this.carList.children[0];
                                    var carListLi = carListUl.children;
                                    var _total = 0;
                                    for(j=0;j<carListLi.length;j++){
                                        
                                        _total+=Number(carListLi[j].children[4].getAttribute('_sum'));

                                    }
                                    if(carListLi.length == 0){
                                            _total = 0;
                                            
                                        }
                                    this.subPrice.innerHTML = _total.toFixed(2) + 'py6';
                                    
                                    
                                }
                            }
                        }
                        return this;
                    },
                    // 数量加减按钮事件
                    //加键按钮事件
                    add:function(){

                        for(i=0;i<this.addbtn.length;i++){
                            this.addbtn[i].onclick=(e)=>{
                                e = e || window.event;
                                var target = e.target || e.srcElement;
                                if(target.className=="addbtn"){
                                    //1.先使显示数字加1
                                    
                                    target.previousElementSibling.innerHTML=Number(target.previousElementSibling.innerHTML)+1;
                                    // 2.变更cookie数据
                                    var target_title = target.parentNode.parentNode.children[1].innerHTML;
                                    for(j=0;j<this.carlist.length;j++){
                                        if(this.carlist[j].title==target_title){
                                            this.carlist[j].qty=target.previousElementSibling.innerHTML;
                                            document.cookie = "carlist = " + JSON.stringify(this.carlist)+';path=/;';
                                            this.carList.removeChild(this.carList.children[0]);
                                            this.bianli();
                                            // 重新调用自身
                                            this.add();
                                            this.substract();
                                            this.del();
                                            this.clear();
                                        }
                                    }
                                  
                                }
                            }
                        }
                        return this;
                    },
                    //减键按钮事件
                    substract:function(){

                        for(i=0;i<this.substractbtn.length;i++){
                            this.substractbtn[i].onclick=(e)=>{
                                e = e || window.event;
                                var target = e.target || e.srcElement;
                                if(target.className=="substractbtn"){
                                    //1.先使显示数字加1
                                    
                                    if(target.nextElementSibling.innerHTML>0){target.nextElementSibling.innerHTML=Number(target.nextElementSibling.innerHTML)-1;}
                                    
                                    // 2.变更cookie数据
                                    var target_title = target.parentNode.parentNode.children[1].innerHTML;
                                    for(j=0;j<this.carlist.length;j++){
                                        if(this.carlist[j].title==target_title){
                                            this.carlist[j].qty=target.nextElementSibling.innerHTML;
                                            document.cookie = "carlist = " + JSON.stringify(this.carlist)+';path=/;'
                                            this.carList.removeChild(this.carList.children[0]);
                                            this.bianli();
                                            // 重新调用自身
                                            this.substract();
                                            this.add();
                                            this.del();
                                            this.clear();
                                        }
                                    }
                                  
                                }
                            }
                        }
                        return this;
                    },
                    //清除购物车
                    clear:function(){
                        // 清空购物车
                        this.btnClear.onclick = ()=>{
                            // 判断ul存在时才能清空
                            if(this.carList.children[0]){
                                var date = new Date();
                                date.setDate(date.getDate()-7);
                                // 记住要与根目录路径一样才能覆盖
                                document.cookie = "carlist=xx;expires="+date.toString()+';path=/;';
                                //把购物车列表也清空
                                this.carlist = [];
                                this.carList.removeChild(this.carList.children[0]);
                                //重新生成一个ul避免其他基于ul的方法出错
                                var ul = document.createElement('ul');
                                this.carList.appendChild(ul);
                                this.subPrice.innerHTML = 0 + 'py6';
                            }
                            
                        }
                        return this;
                    },
                    
                }
                car.getcookie().init().bianli().del().add().substract().clear()
                
                //创建热点商品对象
                var hotitem = {
                    y_footer : document.querySelector('#y_footer'),
                    
                    // 抓取左滚动按钮
                    leftArrow : document.querySelector('.y_left_arrow'),
                    // 抓取右滚动按钮
                    rightArrow : document.querySelector('.y_right_arrow'),
                    // ajax获取商品信息
                    xhr : new XMLHttpRequest(),

                    init:function(){
                        this.xhr.onreadystatechange = ()=>{
                            if(this.xhr.readyState === 4){
                                var datalist = JSON.parse(this.xhr.responseText);

                                var ul = document.createElement('ul');
                                ul.innerHTML = datalist.map(item=>{
                                    return `
                                            <li>
                                                <div>
                                                    <img src="${item.imgurl}"/>
                                                </div>
                                                <p>${item.title}</p>
                                                <span>${item.oldprice}</span>
                                                <span>${item.prices}</span>
                                                <a>Add to</a>
                                            </li>
                                    `
                                }).join('');

                                this.y_footer.appendChild(ul);
                                // 抓取滚动ul，由于ul是初始化时生成的，因此得在ul生成后在抓取ul
                                this.arrowUl = document.querySelector('#y_footer ul');
                            }
                        }

                        this.xhr.open('get','../php/carlist.JSON',true);

                        this.xhr.send();
                        
                        
                        return this;
                    },                   
                    // 热点商品左右滚动
                    leftmove:function(){
                        this.leftArrow.onclick = ()=>{
                            if(this.arrowUl.offsetLeft==0){
                                animate(this.arrowUl,{left:-1014})
                            }else if(this.arrowUl.offsetLeft==-1014){
                                animate(this.arrowUl,{left:0})
                            }
                        }
                        return this;
                    },
                    rightmove:function(){
                        this.rightArrow.onclick = ()=>{
                            if(this.arrowUl.offsetLeft==0){
                                animate(this.arrowUl,{left:-1014})
                            }else if(this.arrowUl.offsetLeft==-1014){
                                animate(this.arrowUl,{left:0})
                            }
                            
                        }
                        return this;
                    },
                    // 点击底部热点商品添加到购物车
                    addhotitem:function(){
                        this.y_footer.onclick = (e)=>{
                            e = e || window.event;
                            var target = e.target || e.srcElement;
                            if(target.nodeName.toLowerCase()=='a'){
                                function hotItem(){
                                    // 读取点击商品所对应的信息
                                    var target_title = target.parentNode.children[1].innerHTML;
                                    var target_prices = target.parentNode.children[3].innerHTML.slice(0,-4);
                                    var target_oldprice = target.parentNode.children[2].innerHTML.slice(1);
                                    var target_qty = 1;
                                    var target_imgurl = target.parentNode.children[0].children[0].src;
                                    //把所有信息放入一个对象
                                    var target_good = {}
                                    target_good.title = target_title;
                                    target_good.prices = Number(target_prices);
                                    target_good.oldprice = Number(target_oldprice);
                                    target_good.qty = Number(target_qty);
                                    target_good.imgurl = target_imgurl;
                                    //把所生成的对象添加到carlist里
                                    car.carlist.push(target_good);
                                    //把carlist重新写入cookie里去
                                    document.cookie = "carlist = " + JSON.stringify(car.carlist)+';path=/;';
                                    //重新生成购物车列表
                                    car.carList.removeChild(car.carList.children[0]);
                                    car.bianli();
                                    car.add();
                                    car.substract();
                                    car.del();
                                    car.clear();
                                    // 获取当前所在li
                                    let currentLi = target.parentNode;
                                    // 1>复制当前商品图片(用于实现动画效果)
                                    let currentImg = currentLi.querySelector('img');
                                    let copyImg = currentImg.cloneNode();
                                    // 把复制的图片写入页面，并设置样式（定位到当前商品图片所在的位置）
                                    copyImg.style.position = 'absolute';
                                    copyImg.style.left = currentImg.offsetLeft + 'px';
                                    copyImg.style.top = currentImg.offsetTop + 'px';
                                    copyImg.style.width = currentImg.clientWidth + 'px';
                                }
                                if(!carList.children[0].children[0]){
                                    hotItem();
                                    car.add();
                                    car.substract();
                                    car.del();
                                    car.clear();
                                    return;
                                }
                                //点击后判断商品是否已存在
                                
                                for(i=0;i<car.carList.children[0].children.length;i++){            
                                    if(car.carList.children[0].children[i].children[1].innerHTML==target.parentNode.children[1].innerHTML){
                                        //如果存在改变carlist里已存在对象的qty数据
                                        for(j=0;j<car.carlist.length;j++){
                                            if(car.carList.children[0].children[i].children[1].innerHTML==car.carlist[j].title){
                                                car.carlist[j].qty++;
                                                document.cookie = "carlist = " + JSON.stringify(car.carlist)+';path=/;';
                                                //重新生成购物车列表
                                                car.carList.removeChild(car.carList.children[0]);
                                                car.bianli();
                                                car.add();
                                                car.substract();
                                                car.del();
                                                car.clear();
                                                return;
                                            }
                                        }
                                    }
                                }
                                hotItem();
                                
                                
                            }
                            
                        }
                        return this;
                    },
                }
                hotitem.init().leftmove().rightmove().addhotitem()



                
                

                

                
                
                
                
                

                
                
                
               
                
                
                

                
                

  
                
                
               
                
                
                
                

                
                
                
                
        }) 
