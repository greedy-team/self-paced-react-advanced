const RESTAURANT_URL = "http://localhost:3000/restaurants";

export async function fetchRestaurants() {
    const response = await fetch(`${RESTAURANT_URL}?_=${Date.now()}`, {
        method: "GET",
        headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
        },
    });
    if (!response.ok) throw new Error("GET 실패");
    return response.json();
}

export async function createRestaurant(restaurant) {
    const response = await fetch(RESTAURANT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant),
    });
    if (!response.ok) throw new Error("POST 실패");
    return response.json();
}
