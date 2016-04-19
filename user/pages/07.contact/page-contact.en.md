---
title: Contact
body_classes: page-contact
process:
    markdown: true
    twig: true
formtitle: 'Tell me about yourself'
form:
    name: my-nice-form
    fields:
        -
            name: message
            label: message
            classes: 'ipt ipt--field'
            placeholder: 'Enter your message'
            autofocus: 'on'
            type: textarea
            validate:
                required: true
        -
            name: name
            label: Name
            classes: 'ipt ipt--line'
            placeholder: 'Enter your name'
            type: text
            validate:
                required: true
        -
            name: email
            label: Email
            classes: 'ipt ipt--line'
            placeholder: 'Enter your email address'
            type: email
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Submit
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to: ['{{ config.plugins.email.from }}', '{{ form.value.email }}']
                subject: '[Feedback] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: feedback-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for your feedback!'
        -
            display: thankyou
---

# Contact

<div class="cell cell-in-row cell-67 cell--contactinfo" markdown="1">
##### Pour toute question, n'hésitez pas à me contacter

Par télephone au **+33 6 26 89 24 78**  
  
par E-mail : **[toctocmarseille@gmail.com](mailto:toctocmarseille@gmail.com)**   
  
ou par Skype : **<a href="skype:toctocmarseille?chat">toctocmarseille</a>**

---
###### Pour suivre les actus de toctocMarseille, retrouvez-moi sur…

<a href="https://www.facebook.com/toctocMarseille/?ref=ts&fref=ts" target="_new" class="btn btn-m btn--social btn-facebook"><i class="fa fa-facebook"></i>Facebook</a>
<a href="https://www.instagram.com/toctocmarseille/" target="_new" class="btn btn-m btn--social btn-instagram"><i class="fa fa-instagram"></i>Instagram</a>
<a href="https://twitter.com/toctocmarseille" target="_new" class="btn btn-m  btn--social btn-twitter"><i class="fa fa-twitter"></i>Twitter</a>
</div>

<div class="cell cell-in-row cell-33 cell--contactinfo">
<a class="twitter-timeline" href="https://twitter.com/toctocmarseille" data-tweet-limit="1" data-chrome="nofooter" data-widget-id="722218414232727556">Latest Tweet by @toctocmarseille</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>
