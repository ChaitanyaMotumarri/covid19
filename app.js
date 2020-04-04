$('#btn').click(function(){
   $.ajax({
       type: "GET",
       url: "https://api.covid19india.org/data.json",
       dataType: "json",
       success:function(data){
           let cases=data.statewise;
           for(let i=1;i<cases.length;i++){
               var covidCase=(cases[i]);
               displayCases(covidCase);
           }
       }
           
   });
});

let displayCases=function(covid){
    let newCase={
        State:`${covid.state}`,
        Confirmed:`${covid.confirmed}`,
        Active:`${covid.active}`,
        Deaths:`${covid.deaths}`,
        Recovered:`${covid.recovered}`
    };
    let caseCard=`  <div class="col-md-4">
                      <div class="card mt-3">
                         <div class="card-header bg-secondary text-white text-center">
                            <h3>${newCase.State}</h3>
                         </div>
                         <div class="card-body">
                            <ul class="list-group mt-3 font-weight-bold">
                               <li class="list-group-item">
                                  Confirmed : <span class="text-danger">${newCase.Confirmed}</span>
                               </li>
                               <li class="list-group-item">
                                  Active : <span class="text-primary">${newCase.Active}</span>
                               </li>
                               <li class="list-group-item">
                                  Recovered : <span class="text-success">${newCase.Recovered}</span>
                               </li>
                               <li class="list-group-item">
                                  Deaths : <span class="text-danger">${newCase.Deaths}</span>
                               </li>
                            </ul>
                         </div>
                      </div>
                  </div>`

    $('#row').append(caseCard);
}