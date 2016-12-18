// Return True if this object has any item (key) in it
function isEmpty(obj) {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}
	return true;
};

export {
	isEmpty
};