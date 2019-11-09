/////// the factory function //////////
var x;
function createpet(name, age, breed,location,img){				
	var pet = {} ;												
	pet.name = name ;
	pet.age = age ;
	pet.breed = breed;
	pet.location = location ;
	pet.img = img ;

	return pet ;
}
///////// creating animals object //////////////
var simba = createpet('simba ', '2 years','dog','el ghazella','https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
var black = createpet('black ', '2 months','dog','Ben arous', 'https://www.redwallpapers.com/public/redwallpapers-large-thumb/black-belgian-shepherd-puppy-free-stock-photo-image-wallpaper.jpeg')
var tom = createpet('tom ', '1 year' , 'cat','tunis', 'https://us.123rf.com/450wm/seregraff/seregraff1703/seregraff170300227/74749779-portrait-of-pure-white-cat-with-odd-eyes-on-isolated-black-background-front-view.jpg?ver=6')
var jerry = createpet('jerry ', '5 months', 'hamster','ariana', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxTuZsbjBUwln4GIrbuPjc_Z9nHSaciQOftkURLQOX0UtZbcd&s')
var tweety = createpet('tweety ', '10 months', 'parrot','nahli' , 'https://upload.wikimedia.org/wikipedia/commons/1/16/Congo_African_Grey_pet_on_a_perch.JPG')
var simbaaa = createpet('simba ', '2 years','dog','el ghazella','https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
var jmal = createpet('jmal', '4 months', 'camel', 'touzeur', 'https://wset.com/resources/media/dc10d23e-0f79-4f09-99a9-8f86ddd76352-large16x9_babycamel.jpg?1550521307333')
var hsan = createpet('hsan','5 months', 'horse', 'jerba', 'https://cdn0.wideopenpets.com/wp-content/uploads/2015/12/pony-981528_1920-770x405.jpg')
var houta =createpet('houta','1 year', 'fish','ariana', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTK7islk3q-6cu9gZTEeUf-TXYrHvq-aqX2YKRaYyKTzhzZQbppw&s')
var siamois =createpet('siamois','1 year', 'cat','tunis', 'https://www.woopets.fr/assets/races/000/380/mobile/siamois.jpg')
var gatous= createpet('gatous','2 yers', 'cat', 'menzah 5', 'https://jardinage.lemonde.fr/images/dossiers/2018-09/poils-chat-141511.jpg')
var caniche=createpet('caniche', '4 years', 'dog', 'manar', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXMS5cFO7y86ls9cnKB00pqJ0L4dmvNk9EzMhQ4TbOWCswzEqtQ&s')
var guerd =createpet('guerd','9 months','monkey','yassminet', 'https://images.theconversation.com/files/289079/original/file-20190822-170956-4coidw.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C4416%2C3305&q=45&auto=format&w=496&fit=clip')
var gatous1= createpet('gatous','2 yers', 'cat', 'menzah 5', 'https://jardinage.lemonde.fr/images/dossiers/2018-09/poils-chat-141511.jpg')
var caniche1=createpet('caniche', '4 years', 'dog', 'manar', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXMS5cFO7y86ls9cnKB00pqJ0L4dmvNk9EzMhQ4TbOWCswzEqtQ&s')
var guerd1 =createpet('guerd','9 months','monkey','yassminet', 'https://images.theconversation.com/files/289079/original/file-20190822-170956-4coidw.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C4416%2C3305&q=45&auto=format&w=496&fit=clip')

var pets = [simba, black, tom, jerry, tweety, jmal, hsan, houta, siamois, gatous, caniche, guerd, gatous1,caniche1,guerd1];




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
   var imgdiv = $('<div class ="imagediv"></div>')
	var img = $('<img id=imageid>')
	img.attr('src', arr[i].img)
        imgdiv.append(img)
   $('#main').append(imgdiv)

}
}



///////// menu ////////
	$('#taswira').click(function(){
		$('#id1').toggle(1000);
	})
		$('#taswira1').click(function(){
		$('#details').toggle(1000);
	})

		$( document ).ready(function() {
    		$('#details').hide()
		$('#info').hide();
	});
/////// click on image to get information about it 



	$('#main').on('click','#imageid',function(){
		$('#e').html('');
		$('#info').hide();
		for(var i = 0 ; i < pets.length ; i++) {
			if($(this).attr('src') == pets[i].img) {
				$('#e').append('<p>name : ' + pets[i].name + '</p><p>age: ' + pets[i].age+ '</p><p>breed: ' + pets[i].breed+ '</p><p>location: ' +  pets[i].location + '</p>')
				$('#info').clone().appendTo($('#e'));
				$('#info').show();
			}
		}	

})

function add(pet){   				
   var imgdiv = $('<div class="imagediv test"></div>')
	var img = $('<img id=imageid>')
	img.attr('src', pet.img)
        imgdiv.append(img)
   $('#main').append(imgdiv)

}
/////////////////

$('#b10').on('click', function() {
	x =createpet($('#a1').val(),$('#a2').val(),$('#a3').val(),$('#a4').val(),$('#a5').val());
	add(x)
})


/*				console.log('<p>name : ' + x.name + '</p><p>age: ' + x.age+ '</p><p>breed: ' + x.breed+ '</p><p>location: ' +  x.location + '</p>')
				$('#e').html('')
				$('#e').append('<p>name : ' + x.name + '</p><p>age: ' + x.age+ '</p><p>breed: ' + x.breed+ '</p><p>location: ' +  x.location + '</p>')
				$('#info').clone().appendTo($('#e'));
				$('#info').show();*/
////////////////// b5 

$('#yourInfo').click(function(){
	// alert('hi')
	console.log("test")
	var info1 = $('#info1').val()
	var info2 = $('#info2').val()
	var info3 = $('#info3').val()
	var info4 = $('#info4').val()
	alert('hi mister' + info1 + '\n' + 'Now we have your information ' + '\n' + info2 + '\n' + info3 + '\n' + info4 + 'We will contact soon')


})
display(pets)
$('#test').click(function(){
	console.log("test")
})
