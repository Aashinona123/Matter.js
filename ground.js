class Ground {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.ground = Bodies.rectangle(x, y, w, h, options)
        World.add(world, this.ground);
        this.w = w
        this.h = h
    }

    display() {
        var p1 = this.ground.position
        fill("brown")
        stroke("white")
        strokeWeight(2)
        rectMode(CENTER)
        rect(p1.x, p1.y, this.w, this.h)
    }
}