import { BenchmarkElement } from './components/benchmark-element.js';

// Register custom element
customElements.define('benchmark-element', BenchmarkElement);

// Get DOM elements
const runButton = document.getElementById('runBenchmark');
const root = document.getElementById('root');

// Run benchmark when button is clicked
runButton.addEventListener('click', () => {
  // Clear previous results
  const results = document.getElementById('results');
  results.textContent = 'Running benchmark...';
  
  // Create and mount the benchmark element
  root.innerHTML = '<benchmark-element></benchmark-element>';
});