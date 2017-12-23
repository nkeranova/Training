const a = {
    x: 5,
    calculate: function (d) {
        return d * (this.x + this.y)
    }
}

const b = {
    y: 10,
    __proto__: a
}

const c = {
    y: 20,
    __proto__: a
}

console.log(b.calculate(30))
console.log(c.calculate(40))
