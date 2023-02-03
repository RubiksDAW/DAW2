// //Convertir la siguiente función para que haga uso de las funciones flechas.

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

  let ask = (question,yes,no) => confirm(question)? yes() : no();

  