const { JSDOM } = require('jsdom');
const jquery = require('jquery');

describe('submit.js', () => {
  let dom;
  let $;

  beforeEach(() => {
    dom = new JSDOM(`<!doctype html><html><body>
      <textarea id="message"></textarea>
      <span id="characterLeft"></span>
      <button id="btnSubmit"></button>
    </body></html>`, { runScripts: 'dangerously' });
    global.window = dom.window;
    global.document = dom.window.document;
    $ = jquery(dom.window);
    global.$ = $;
    // load the script under test
    require('../js/submit.js');
  });

  afterEach(() => {
    dom.window.close();
    delete require.cache[require.resolve('../js/submit.js')];
    delete global.window;
    delete global.document;
    delete global.$;
  });

  test('disables submit button at 140 characters', () => {
    const message = $('#message');
    message.val('a'.repeat(140));
    message.trigger('keydown');
    expect($('#btnSubmit').hasClass('disabled')).toBe(true);
    expect($('#characterLeft').text()).toBe('You have reached the limit');
  });
});
