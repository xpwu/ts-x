# ts-x
基础库，主要有：Logger, Duration, SerialQueue, Utf8, Delay 等

## 0、代码库的引用
```
"dependencies": {
    "ts-x": "github:xpwu/ts-x#semver:^0.5.0"
  },
```

## 1、Duration
* 定义一个绝对时间单位的时间段
	```typescript
 
	const d = 5 * Second
 
	// 直接使用
	await Delay(d)

	// 获取 毫秒数
	const millis = d / Millisecond
 
	```
 
## 2、Delay
* 代替 setTimeout 

## 3、Logger
* log 的接口，可以自定义 log 的输出格式及输出位置，输出 log 到固定的地方方便上传日志服务器，而不是输出到console

## 4、Utf8
* string 与 utf8 的互转；也可以获取一个码点

## 5、SerialQueue
* 'sync调用' 转 'async调用' 的一个缓冲队列

