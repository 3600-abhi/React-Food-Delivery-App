function filterRestaurant(searchText, restaurantList) {
    return restaurantList.filter(restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
}

export default filterRestaurant;