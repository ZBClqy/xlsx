# zbc-xlsx-execl

这是一个便捷的导出execl文件的纯前端库

`npm install zbc-xlsx-execl`

## 用例如下

`import { exportXlsx } from "zbc-xlsx-execl"`

`const data = [{`
    `name: 'zhangsan',`
    `age: 20,`
    `sex: '男'`
`},{`
    `name: 'zhangsan',`
    `age: 20,`
    `sex: '男'`
`}];`
`exportXlsx(data,{name:'姓名',age:'年龄',sex:'性别'},'execl名称')`

![image-20230114111822402](C:\Users\10037\AppData\Roaming\Typora\typora-user-images\image-20230114111822402.png)