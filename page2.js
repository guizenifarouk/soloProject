/////// the factory function //////////

function createpet(name, age, breed,	availability,location,img){				
	var pet = {} ;												
	pet.name = name ;
	pet.age = age ;
	pet.breed = breed;
	pet.availability = availability;
	pet.location = location ;
	pet.img = img ;

	return pet ;
}
///////// creating animals object //////////////
var simba = createpet('simba ', '2 years','dog' ,true,'el ghazella','https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
var black = createpet('black ', '2 months','dog',true,'Ben arous', 'https://www.redwallpapers.com/public/redwallpapers-large-thumb/black-belgian-shepherd-puppy-free-stock-photo-image-wallpaper.jpeg')
var tom = createpet('tom ', '1 year' , 'cat', true ,'tunis', 'https://us.123rf.com/450wm/seregraff/seregraff1703/seregraff170300227/74749779-portrait-of-pure-white-cat-with-odd-eyes-on-isolated-black-background-front-view.jpg?ver=6')
var jerry = createpet('jerry ', '5 months', 'hamster', false,'ariana', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxTuZsbjBUwln4GIrbuPjc_Z9nHSaciQOftkURLQOX0UtZbcd&s')
var tweety = createpet('tweety ', '10 months', 'parrot', false,'nahli' , 'https://upload.wikimedia.org/wikipedia/commons/1/16/Congo_African_Grey_pet_on_a_perch.JPG')
var simbaaa = createpet('simba ', '2 years','dog' ,true,'el ghazella','https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
var jmal = createpet('jmal', '4 months', 'camel', true, 'touzeur', 'https://wset.com/resources/media/dc10d23e-0f79-4f09-99a9-8f86ddd76352-large16x9_babycamel.jpg?1550521307333')
var hsan = createpet('hsan','5 months', 'horse', true, 'jerba', 'https://cdn0.wideopenpets.com/wp-content/uploads/2015/12/pony-981528_1920-770x405.jpg')
var houta =createpet('houta','1 year', 'fish', true,'ariana', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTK7islk3q-6cu9gZTEeUf-TXYrHvq-aqX2YKRaYyKTzhzZQbppw&s')
var siamois =createpet('siamois','1 year', 'cat', true,'tunis', 'https://www.woopets.fr/assets/races/000/380/mobile/siamois.jpg')
var gatous= createpet('gatous','2 yers', 'cat', true, 'menzah 5', 'https://jardinage.lemonde.fr/images/dossiers/2018-09/poils-chat-141511.jpg')
var caniche=createpet('caniche', '4 years', 'dog', true, 'manar', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXMS5cFO7y86ls9cnKB00pqJ0L4dmvNk9EzMhQ4TbOWCswzEqtQ&s')
var guerd =createpet('guerd','9 months','monkey', true,'yassminet', 'https://images.theconversation.com/files/289079/original/file-20190822-170956-4coidw.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C4416%2C3305&q=45&auto=format&w=496&fit=clip')


var pets = [simba, black, tom, jerry, tweety, jmal, hsan, houta, siamois, gatous, caniche, guerd];




////// to add a new animal to search //////////

$('#search').on('click', function(){
	var optionList = $('<option></option>')
	optionList.text($('input').val())
	optionList.appendTo('#slt')
})

//////// for the search ////////
var result = [];


function search(arr, str){																
	result = arr.filter(function(element){		
	return  element.breed == str;
	})
	return result;
}

///////  showing the searched animals /////////////////

var resultOfSearch ;

$('#b2').on('click', function(){																	
																												
var selectedStr = $( "#slt option:selected" ).text();		
	resultOfSearch = undefined;
   resultOfSearch = search(pets, selectedStr)	
   
   display(resultOfSearch)				
 
																																		
 })
/////////////   '<img  id= imageId>'+
function display(arr){

	$('#main').html('')	   
   for(var i =0; i < arr.length;i++){					
	// var imgDiv = $('<div id="imagediv'+ i + '</div>') 
	// console.log(imgDiv)
	// var imgTag = imgDiv.append('<img  id= imageId>')   
	// 	console.log(imgTag)
 //    $('#imageId').attr('src', arr[i].img)
 //   $('#main').append(imgDiv)
   var imgdiv = $('<div class ="imagediv"></div>')
	var img = $('<img id=imageid>')
	img.attr('src', arr[i].img)
        imgdiv.append(img)
   $('#main').append(imgdiv)

}
}

display(pets)

///////// menu ////////
$(document).ready(function(){
	$('#taswira').click(function(){
		$('#id1').toggle(1000);
	})
})

/////// click on image to get information about it 

$(document).ready(function(){
	$('#main').on('click','#imageid',function(){
		for(var i = 0 ; i < pets.length ; i++) {
			if($(this).attr('src') == pets[i].img) {
				$('#e').append('name : ' + pets[i].name + '<br>', 'age: ' + pets[i].age+ '<br>','breed: ' + pets[i].breed+ '<br>','location: ' +  pets[i].location + '<br>')
											}
											}
													})
							})
////////////////// b5 
// $(document).ready(function(){
// 	$('#b5').click(function(){
// 		for(var i = 0 ; i < pets.length ; i++) {
// 			if($(this).attr('src') == pets[i].img) {
// 				alert(pets[i].availability)

// 		}
// 	}
		
// })
// $(document).ready(function(){
//
$('#yourInfo').on('click', function(){
	// alert('hi')
	var info1 = $('#info1').val()
	var info2 = $('#info2').val()
	var info3 = $('#info3').val()
	var info4 = $('#info4').val()
	alert('hi mister' + info1 + '\n' + 'Now we have your information ' + '\n' + info2 + '\n' + info3 + '\n' + info4 + 'We will contact soon')


})