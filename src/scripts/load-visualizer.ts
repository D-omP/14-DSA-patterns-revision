// This will be loaded client-side to handle the visualizer mounting
export async function loadVisualizer(container: HTMLElement, algorithm: string) {
  try {
    const module = await import(`../visualizers/${algorithm}.tsx`);
    const Visualizer = module.default;
    
    // Mount the visualizer
    if (Visualizer) {
      const root = document.createElement('div');
      container.appendChild(root);
      React.createElement(Visualizer, {}, null);
    }
  } catch (error) {
    console.error(`Failed to load visualizer for ${algorithm}:`, error);
    container.innerHTML = '<p class="text-gray-500">Visualizer not available for this pattern yet.</p>';
  }
} 