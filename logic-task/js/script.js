'use strict'

let complement = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

function getRNK(DNK) { 
  return  DNK.split('')
              .map(element => complement[element])
              .join('');
}

console.log(getRNK('ACGTGGTCTTAA'));
