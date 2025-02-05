cities = [
	{
		"name": "New York City",
		"country": "United States",
		"population": 20.14,
		"area": 1223.59
	},
	{
		"name": "Tokyo",
		"country": "Japan",
		"population": 37.47,
		"area": 2194.07,
	},
	{
		"name": "Los Angeles",
		"country": "United States",
		"population": 13.2,
		"area": 1299.01,
	},
	{
		"name": "Madrid",
		"country": "Spain",
		"population": 6.79,
		"area": 604.31,
	},
	{
		"name": "Osaka",
		"country": "Japan",
		"population": 19.3,
		"area": 5107.0,
	},
	{
		"name": "London",
		"country": "United Kingdom",
		"population": 14.26,
		"area": 8382.0,
	}
]

print(type(cities[0]))
print(cities[0]['name'])

citiesSort = sorted(cities, key=lambda city:-city['population'])
print(citiesSort)
citiesSort = sorted(cities, key=lambda city:(-city['population'], city["area"]))
print(citiesSort)