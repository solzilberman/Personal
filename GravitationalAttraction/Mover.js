function Mover(mass, x, y){
    this.mass = mass
    this.x = x
    this.y = y
    this.location = createVector(x,y)
    this.velocity = createVector(1,0)
    this.acceleration = createVector(0,0)

    this.applyForce = function(force){
        f = p5.Vector.div(force,mass)
        this.acceleration.add(f)
    }

    this.update = function() {
        this.velocity.add(this.acceleration)
        this.location.add(this.velocity)
        this.acceleration.mult(0)
    }

    this.display = function() {
        stroke(0)
        fill(230)
        ellipse(this.location.x, this.location.y, mass * 8, mass * 8)
    }
}