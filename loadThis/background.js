chrome.contextMenus.create({
  'title': 'Search meaning for "%s"',
  'contexts': ['selection'],
  'onclick': (context) => {
    const word = context.selectionText;
    const newLine = "\r\n";

    fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "6115c6dff8msh26f737f0b2bb400p137eb2jsn63dd7104ecad"
      }
    })
    .then(data => data.json())
    .then(json => {
      console.log(json)
    })
  }
})

function printing(data) {
}