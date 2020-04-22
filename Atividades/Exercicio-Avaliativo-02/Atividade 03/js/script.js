function recarrega() {

    var p = document.getElementById('lista');
    array1 = new Array ("Item 1", "Item 2", "Item 3");
    
    for( i = 0; i <= array1.length - 1; i++ ) {

        var li = document.createElement('li');
        li.innerHTML = array1[i];
        p.appendChild(li);

    }
  }