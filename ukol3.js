let jmeno = prompt ('Jak se jmenujete?');
let vek = Number (prompt ('Kolik je vám let?'));


if(vek < 18) {
  console.log('Vaše jméno je '+jmeno+',je vám '+vek+' let a musíte si počkat ještě '+(18-vek)+' roky než budete moci řídit auto.') }
  else {
    console.log('Vaše jméno je '+jmeno+',je vám '+vek+' let a můžete řídit auto.')
  }


