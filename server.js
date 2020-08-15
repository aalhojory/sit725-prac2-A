const express= require('express')

var sentiment=require('sentiment');

var sentiment=new sentiment();

let app=express()
let app2=express()

app.use(express.static('public'))

let addition=function(num1, num2){
    let result=num1+num2;
    return result;
}

/*app.get('/',function(request,response){

response.send('Hello World')
})*/

let sentimentAnalysis=function(text){
    let result=sentiment.analyze(text);
    return result
}

app.get('/analyze', function(request,response){
    let text=Request.query.text;
    let resultAnalysis=sentimentAnalysis(text)
    response.json(resultAnalysis)
})

app.get('/adder',function(request,response){
    let num1=parseInt(request.query.num1);
    let num2=parseInt(request.query.num2);
    console.log(num1)
    console.log(num2)
    let MyResult=addition(num1,num2);
    response.send('Result='+MyResult)
})

app.get('/test',function(request,response){

    response.send('This is the test endpoint')
    })

app.listen(3000)  