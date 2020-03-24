function Attractor(mass) {
    this.mass = mass
    this.location = createVector(width/2, height/2)
    G = 1

    this.display = function() {
        fill('yellow')
        ellipse(this.location.x, this.location.y, this.mass * 2, this.mass * 2)
    }

    this.attract = function(mover) {
        force = p5.Vector.sub(this.location, mover.location)
        d = force.mag()
        d = constrain(d,5,25)
        force.normalize()

        //magnitude
        strength = (this.G * this.mass * mover.mass) / (d * d)
        force.setMag(strength)
        return force;
    }
}