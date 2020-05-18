chrome.contextMenus.create({
  'title': 'Search meaning for "%s"',
  'contexts': ['selection'],
  'onclick': (context) => {
    const word = context.selectionText;

    fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "6115c6dff8msh26f737f0b2bb400p137eb2jsn63dd7104ecad"
      }
    })
    .then(data => data.json())
    .then(json => {
      printing(json)
    })
  }
})

function printing(data) {
  let firstWord = data.list[0];
  const newLine = "\r\n";
  let message = `Word : ${firstWord.word}`;

  message += newLine;
  message += newLine;
  message += `Definition: ${firstWord.definition}`;
  message += newLine;
  message += newLine;
  message += `Example: ${firstWord.example}`;
  message += newLine;
  alert(message);
}