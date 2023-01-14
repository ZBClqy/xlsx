
export function exportXlsx(data,cloumData,xlsxName){    
    let execlContent='';
    let contentHead=Object.keys(cloumData)
    for(let i=0;i<contentHead.length;i++){
        if(!execlContent){
            execlContent+=`${cloumData[contentHead[i]]}`
        }else if(i==contentHead.length-1){
            execlContent+=`,${cloumData[contentHead[i]]}
`
        }else{
            execlContent+=`,${cloumData[contentHead[i]]}`
        }
    }

    if(data.length>0){
        for(let i=0;i<data.length;i++){
            for(let j=0;j<contentHead.length;j++){
                execlContent+=`${data[i][contentHead[j]]},`
            }
            execlContent+=`
`
        }
    }

    execlContent.trim()
    //我们将拼接好的字符串声明一个blob对象，记得将我们的字符串放到第一个数组参数中，然后我们在传入第二个指定文本格式的对象参数
    let blob=new Blob([execlContent],{ type:"text/plain;charset=utf-8"})
    //为了防止中文乱码我们在使用String.fromCharCode(0xFEFF)结合我们刚才声明的blob对象再次声明成新的blob对象
    blob=new Blob([String.fromCharCode(0xFEFF),blob],{type:blob.type})
    //然后我们使用URL的createObjectUrl将blob示例变成链接对象
    const execlUrl=window.URL.createObjectURL(blob)
    //最后创建一个a标签然后将其href指定为我们生成的链接对象，然后配置down属性为我们下载的文件名，最后触发单机事件即可
    const link=document.createElement('a')
    link.href=execlUrl
    link.download=`${xlsxName}.xls`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
