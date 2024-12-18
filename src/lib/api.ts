const API_BASE = "https://wp-snippets.thisistheweb.cl/wp-json/custom/v1";

export interface Snippet {
  ID: number;
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt: string;
  categorias: string[];
  acf_fields: {
    codigos: Array<{
      tipo_de_codigo: string;
      codigo: string;
    }>;
    instrucciones: string;
    autor: string;
  };
}

function fetchWithTimeout(url: string, timeout = 5000): Promise<Response> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error("Request timed out")),
      timeout
    );
    fetch(url)
      .then((response) => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

export async function getAllSnippets(): Promise<Snippet[]> {
  try {
    const response = await fetchWithTimeout(`${API_BASE}/snippets`, 5000);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching snippets:", error);
    return [];
  }
}

export async function getSnippetBySlug(
  slug: string
): Promise<Snippet | undefined> {
  try {
    const snippets = await getAllSnippets();
    return snippets.find((snippet) => snippet.slug === slug);
  } catch (error) {
    console.error("Error fetching snippet by slug:", error);
    return undefined;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const snippets = await getAllSnippets();
    const categories = new Set(
      snippets.flatMap((snippet) => snippet.categorias)
    );
    return Array.from(categories).sort();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function getSnippetsByCategory(
  category: string
): Promise<Snippet[]> {
  try {
    const snippets = await getAllSnippets();
    return snippets.filter((snippet) =>
      snippet.categorias.some(
        (cat) => cat.toLowerCase() === category.toLowerCase()
      )
    );
  } catch (error) {
    console.error("Error fetching snippets by category:", error);
    return [];
  }
}
