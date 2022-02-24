"use strict"
var user = {
	name: "Yegor",
    age: 19,
    gender: "male",
    city: "Dnipro",
    id: "937502",
    phone: "+380965043013",
    email: "yegorgrunsky@gmail.com",
	render: function () {
		var html = ""
		var data = document.querySelector("#user-block")
		for (var i in this) {
			if (typeof this[i] === "function")
            continue
			html += `<p>${i}: ${this[i]}</p>`  
		}
		data.innerHTML = html
        return html
	}
}
user.render()
