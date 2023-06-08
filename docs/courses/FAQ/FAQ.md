---
title: 常见问题及其解决方法
---
# 常见问题及其解决方法
>自己解决不了的报错建议使用脚本，脚本会自动配置解决一些不必要的麻烦，当然这不是绝对的

[[toc]]

## icqq的 禁止登录&版本过低<Badge type="danger" text="非常重要" />
>* 1使用脚本修复，根据脚本内指引提示完成操作即可
>* 2手动修复


### 1.版本过低 <Badge type="warning" text="重要的" />
* 尝试更换登录设备，建议使用手表,Mac OS设备，尝试更改位于data下的`device.json`。引号内的字符随便改，原来有几个字符改为后还是有几个字符。改完之后输入

```sh
npm run login
```
建议多试几次<Badge type="tip" text="建议" />
 ### 2.icqq的[禁止登录]（错误码:45） 
 * 建议使用脚本修复 [传送门](/courses/menu1/开始/02-脚本部署.md)<Badge type="tip" text="建议" />

 ### 3.icqq的[禁止登录]（错误码:235）
 * 解决方法：删除[data](/courses/menu1/开始/05-结构目录.md)下的配置文件
 可以手动删除也可以执行下面的代码

::: details  yunzai  
```sh  
rm -rf data/device.json
```
:::


::: details Miao-Yunzai
```sh
rm -rf data/icqq
```
:::

* 最后执行
```sh 
node app
```
* 不会用脚本[传送门](/courses/menu1/开始/02-脚本部署.md)<Badge type="tip" text="建议" />

~~别告诉我你分不清~~

### 4.icqq的[禁止登录]（错误码:235）
 
 风控，等一段时间（可能一下下，几十分钟，几小时...）就可登录，建议是换号先使用其他小号<Badge type="tip" text="建议" />

 ### 5.icqq的[禁止登录]（错误码:238）
 换个协议，密码登录， 建议使用`手表，Mac OS`。

## 登录token过期<Badge type="danger" text="非常重要" />
> * 1.使用脚本
> * 执行
```sh
pnpm i && pnpm add icqq@0.3.14 -w
```
>删除Yunzai-bot\data文件夹下的device.json文件
>然后进入Yunzai-Bot\config\config文件夹下文本打开qq.yaml
```sh
# qq账号
qq: 123456789
# 密码，为空则用扫码登录,扫码登录现在仅能在同一ip下进行
pwd: ''
# 1:安卓手机、 2:aPad 、 3:安卓手表、 4:MacOS 、 5:iPad
platform: 6
```
> 把platform: 冒号后面改为6
> 然后`node app`