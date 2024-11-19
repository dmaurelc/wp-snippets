const API_BASE = 'https://yabewp.instawp.xyz/wp-json/custom/v1';

export interface Snippet {
  ID: number;
  title: string;
  slug: string;
  date: string;
  categorias: string[];
  imagen_destacada: string | null;
  acf_fields: {
    resumen: string;
    descripcion: string;
    codigo: string;
    instrucciones: string;
    galeria: string[];
  };
}

export async function getAllSnippets(): Promise<Snippet[]> {
  try {
    const response = await fetch(`${API_BASE}/snippets`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching snippets:', error);
    return [];
  }
}

export async function getSnippetBySlug(slug: string): Promise<Snippet | undefined> {
  try {
    const snippets = await getAllSnippets();
    return snippets.find((snippet) => snippet.slug === slug);
  } catch (error) {
    console.error('Error fetching snippet by slug:', error);
    return undefined;
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const snippets = await getAllSnippets();
    const categories = new Set(snippets.flatMap((snippet) => snippet.categorias));
    return Array.from(categories).sort();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getSnippetsByCategory(category: string): Promise<Snippet[]> {
  try {
    const snippets = await getAllSnippets();
    return snippets.filter((snippet) => 
      snippet.categorias.some((cat) => 
        cat.toLowerCase() === category.toLowerCase()
      )
    );
  } catch (error) {
    console.error('Error fetching snippets by category:', error);
    return [];
  }
}