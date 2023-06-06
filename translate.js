// JavaScript code
const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': '3b143502a0mshe887b77a672d0b8p10626cjsnaf8a412d73d3',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
  },
  body: new URLSearchParams({
    q: '',
    target: 'es'
  })
};

const translationForm = document.getElementById('translation-form');
const textInput = document.getElementById('text-input');
const sourceLanguageInput = document.getElementById('source-language');
const targetLanguageInput = document.getElementById('target-language');
const translationResult = document.getElementById('translated-text');

translationForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  options.body.set('q', textInput.value);
  options.body.set('target', targetLanguageInput.value);

  if (sourceLanguageInput.value) {
    options.body.set('source', sourceLanguageInput.value);
  } else {
    delete options.body['source'];
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;
    translationResult.textContent = translatedText;
  } catch (error) {
    console.error(error);
  }
});
