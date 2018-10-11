<?php
    // 获取用户名
    // 返回的数据类型为json结构
    header("Content-Type: application/json");
    // 允许所有域名跨域
    header("Access-Control-Allow-Origin:*");
    include "public/connect_db.php";
    // 获取传输的json字符串
    $json = json_decode(file_get_contents("php://input"));
    $phone = $json -> phone;
    // $username = $json -> username;
    // $password = $json -> password;
    // $sql = "SELECT * from shop_user WHERE username='$username'";
    // $insert_sql = "INSERT into shop_user (username, password) VALUES ('$username', '$password')";//插入新的用户
    $sql = "SELECT * from tel_phone WHERE phone='$phone'";
    $insert_sql = "INSERT into tel_phone (phone) VALUES ('$phone')";//插入新的手机号
    $coon = new db();
    // 判断用户名称是否存在
    $rows = $coon -> Query($sql, 2);
    // 如果可以找到,返回关联数组, 找不到返回null
    if($rows) {
      // 查到结果
      $arr = array("code" => "1000", "msg" => "用户名已经存在, 注册不成功");

    } else {
      // 没查到
      // 判断用户名称不存在,添加用户  
      $result = $coon -> Query($insert_sql, 3);
      if($result) {
        //   注册成功
        $arr = array("code" => "200", "msg" => "");
      } else {
        //   注册失败
        $arr = array("code" => "1001", "msg" => "注册失败,未知原因");
      }
    }
    echo json_encode($arr);

  ?>