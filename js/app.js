//declaration of variables.

var title_c1 =  "EGYPT TANGBIA";
var title_c2 =  "OLLING PHISOTIP";
var title_c3 =  "CORTIA DYNA";
var title_c4 = "SYSNE OF DUBAI";

var com1 = "22comments";
var com2 = "13comments";
var com3 = "8comments" ;
var com4 = "7comments" ;

//Data for each card.
var items =[
{
    id:1 ,
    img:"./images/1.jpg" ,
    title: title_c1,
    comments: com1,  
},

{
    id:2 ,
    img: "./images/2.jpg",
    title: title_c2 ,
    comments: com2,
},

{
    id:3 ,
    img:"./images/3.jpg" ,
    title: title_c3,
    comments: com3,
},

{
    id: 4,
    img: "./images/4.jpg",
    title: title_c4,
    comments: com4
},

{
    id: 5,
    img:"./images/5.jpg" ,
    title: title_c1 ,
    comments: com1
},

{
    id:6 ,
    img: "./images/6.jpg",
    title: title_c2,
    comments: com2
},

{
    id:7 ,
    img:"./images/7.jpg" ,
    title: title_c3,
    comments: com3,
},

{
    id: 8,
    img:"./images/8.jpg" ,
    title: title_c4,
    comments: com4,
},

{
    id: 9,
    img: "./images/9.jpg",
    title: title_c1,
    comments: com1,
},

{
    id: 10,
    img: "./images/10.jpg",
    title: title_c2,
    comments: com2,
},

{
    id: 11,
    img:"./images/11.jpg" ,
    title: title_c3,
    comments: com3,
},

{
    id: 12,
    img: "./images/12.jpg",
    title: title_c4,
    comments: com4,
},


]


//web-page loaded
$(document).ready(function(){
  
    //create cards dynamically
    initialize_cards();

    //event listener for each card
    $(".card").bind('click',function(e){
    
        
        var card = e.target.closest(".card");

        //get img path from the data-attribute (data-img)
        var img = $(card).attr("data-img");

        //get the place's name from the data-attribute (data-title)
        var title = $(card).attr("data-title");

        //display the image inside the modal
        $("#img-modal").attr("src",img);
        
        //display the place's name inisde the modal
        $("#title").text(title)

        //show the modal on the web page
        $('#myModal').modal('show');
     
      
    })


  });


  function initialize_cards(){

    //loop on cards using the array of objects.
    for(var i=0; i<items.length;i++){

        //create the html elements required for each card
        create_card();

        //set a data-attribute assigned with a value which is the path of each image 
        $(".card").eq(i).attr("data-img",items[i].img);

        //set a data-attribute assigned with a value which is the name of each place.
        $(".card").eq(i).attr("data-title",items[i].title);

        //insert image in each card
        $(".card-img-top").eq(i).attr("src",items[i].img);

        //insert place's name in each card
        $(".card-title").eq(i).text(items[i].title);

        //insert number of comments in each card.
        $(".comm").eq(i).text(items[i].comments);

    }

  }


  function create_card(){


    var temp = ` <div class="col-md-3">

    
    <div class="card">
        <img class="card-img-top" src="" alt="Card image">
        <div class="card-body">
            <h5 class="card-title text-center"></h5>
            <p class="card-text text-center">Denatibus et magnis dis parturient montes, nascetur ridiculus
                mus</p>

            <div class="footer d-flex justify-content-between">

                <div class="date d-flex align-items-center">
                    <i class="fa-regular fa-calendar" style="color: #727479;"></i>
                    <span>Aug 5, 2013</span>
                </div>

                <div class="comments d-flex align-items-center">
                    <i class="fa-regular fa-comments" style="color: #949494;"></i>
                    <span class="comm"></span>

                </div>

            </div>
        </div>
    </div>

  
</div>`


  $("#row1").append(temp);
  
  }