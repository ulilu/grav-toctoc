---
title: Contact
body_classes: page-contact
formtitle: 'Parlez-moi de vous…'
form:
    name: contact-form
    fields:
        -
            name: message
            label: Message
            classes: 'ipt ipt--field'
            placeholder: 'Votre message'
            autofocus: 'on'
            type: textarea
            validate:
                required: true
        -
            name: name
            label: Name
            classes: 'ipt ipt--line'
            placeholder: 'Votre nom'
            type: text
            validate:
                required: true
        -
            name: email
            label: 'E-mail address'
            classes: 'ipt ipt--line'
            placeholder: 'Votre adresse e-mail'
            type: email
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Envoyer
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                from_name: '{{ config.plugins.email.from_name }}'
                to: ['{{ config.plugins.email.from }}', '{{ form.value.email }}']
                to_name: '{{ config.plugins.email.to_name }}'
                subject: '[Loulouuuu, c´est moi, Derrick - il y a un nouveau message pour toi...] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
                content_type: text/html
        -
            save:
                fileprefix: message-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Merci pour votre message!'
        -
            display: /thank-you-for-contact
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
<a class="twitter-timeline" href="https://twitter.com/toctocmarseille" data-chrome="nofooter noborders" data-tweet-limit="1" data-widget-id="722218414232727556">Latest Tweet by @toctocmarseille</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
</div>
