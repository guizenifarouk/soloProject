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
var simba = createpet('simba ', '2 years','dog','el ghazella','https://scx1.b-cdn.net/csz/news/800/2018/2-dog.jpg')
var black = createpet('black ', '2 months','dog','Ben arous', 'https://www.redwallpapers.com/public/redwallpapers-large-thumb/black-belgian-shepherd-puppy-free-stock-photo-image-wallpaper.jpeg')
var tom = createpet('tom ', '1 year' , 'cat','tunis', 'https://us.123rf.com/450wm/seregraff/seregraff1703/seregraff170300227/74749779-portrait-of-pure-white-cat-with-odd-eyes-on-isolated-black-background-front-view.jpg?ver=6')
var jerry = createpet('jerry ', '5 months', 'hamster','ariana', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxTuZsbjBUwln4GIrbuPjc_Z9nHSaciQOftkURLQOX0UtZbcd&s')
var tweety = createpet('tweety ', '10 months', 'parrot','nahli' , 'https://upload.wikimedia.org/wikipedia/commons/1/16/Congo_African_Grey_pet_on_a_perch.JPG')
var simbaaa = createpet('simba ', '2 years','dog','el ghazella','https://www.starfrit.com/media/contentmanager/content/cache/1070x1070//recipes/e1_r1_spaghetti.jpg')
var jmal = createpet('blue camel', '4 months', 'camel', 'touzeur', 'https://wset.com/resources/media/dc10d23e-0f79-4f09-99a9-8f86ddd76352-large16x9_babycamel.jpg?1550521307333')
var hsan = createpet('hsan','5 months', 'horse', 'jerba', 'https://cdn0.wideopenpets.com/wp-content/uploads/2015/12/pony-981528_1920-770x405.jpg')
var houta =createpet('houta','1 year', 'fish','ariana', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTK7islk3q-6cu9gZTEeUf-TXYrHvq-aqX2YKRaYyKTzhzZQbppw&s')
var siamois =createpet('siamois','1 year', 'cat','tunis', 'https://www.woopets.fr/assets/races/000/380/mobile/siamois.jpg')
var cut= createpet('cutter','2 yers', 'cat', 'menzah 5', 'https://jardinage.lemonde.fr/images/dossiers/2018-09/poils-chat-141511.jpg')
var caniche=createpet('caniche', '4 years', 'dog', 'manar', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXMS5cFO7y86ls9cnKB00pqJ0L4dmvNk9EzMhQ4TbOWCswzEqtQ&s')
var monkeyy =createpet('monkeyy','9 months','monkey','yassminet', 'http://animalsbirds.com/wp-content/uploads/2017/08/funny-monkey-pictures-high-defination-768x576.jpg')
var catoo= createpet('catoo','2 yers', 'cat', 'menzah 5', 'https://cdn3-www.cattime.com/assets/uploads/gallery/30-beautiful-cats/cat-1.jpg')
var dogo=createpet('dogo', '4 years', 'dog', 'manar', 'https://confessionsofapitbulladdict.files.wordpress.com/2011/07/dscn6982-1.jpg')
var caty =createpet('caty','9 months','cat','yassminet', 'https://cdn3-www.cattime.com/assets/uploads/gallery/funny-cats/surprised-kitty.jpg')

var pets = [simba, black, tom, jerry, tweety, jmal, hsan, houta, siamois, cut, caniche, monkeyy, catoo,dogo,caty];




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
/////////////   displaying data
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


display(pets)
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
	//////////// ALERTING THE SENDING REQUEST
	$('#yourInfo').click(function(){ 
	var info1 = $('#info1').val();
	console.log(info1)
	var info2 = $('#info2').val();
	var info3 = $('#info3').val();
	var info4 = $('#info4').val();

	alert('hi Mr ' + info1 + '\n' + 'Now we have your information ' + '\n' + info2 + '\n' + info3 + '\n' + info4 +'We will contact soon');

})
///// trying to add a new pet to adopt
function add(pet){   				
   var imgdiv = $('<div class="imagediv test"></div>')
	var img = $('<img id=imageid>')
	img.attr('src', pet.img)
        imgdiv.append(img)
   $('#main').append(imgdiv)

}
/////////////////

$('#b10').on('click', function() {
	x = createpet($('#a1').val(),$('#a2').val(),$('#a3').val(),$('#a4').val(),$('#a5').val());
	add(x)
})





