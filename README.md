

musical
a tiny site for finding people who listen to the same things you do.
i built this out of pure boredom.
what it actually does

    make an account (name + password, no email, i don't want your data)
    link spotify / last.fm / discord (read-only, we never post)
    see your taste overlap with other people
    add friends, see what they're playing
    customize your profile color if you care about that

that's it.
tech stuff
it's all static html/css/js. no backend. everything lives in your browser's localstorage which means:

    it's fast
    it's free to host
    your data dies if you clear cookies
    don't use this for anything serious

i'm hosting it on github pages because i'm cheap.
running it locally
bash

git clone https://github.com/yourname/musical.git
cd musical
# open index.html in your browser
# or use python -m http.server 8000 if you want

that's literally it..
the mock usersjordan, etc. passwords match the username if you want to poke around. yes the passwords are pla
there's 8 fake accounts built in so the discover page isn't empty when you first open it. usernames are alex, maya, intext, no i don't care, this is a toy project.
known issues

    localstorage only so your account is tied to your browser
    no real api connections yet (the spotify/last.fm buttons are placeholders)
    mobile is usable but not perfect
    the color themes are just ok

why
i don't know
if you actually use this let me know.
musical © 2026 
