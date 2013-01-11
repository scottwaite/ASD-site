// Scott Waite
// Advanced Scalable Data Infrastructures 1301
// Project 1


$("#page1").on('pageinit', function(){

        // Code needed for the homepage goes in this function

});


$('addItem').on('pageinit' function(){

			var myForm = $('formId');
				myForm.validate({
				invalidHandler: function(form,validator) {
				},
				submitHandler: function() {
			var data = myForm.serializeArray();
				storeData(data);
			}
		});
			
		//any other code needed for addItem page goes here

});

//The functions below can go inside or outside the pageinit fuction for the page


var autofillData = function (){

};


var getData = function (){

};


var storeData = function (){

};


var deleteItem = function (){

};


var clearLocal = function (){

};

///////////


})



$('#page2').on('pageinit', function () {


    // Form code goes here

    var myForm = $('#registerNow');
    myForm.validate({
        invalidHandler: function (form, validator) {},
        submitHandler: function () {
            var data = myForm.serializeArray();
            storeData(data);
        }

        function editItem() {
            //Grab the data from our item from Local Storage.
            var value = localStorage.getItem(this.key);
            var item = JSON.parse(value);


            //populate the form fields with current localStorage values.
            $('#groups').val = item.group[1];
            $('#studentid').val = item.studentid[1];
            $('#firstname').val = item.firstname[1];
            $('#lastname').val = item.lastname[1];
            $('#parentemail').val = item.parentemail[1];
            $('#addAssistance').val = item.addAssistance[1];
            $('#peanutButter').val = item.peanutButter[1];
            var radios = document.forms[0].sex;
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].value == "Male" && item.sex[1] == "Male") {
                    radios[i].attr("checked", "checked");
                } else if (radios[i].value == "Female" && item.sex[1] == "Female") {
                    radios[i].attr("checked", "checked");
                }

            }
            if (item.peanutButter[1] == "Yes") {
                $('peanutButter').attr("checked", "checked");
            }
            $('#peanutButter').val = item.peanutButter[1];

            //Remove the initial listener from the input 'save contact' button.
            save.removeEventListener("click", storeData);
            //Change Submit Button Value to Edit Button
            $('submit').value = "Edit Contact";
            var editSubmit = $('submit');
            //Save the key value established in this function as a property of the editSubmit event
            //so we can use that value when we save the data we edited.
            editSubmit.on("click", validate);
            editSubmit.key = this.key;
        }

    };

    function storeData() {
        var id = Math.floor(Math.random() * 100000001);
        //Gather up all our form field values and store in an object.
        //Object properties contain array with the form label and input values.
        //		getSelectedRadio();
        //		getCheckboxValue();
        var item = {};
        item.group = ["Hair Color:", $('groups').value];
        item.studentid = ["Student ID:", $('studentid').value];
        item.firstname = ["First Name:", $('firstname').value];
        item.lastname = ["Last Name:", $('lastname').value];
        item.parentemail = ["Parent Email:", $('parentemail').value];
        item.addAssistance = ["Additional Assistance Required (Min Per Week):", $('addAssistance').value];
        item.peanutButter = ["Allergies:", $('peanutButter').value];
        item.sex = ["Gender:", sexValue];
        //Save data into Local Storage: Use Stringify to convert our object to a string.
        localStorage.setItem(id, JSON.stringify(item));
        alert("Registration Submitted!");
    };

    var deleteItem = function () {
        var ask = confirm("Are you sure you want to delete this registration?");
        if (ask) {
            localStorage.removeItem(this.key);
            alert("Registration has been deleted.");
            window.location.reload();
        } else {
            alert("Registration was NOT deleted.")
        }

    };

    var clearLocal = function () {
        if (localStorage.length === 0) {
            alert("There is no data to clear.")
        } else {
            localStorage.clear();
            alert("All registrations are deleted!");
            window.location.reload();
            return false;
        }



    });


});