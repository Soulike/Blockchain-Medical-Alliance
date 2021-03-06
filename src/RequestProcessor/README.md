# RequestProcessor

请求处理器文件夹。

该文件夹下放置各种请求处理异步函数。

请求处理异步函数是指，该函数是一个处理发出网络请求与接收网络响应的异步函数，返回 Promise 对象。该函数只有一个任务，就是发送请求并返回请求结果。调用者不需要关心请求的详细信息（方法、路由等），只期望函数可异步返回网络请求的结果。

本人对请求处理异步函数通常的命名方法是：

send *Method* *Route* RequestAsync

例如某个请求路由为 /login，方法为 POST，通常我会把这个函数命名为 sendPostLoginRequestAsync

但当路由就有 Get 字段且使用 GET 方法时通常不加方法，例如请求路由为 /getName，函数就可命名为 sendGetNameRequestAsync

Async 后缀是本人的一种习惯，用于标识该函数是异步函数，返回 Promise 对象，需要 await 调用。

另外，函数返回值有三种：

1. 请求成功，服务器不需要响应数据：返回 true
2. 请求成功，服务器响应所需数据：返回数据
3. 请求失败，返回 null