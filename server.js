const express=require('express');//import
const bodyParser=require('body-parser');//import
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){ 
    //console.log(__dirname);//dirname polnij put k failu
    response.sendFile(__dirname+'/index.html');//fail otpravlat
});

app.post('/',function(request,response){
    console.log(request.body);//zapros body
    let num1=Number(request.body.num1);
    let num2=Number(request.body.num2/100);
    let result=(num1/(num2*num2)).toFixed(1);//konvert posle zapatoj
    
    let x= `Kehamassiindeks arvutamise valem: `;
        console.log(`${num1}/${num2}*${num2}=${result}`);//pokazivaet v konsole
    

    if(result<19){      
        response.send(`${x}${num1}/${num2}*${num2}=${result} - Alakaal`);//pokazivaet v brauzere
        console.log('Alakaal');  
    }else if(result>=19 && result<=24.9){
        response.send(`${x}${num1}/${num2}*${num2}=${result} - Normaalkaal`);//pokazivaet v brauzere
        console.log('Normaalkaal');
    }else if(result>=25 && result<=29.9){
        response.send(`${x}${num1}/${num2}*${num2}=${result} - Ülekaal`);//pokazivaet v brauzere
        console.log('Ülekaal');
    }else{
        response.send(`${x}${num1}/${num2}*${num2}=${result} - Rasvumine`);//pokazivaet v brauzere
        console.log('Rasvumine');
    }
});


app.listen(4000, function(){//nomer porta 4000, error funkzija
    console.log('Server is running on Port 4000');//call back funktsija
    
});