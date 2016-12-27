db.runCommand({
	dropDatabase: 1
});

db.runCommand({
	insert: 'products',
	documents: [{
		"name": "Box1",
		"price": 10,
		"quantity": 1,
		"image": "http://localhost:3000/Box1_$10.png",
		"category": ["stationary", "supplies", "books"]
	}, {
		"name": "Box2",
		"price": 5,
		"quantity": 8,
		"image": "http://localhost:3000/Box2_$5.png",
		"category": ["stationary", "supplies", "books"]
	}, {
		"name": "Clothes1",
		"price": 20,
		"quantity": 12,
		"image": "http://localhost:3000/Clothes1_$20.png",
		"category": ["clothing", "gifts"]
	}, {
		"name": "Clothes2",
		"price": 30,
		"quantity": 2,
		"image": "http://localhost:3000/Clothes2_$30.png",
		"category": ["clothing", "gifts"]
	}, {
		"name": "Jeans",
		"price": 50,
		"quantity": 4,
		"image": "http://localhost:3000/Jeans_$50.png",
		"category": ["clothing", "gifts"]
	}, {
		"name": "Keyboard",
		"price": 20,
		"quantity": 5,
		"image": "http://localhost:3000/Keyboard_$20.png",
		"category": ["tech", "gifts", "supplies"]
	}, {
		"name": "KeyboardCombo",
		"price": 40,
		"quantity": 7,
		"image": "http://localhost:3000/KeyboardCombo_$40.png",
		"category": ["tech", "gifts", "supplies"]
	}, {
		"name": "Mice",
		"price": 20,
		"quantity": 21,
		"image": "http://localhost:3000/Mice_$20.png",
		"category": ["tech", "gifts", "supplies"]
	}, {
		"name": "PC1",
		"price": 350,
		"quantity": 9,
		"image": "http://localhost:3000/PC1_$350.png",
		"category": ["tech", "gifts"]
	}, {
		"name": "PC2",
		"price": 400,
		"quantity": 6,
		"image": "http://localhost:3000/PC2_$400.png",
		"category": ["tech", "gifts"]
	}, {
		"name": "PC3",
		"price": 300,
		"quantity": 11,
		"image": "http://localhost:3000/PC3_$300.png",
		"category": ["tech", "gifts"]
	}, {
		"name": "Tent",
		"price": 100,
		"quantity": 20,
		"image": "http://localhost:3000/Tent_$100.png",
		"category": ["supplies", "gifts"]
	}]
});

db.runCommand({
	insert: 'orders',
	documents: [{
		"_id": 1,
		"cart": "JsonStringForCartObject",
		"total": 117
	}]
});

db.runCommand({
	insert: 'users',
	documents: [{
		"username": "admin",
		"password": "admin"
	}]
});