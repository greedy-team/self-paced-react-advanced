export async function fetchRestaurants() {
    const response = await fetch("http://localhost:3000/restaurants");
    if (!response.ok) throw new Error("GET 실패");
    return response.json();
}

export async function createRestaurant(restaurant) {
    const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurant),
    });
    if (!response.ok) throw new Error("POST 실패");
    return response.json();
}
