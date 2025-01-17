export async function load(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Parsed data:', data);
        return data;
    } catch (error) {
        console.error('Error loading the data:', error);
    }
}