import assert from 'power-assert';

describe('karma-riot specs', () => {
  it('mounts logs tag', () => {
    var html = document.createElement('logs');
    document.body.appendChild(html);
    riot.mount('logs');

    const expect = document.querySelector('logs > h4').textContent;
    assert(expect === 'Loags');
  });
});