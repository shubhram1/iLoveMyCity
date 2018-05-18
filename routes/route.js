exports.home=function(request,response){
    response.render('home',{
                             headline:"We belive that every city has something to say"   
                           });
}


exports.city=function(req,res){
    var cityName=req.params.city;
    var title,headings;
    var imageCount=4;

    if(cityName==='berlin'){
        title="Berlin";
        heading="Berlin:Where love is in the air";

    }else if(cityName==='paris'){
        title="Paris";
        heading="Paris:Good talkers are only found in Paris";

    }else if(cityName==='madrid'){
        title="Madrid";
        heading="Madrid:Buzz,Beautiful architecture and Football";

    }else if(cityName==='london'){
        title="London";
        heading="London:Sparkling, Still,Food ,Gorgeuos ";

    }else if(cityName==='newyork'){
        title="New York";
        heading="New York:Come to New York to become someone new";
        imageCount=6;
    }

    res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        numberOfImages:imageCount
    });
}