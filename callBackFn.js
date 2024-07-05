function greet(name) {
  console.log(`Hello ${name}`);
}

function greetKalyan(greetFn) {
  const name = "kalyan";
  greetFn(name);
}

greetKalyan(greet);
