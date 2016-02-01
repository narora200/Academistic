$(function(){
	/************************ Code for subject search live************************/
$(".subjectsearch").keyup(function() 
{ 
var subjectsearch = $(this).val();
var dataString = 'subjectsearch='+ subjectsearch;
if(subjectsearch!='')
{
    $.ajax({
    type: "POST",
    url: "search.php",
    data: dataString,
    cache: false,
    success: function(html)
    {
    $("#subjectresult").html(html).show();
    }
    });
}
else{ $("#subjectresult").html(html).hide(); }
return false;    
});

$("#subjectresult").on("click",function(e){ 
    var $clicked = $(e.target);
    var $name = $clicked.find('.name').html();
    var decoded = $("<div/>").html($name).text();
    $('#subjectsearch').val(decoded);
	var subject_id = $clicked.find('.name').attr('rel');
	$('#subjectsearchhidden').val(subject_id);
});
$(document).on("click", function(e) { var $clicked = $(e.target);   if (! $clicked.hasClass("subjectsearch")){  $("#subjectresult").fadeOut(); 
    }
});
$('#subjectsearch').click(function(){
    $("#subjectresult").fadeIn();
});
/* ************************************************************ */
$(".subjectsearcht").keyup(function() 
{ 
var subjectsearcht = $(this).val();
var dataString = 'subjectsearch='+ subjectsearcht;
if(subjectsearcht!='')
{
    $.ajax({
    type: "POST",
    url: "search.php",
    data: dataString,
    cache: false,
    success: function(html)
    {
    $("#subjectresultt").html(html).show();
    }
    });
}
else{ $("#subjectresultt").html(html).hide(); }
return false;    
});

$("#subjectresultt").on("click",function(e){ 
    var $clicked = $(e.target);
    var $name = $clicked.find('.name').html();
    var decoded = $("<div/>").html($name).text();
    $('#subjectsearcht').val(decoded);
	var subject_id = $clicked.find('.name').attr('rel');
	$('#subjectsearchhiddent').val(subject_id);
});
$(document).on("click", function(e) { var $clicked = $(e.target);   if (! $clicked.hasClass("subjectsearcht")){  $("#subjectresultt").fadeOut(); 
    }
});
$('#subjectsearcht').click(function(){
    $("#subjectresultt").fadeIn();
});
/***********Code for location search live ************************/
	/************************ Code for stage search live************************/
$(".stagesearch").keyup(function() 
{ 
var stagesearch = $(this).val();
var dataString = 'stagesearch='+ stagesearch;
if(stagesearch!='')
{
    $.ajax({
    type: "POST",
    url: "search.php",
    data: dataString,
    cache: false,
    success: function(html)
    {
    $("#stageresult").html(html).show();
    }
    });
}return false;    
});

$("#stageresult").on("click",function(e){ 
    var $clicked = $(e.target);
    var $name = $clicked.find('.name').html();
    var decoded = $("<div/>").html($name).text();
    $('#stagesearch').val(decoded);
	var stage_id = $clicked.find('.name').attr('rel');
	$('#stagesearchhidden').val(stage_id);
});
$(document).on("click", function(e) { var $clicked = $(e.target);   if (! $clicked.hasClass("stagesearch")){  $("#stageresult").fadeOut(); 
    }
});
$('#stagesearch').click(function(){
    $("#stageresult").fadeIn();
});
/************************ Code for level search live************************/
$(".levelsearch").keyup(function() 
{ 
var levelsearch = $(this).val();
var dataString = 'levelsearch='+ levelsearch;
if(levelsearch!='')
{
    $.ajax({
    type: "POST",
    url: "search.php",
    data: dataString,
    cache: false,
    success: function(html)
    {
    $("#levelresult").html(html).show();
    }
    });
}
else{ $("#levelresult").html(html).hide(); }
return false;    
});

$("#levelresult").on("click",function(e){ 
    var $clicked = $(e.target);
    var $name = $clicked.find('.name').html();
    var decoded = $("<div/>").html($name).text();
    $('#levelsearch').val(decoded);
	var level_id = $clicked.find('.name').attr('rel');
	$('#levelsearchhidden').val(level_id);
	/* alert(level_id); */
});
$(document).on("click", function(e) { var $clicked = $(e.target);   if (! $clicked.hasClass("levelsearch")){  $("#levelresult").fadeOut(); 
    }
});
$('#levelsearch').click(function(){
    $("#levelresult").fadeIn();
});
/* **************************************************************** */
$(".levelsearcht").keyup(function() 
{ 
var levelsearcht = $(this).val();
var dataString = 'levelsearch='+ levelsearcht;
if(levelsearcht!='')
{
    $.ajax({
    type: "POST",
    url: "search.php",
    data: dataString,
    cache: false,
    success: function(html)
    {
    $("#levelresultt").html(html).show();
    }
    });
}
else{ $("#levelresultt").html(html).hide(); }
return false;    
});

$("#levelresultt").on("click",function(e){ 
    var $clicked = $(e.target);
    var $name = $clicked.find('.name').html();
    var decoded = $("<div/>").html($name).text();
    $('#levelsearcht').val(decoded);
	var level_id = $clicked.find('.name').attr('rel');
	$('#levelsearchhiddent').val(level_id);
	/* alert(level_id); */
});
$(document).on("click", function(e) { var $clicked = $(e.target);   if (! $clicked.hasClass("levelsearcht")){  $("#levelresultt").fadeOut(); 
    }
});
$('#levelsearcht').click(function(){
    $("#levelresultt").fadeIn();
});
/***********Code for location search live ************************/
$(".locationsearch").bind('click keyup', function() {
/* $(".locationsearch").keyup(function() 
{  */
var locationsearch = $(this).val();
var dataString = 'locationsearch='+ locationsearch;
if(locationsearch!='')
{
    $.ajax({
    type: "POST",
    url: "search.php",
    data: dataString,
    cache: false,
    success: function(html)
    {
		if(html=="") { $("#locationresult").hide(); }else{
					   $("#locationresult").html(html).show();}
    }
    });
}
else{ $("#locationresult").hide(); }
return false;    
});
$("#locationresult").on("click",function(e){ 
    var $clicked = $(e.target);
    var $name = $clicked.find('.name').html();
    var decoded = $("<div/>").html($name).text();
    $('#locationsearch').val(decoded);
});
$(document).on("click", function(e) { var $clicked = $(e.target);   if (! $clicked.hasClass("locationsearch")){  $("#locationresult").fadeOut(); 
    }
});
$('#locationsearch').click(function(){
    $("#locationresult").fadeIn();
});
/* ********************************************************************* */
$(".locationsearcht").bind('click keyup', function() {
/* $(".locationsearch").keyup(function() 
{  */
var locationsearcht = $(this).val();
var dataString = 'locationsearch='+ locationsearcht;
    
if(locationsearcht!='')
{
//    $.ajax({
//    type: "POST",
//    url: "search.php",
//    data: dataString,
//    cache: false,
//    success: function(html)
//    {
//		if(html=="") { $("#locationresultt").hide(); }else{
//					   $("#locationresultt").html(html).show();}
//    }
//    });
    
    $(".js-data-example-ajax").select2({
        ajax: {
            type: "POST",
            url: "search.php",
//            dataType: 'json',
            delay: 250,
            data: dataString,
            processResults: function (data, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
//                params.page = params.page || 1;
                console.log("kjjjh");
                return {
                    results: data
                };
            },
            cache: true
        },
        escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
        minimumInputLength: 1
    });
}
else{ $("#locationresultt").hide(); }
return false;    
});
$("#locationresultt").on("click",function(e){ 
    var $clicked = $(e.target);
    var $name = $clicked.find('.name').html();
    var decoded = $("<div/>").html($name).text();
    $('#locationsearcht').val(decoded);
});
$(document).on("click", function(e) { var $clicked = $(e.target);   if (! $clicked.hasClass("locationsearcht")){  $("#locationresultt").fadeOut(); 
    }
});
$('#locationsearcht').click(function(){
    $("#locationresultt").fadeIn();
});
/***********Code for institute search live ************************/
$(".institutesearch").bind('click keyup', function() {
/* $(".institutesearch").keyup(function() 
{  */
var institutesearch = $(this).val();
//alert(institutesearch);
var dataString = 'institutesearch='+ institutesearch;
if(institutesearch!='')
{
    $.ajax({
    type: "POST",
    url: "search.php",
    data: dataString,
    cache: false,
    success: function(html)
    {
    $("#instituteresult").html(html).show();
    }
    });
}return false;     
});
$("#instituteresult").on("click",function(e){ 
    var $clicked = $(e.target);
    var $name = $clicked.find('.name').html();
    var decoded = $("<div/>").html($name).text();
    $('#institutesearch').val(decoded);
	var institute_id = $clicked.find('.name').attr('rel');
	$('#institutesearchhidden').val(institute_id);
});
$(document).on("click", function(e) { var $clicked = $(e.target);   if (! $clicked.hasClass("institutesearch")){  $("#instituteresult").fadeOut(); 
    }
});
$('#institutesearch').click(function(){
    $("#instituteresult").fadeIn();
});
$('#search_result').click(function(){	

var locationsearch = $("#locationsearch").val();
var subjectsearch = $("#subjectsearchhidden").val();
var levelsearch = $("#levelsearchhidden").val();
/* var stagesearch = $("#stagesearchhidden").val(); */
/* alert(locationsearch+levelsearch+subjectsearch); */
/* //var redircet_url ="http://asianacademy.in/acad/institute_search_list.php?locationsearch="+locationsearch+"&subjectsearch="+subjectsearch+"&stagesearch="+stagesearch+"&levelsearch="+levelsearch; */
var redircet_url ="http://www.academistic.com/search_landing.php?locationsearch="+locationsearch+"&subjectsearch="+subjectsearch+"&levelsearch="+levelsearch;
  window.location = redircet_url;    
            }); 
/* ************************************************** */
$('#search_resultt').click(function(){	

var locationsearch = $("#locationsearcht").val();
var subjectsearch = $("#subjectsearchhiddent").val();
var levelsearch = $("#levelsearchhiddent").val();
    var redircet_url ="http://www.academistic.com/search_landingt.php?locationsearch="+locationsearch+"&subjectsearch="+subjectsearch+"&levelsearch="+levelsearch;
  window.location = redircet_url;    
            });
			
			
$('#search_result1').click(function(){	
var institutesearch = $("#institutesearchhidden").val();
/* var redircet_url ="http://asianacademy.in/acad/institute_search_list.php?locationsearch="+locationsearch+"&subjectsearch="+subjectsearch+"&stagesearch="+stagesearch+"&levelsearch="+levelsearch; */
    var redircet_url1 ="http://www.academistic.com/search_landing.php?institutesearch="+institutesearch;;
/* alert(redircet_url1) */;
window.location = redircet_url1;    
            }); 
});

$(document).ready(function(){

}); 