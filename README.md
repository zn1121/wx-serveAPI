# wx-serveAPI
自动化构建小程序API

---
## clone下来之后在项目文件下执行npm install便可使用

## 接口文档
### 随机拼接口
- 接口：https://zn1121.com/suijipin
- 参数：id
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的内容
- 查看接口数据（例）：https://zn1121.com/suijipin?id=1

### 帮你拼接口
- 接口：https://zn1121.com/bangnipin
- 参数：food_name
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的内容
- 查看接口数据（例）：https://zn1121.com/bangnipin?food_name=鱼香肉丝
- 说明：在菜品总表里面查询

### 帮你拼荤菜接口
- 接口：https://zn1121.com/help_hcid
- 参数：food_hcid
- 请求：get
- 成功返回值：array[]//一个数组，内容为菜的内容
- 查看接口数据（例）：https://zn1121.com/help_hcid?food_hcid=1
- 说明：在荤菜表里面通过查询

### 帮你拼素菜接口
- 接口：https://zn1121.com/help_scid
- 参数：food_hcid
- 请求：get
- 成功返回值：array[]//一个数组，内容为菜的内容
- 查看接口数据（例）：https://zn1121.com/help_scid?food_scid=1
- 说明：在素菜表里面通过查询

### 自主拼接口
- 接口：https://zn1121.com/zizhupin
- 参数：food_name
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的内容
- 查看接口数据（例）：https://zn1121.com/zizhupin?food_name=鱼香肉丝
- 说明：这个接口是判断你选择的是素菜，给你返回荤菜的列表，反之同理

### 自主拼二级页面接口
- 接口：https://zn1121.com/zizhupin_index
- 参数：food_name
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的内容
- 查看接口数据（例）：https://zn1121.com/zizhupin_index?food_name=鱼香肉丝
- 说明：这个接口是将页面传过来数据进行查询，返回的是菜品的详细信息

### 自主拼推荐接口
- 接口：https://zn1121.com/zizhupin_tuijian
- 参数：无
- 请求：get
- 成功返回值：array[]//一个数组，内容为每道菜的名字
- 查看接口数据（例）：https://zn1121.com/zizhupin_tuijian
- 说明：这个接口是随机返回9道菜的名字作为推荐
