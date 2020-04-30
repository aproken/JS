'use strict'

function DomElement(selector, options) {
  this.selector = selector;
  options = options || {};
  this.height = options.height;
  this.width = options.width;
  this.bg = options.bg;
  this.fontSize = options.fontSize;
}

DomElement.prototype.render = function() {
  if(this.selector[0] === '.') {
    let div = document.createElement('div');

    div.className = this.selector.slice(1);

    div.style.cssText = `height: ${this.height};
                   width: ${this.width}; 
                   background-color:  ${this.bg}; 
                   font-size: ${this.fontSize};`
    div.innerHTML = 'Привет, этот элемент "div"!';
    document.body.append(div);
  }   
  else if (this.selector[0] === '#') {
    let p = document.createElement('p');
    
    p.id = this.selector.slice(1);
    p.style.cssText = `height: ${this.height};
                 width: ${this.width}; 
                 background-color:  ${this.bg}; 
                 font-size: ${this.fontSize};`
    p.innerHTML = 'Привет, этот элемент "p"!'
    document.body.append(p);
  }

}

let element1 = new DomElement('.test-class', {height: '17px', width: '100%', bg: '#b3ffda', fontSize: '14px'});
element1.render();
let element2 = new DomElement('#test-id', {height: '25px', width: '100%', bg: '#ffe4b3', fontSize: '8px'});
element2.render();

console.log('.test-class', document.querySelector('.test-class'));
console.log('#test-id', document.querySelector('#test-id'));
