import { LitElement, html } from 'lit';

const generateLargeHTML = () => {
  let result = '<div class="container">';
  for (let i = 0; i < 1000; i++) {
    result += `
      <div class="item">
        <h2>Item ${i}</h2>
        <p>This is a test paragraph with some content.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    `;
  }
  result += '</div>';
  return result;
};

export class BenchmarkElement extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.runBenchmark();
  }

  async runBenchmark() {
    const startTime = performance.now();

    // Trigger 1000 re-renders
    for (let i = 0; i < 1000; i++) {
      this.requestUpdate();
      await this.updateComplete;
    }

    const totalTime = performance.now() - startTime;

    // Show results
    const results = document.getElementById('results');
    results.textContent = `Time taken for 1000 Lit re-renders: ${totalTime.toFixed(2)}ms`;
  }

  render() {
    console.log('rendering');
    return html([generateLargeHTML()]);
  }
}
