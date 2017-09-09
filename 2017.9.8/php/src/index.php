<?php
// 端口必须用数字
    echo "yao";
    //与js不一样php里分号必须写
    $num = 21;
    $num2 = 22;
    function show(){
        //与js不一样函数里无法使用函数外的全局变量
        echo "$num";
        //使全局变量作用到函数局部两种方式
        //法一
        //此处num2没有$号,$号只是修饰符
        $num2 = $GLOBALS['num2'];
        echo "$num2";
        //法二
        global $num;
        echo "第二种方式$num";
    }

    show();
    //php支持html标签
    echo "yao<br>yao<br>";
    //字符串拼接用并置运算符 . 不用+
    echo "I"." love"." you<br>";

    //数组
    //数组不能用echo打印
    //创建数值数组（带索引值）
    $arr = array(10,20,30);
    print_r($arr);
    //var_dump()多用于测试
    var_dump($arr);
    //获取里面的值
    //不能写成echo '$arr[1]' 因为单引号里的内容内容总被认为是普通字符，'$arr[1]'会识别成字符，打印出$arr[1];
    //双引号串中的内容可以被解释而且替换 ,即可以是变量换行符\n之类的
    echo '$arr[2]';//打印出$arr[1]
    echo "$arr[2]";//打印出30
    //创建关联数组
    //类似js里的对象
    $arr_good = array(
        'name'=>'yao',
        'age'=>'21',
        'gender'=>'male',
        );
    var_dump($arr_good);
    //获取里面的值
    //注意方括号里要加引号
    echo $arr_good['name'];


    //遍历数值数组（数值数组建议用for循环）
    echo '遍历数值数组<br>';
    for($i=0;$i<count($arr);$i++){
        echo "$arr[$i]<br>";
    }
    

    //遍历关联数组
    echo '遍历关联数组<br>';
    echo '只输出值<br>';
    foreach($arr_good as $item){
        echo "<p>$item</p>";
    }
    echo '输出键值对<br>';
    foreach($arr_good as $item=>$val){
        echo "<p>$item:val</p>";
    }

    //数组写入
    echo '数组写入(数组最后写入)<br>';
    //法一
    $arr[count($arr)] = 40;
    print_r($arr);
    //法二php专用的很简单的写法
    $arr[] = 50;
    print_r($arr);
    echo '延伸出一种往后添加值的好方法<br>';
    for($i=0;$i<5;$i++){
         $arr[]=60+$i*10;
    }
    print_r($arr);

    //php里面创建对象
    
    echo '<p>php里面创建对象</p>';
    //类
    class Person{
        //添加属性（该属性是固定的）相当于js里给原型对象添加属性
        var $gender = 'male';
        //在调用new Person时必定会执行__construct()函数(我们称它为构造函数)
        function __construct($name,$age){
            //给实例（对象）添加属性(该属性随你传入参数改变)
            //此处this也是一个变量
            $this->name = $name;
            $this->age = $age;
            echo "<p>$name,$age</p>";
        }

        //添加方法(该方法不会在var_dump($p)里打印出来)
        function say(){
            echo "你好我叫".$this->name.'今年'.$this->age.'岁';
        }
    }
    $p = new Person('yao','21');
    //属性访问
    //利用->
    echo '属性访问:'.$p->gender;
    var_dump($p);
    //方法调用也是用->
    $p->say();
?>