'use strict';

var mensajeValidarMail = "No se admiten correos con dominio hotmail.com, gmail.com, outlook.com o yahoo.com.";

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    let listNav = document.getElementById('navbar-collapse-1');
    listNav.classList.remove('pull-right');
}

function handleSubmitMail (event) {
    event.preventDefault();
    let email = document.getElementById('email');
    console.log("email",email);
    if (/@hotmail.com\s*$/.test(email.value.toLowerCase()) || /@gmail.com\s*$/.test(email.value.toLowerCase()) || /@outlook.com\s*$/.test(email.value.toLowerCase()) || /@yahoo.com\s*$/.test(email.value.toLowerCase())) {
        let alertError = document.getElementById('mail_fail_email');
        alertError.style.display = "block";
        alertError.innerHTML = mensajeValidarMail;
        setTimeout(function () { alertError.style.display = "none"; }, 5000);
    } else {
        let data = [
            {
                "name": "email",
                "value": email.value
            },
        ];

        let json_value = {
            "fields": data,
            "skipValidation": false
        };

        $.ajax({


          url: 'https://api.hsforms.com/submissions/v3/integration/submit/6719688/b60a7d63-ceeb-42e3-ae87-c81eefde43af',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(json_value),
            success: function (response) {
                document.getElementById('formEmail').reset();
                let alertSucces = document.getElementById('mail_success_email');
                alertSucces.style.display = "block";
                setTimeout(function () { alertSucces.style.display = "none"; }, 5000);
            },
            error: function (response) {
                let alertError = document.getElementById('mail_fail_email');
                alertError.style.display = "block";
                setTimeout(function () { alertError.style.display = "none"; }, 5000);
            }
        });
    }

}

// Escript para formulario del home

function handleSubmitContact (event) {
  console.log("Te envio formulario");
    event.preventDefault();
    let correo = document.getElementById('email');
    let annualrevenue = document.getElementById('annualrevenue');
    let company = document.getElementById('company');


    if (/@%%%%%.com\s*$/.test(correo.value.toLowerCase()) || /@%%%%%%.com\s*$/.test(correo.value.toLowerCase()) || /@%%%%%%%.com\s*$/.test(correo.value.toLowerCase()) || /@%%%%%%%%%.com\s*$/.test(correo.value.toLowerCase())) {
        let alertError = document.getElementById('mail_fail_contact');
        alertError.style.display = "block";
        alertError.innerHTML = mensajeValidarMail;
        setTimeout(function () { alertError.style.display = "none"; }, 5000);
    } else {
        let data = [

            {
                "name": "email",
                "value": correo.value
            },

            {
                "name": "annualrevenue",
                "value": annualrevenue.value
            },

            {
                "name": "company",
                "value": company.value
            },

        ];

        let json_value = {
            "fields": data,
            "skipValidation": false
        };

        console.log("data", data);

        $.ajax({
          //  https://share.hsforms.com/1puHRmaIhTqGpoK5NWPQh8g400y0
            //url: 'https://api.hsforms.com/submissions/v3/integration/submit/6719688/c1411d6c-5c9f-4c20-a89f-a3d7531f06ba',
            // https://share.hsforms.com/1E5ur7JcfRzy6ioNorO9_-Qco8a3     fa6a2479-c2cc-438f-8ae0-3264d0283024
            // <!--[if lte IE 8]>

//	portalId: "21285867",
//	formId: "139babec-971f-473c-ba8a-8368acef7ff9"

            url: 'https://api.hsforms.com/submissions/v3/integration/submit/21285867/139babec-971f-473c-ba8a-8368acef7ff9',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(json_value),
            success: function (response) {
                document.getElementById('contact_form').reset();
                let alertSucces = document.getElementById('mail_success_contact');
                alertSucces.style.display = "block";
                setTimeout(function () { alertSucces.style.display = "none"; }, 5000);
            },
            error: function (response) {
                let alertError = document.getElementById('mail_fail_contact');
                alertError.style.display = "block";
                setTimeout(function () { alertError.style.display = "none"; }, 5000);
            }
        });
    }
}

// Escript para formulario de LANDING

function handleSubmitContactLanding (event) {
    event.preventDefault();
    let name = document.getElementById('firstname');
    let email = document.getElementById('email_form');
    let phone = document.getElementById('phone');
    let company = document.getElementById('job_function');
    let message = document.getElementById('message');

    if (/@hotmail.com\s*$/.test(email.value.toLowerCase()) || /@gmail.com\s*$/.test(email.value.toLowerCase()) || /@outlook.com\s*$/.test(email.value.toLowerCase()) || /@yahoo.com\s*$/.test(email.value.toLowerCase())) {
        let alertError = document.getElementById('mail_fail_contact');
        alertError.style.display = "block";
        alertError.innerHTML = mensajeValidarMail;
        setTimeout(function () { alertError.style.display = "none"; }, 5000);
    } else {
        let data = [
            {
                "name": "firstname",
                "value": name.value
            },
            {
                "name": "email",
                "value": email.value
            },
            {
                "name": "phone",
                "value": phone.value
            },
            {
                "name": "job_function",
                "value": company.value
            },
            {
                "name": "message",
                "value": message.value
            },
        ];

        let json_value = {
            "fields": data,
            "skipValidation": false
        };

        $.ajax({
            url: 'https://api.hsforms.com/submissions/v3/integration/submit/6719688/e451acb3-f25c-44c3-85e9-2b398f8b9cd2',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(json_value),
            success: function (response) {
                document.getElementById('contact_form').reset();
                let alertSucces = document.getElementById('mail_success_contact');
                alertSucces.style.display = "block";
                setTimeout(function () { alertSucces.style.display = "none"; }, 5000);
            },
            error: function (response) {
                let alertError = document.getElementById('mail_fail_contact');
                alertError.style.display = "block";
                setTimeout(function () { alertError.style.display = "none"; }, 5000);
            }
        });
    }
}


let videoDiv = document.getElementById('video-div');

let videoTag = `<video id="video" autoplay="" loop="" muted="" poster="images/video-poster.jpg" class="VIDEO_HOLDER" playsinline>
<source src="videos/video-1_2.mp4" type="video/mp4"/>
</video>`;

videoDiv.innerHTML = videoTag;
