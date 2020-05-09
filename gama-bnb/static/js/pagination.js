  function createNode(element) {
      return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  const ul = document.getElementById('authors');
  const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    let authors = data;
    console.log(authors)
    return authors.map(function(author) {
      let li = createNode('li'),
          img = createNode('img'),
          span = createNode('span');
      img.src = author.photo;
      span.innerHTML = `${author.name} ${author.photo}`;
      append(li, img);
      append(li, span);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });   
