let args = process.argv.slice(2);

for (let value of args) {
  if (!value || value < 0 || isNaN(value)) {
    return;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (value * 1000));
  }

   
}

    
   






