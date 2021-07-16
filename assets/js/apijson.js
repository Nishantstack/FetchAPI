$.getJSON(
    "https://reqres.in/api/users?delay=3",
    function(data){
        console.log(data);
        
        var ava01 = data.data[0].avatar ;
        $(".avatar01").attr("src", ava01);
        
        var ava02 = data.data[1].avatar ;
        $(".avatar02").attr("src", ava02);
        
        var ava03 = data.data[2].avatar ;
        $(".avatar03").attr("src", ava03);
        
        var ava04 = data.data[3].avatar ;
        $(".avatar04").attr("src", ava04);
        
        var ava05 = data.data[4].avatar ;
        $(".avatar05").attr("src", ava05);
        
        
        var ava06 = data.data[5].avatar ;
        $(".avatar06").attr("src", ava06);
        
        
        var namef01 = data.data[0].first_name;
        $('.namef01').append(namef01);
        var sp =" ";
        $('.sp').append(sp);
        var namel01 = data.data[0].last_name;
        $('.namel01').append(namel01);
        
        
        var namef02 = data.data[1].first_name;
        $('.namef02').append(namef02);
        var sp =" ";
        $('.sp').append(sp);
        var namel02 = data.data[1].last_name;
        $('.namel02').append(namel02);
        
        
        var namef03 = data.data[2].first_name;
        $('.namef03').append(namef03);
        var sp =" ";
        $('.sp').append(sp);
        var namel03 = data.data[2].last_name;
        $('.namel03').append(namel03);
        
        
        var namef04 = data.data[3].first_name;
        $('.namef04').append(namef04);
        var sp =" ";
        $('.sp').append(sp);
        var namel04 = data.data[3].last_name;
        $('.namel04').append(namel04);
        
        
        var namef05 = data.data[4].first_name;
        $('.namef05').append(namef05);
        var sp =" ";
        $('.sp').append(sp);
        var namel05 = data.data[4].last_name;
        $('.namel05').append(namel05);
        
        
        var namef06 = data.data[5].first_name;
        $('.namef06').append(namef06);
        var sp =" ";
        $('.sp').append(sp);
        var namel06 = data.data[5].last_name;
        $('.namel06').append(namel06);
        
        
        
        var email = data.data[0].email;
        $('.email01').append(email);
        var id = data.data[0].id;
        $('.id01').append(id);
        
        var email = data.data[1].email;
        $('.email02').append(email);
        var id = data.data[1].id;
        $('.id02').append(id);
        
        var email = data.data[2].email;
        $('.email03').append(email);
        var id = data.data[2].id;
        $('.id03').append(id);
        
        var email = data.data[3].email;
        $('.email04').append(email);
        var id = data.data[3].id;
        $('.id04').append(id);
        
        var email = data.data[4].email;
        $('.email05').append(email);
        var id = data.data[4].id;
        $('.id05').append(id);
        
        var email = data.data[5].email;
        $('.email06').append(email);
        var id = data.data[5].id;
        $('.id06').append(id);
    }

)