
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

    let blob=new Blob([execlContent],{ type:"text/plain;charset=utf-8"})
    blob=new Blob([String.fromCharCode(0xFEFF),blob],{type:blob.type})
    const execlUrl=window.URL.createObjectURL(blob)
    const link=document.createElement('a')
    link.href=execlUrl
    link.download=`${xlsxName}.xls`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}
