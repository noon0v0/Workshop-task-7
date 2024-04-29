let particles_sysytem = [];
let particles_nums = 100;
let particle_radius;

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < particles_nums; i++) {
    particle_radius = random(1, 10);
    let x = random(particle_radius, width - particle_radius);
    let y = random(particle_radius, height - particle_radius);
    let v_x = random(-2, 2);
    let v_y = random(-2, 2);
    particles_sysytem.push(new Particle(x, y, v_x, v_y));
  }
}

function draw() {
  background(255);
  
  for (let i = 0; i < particles_sysytem.length; i++) {
    particles_sysytem[i].update();
    particles_sysytem[i].display();
    particles_sysytem[i].check_boundary_collision();
  }
}

class Particle {
  constructor(x, y, v_x, v_y) {
    this.pos = createVector(x, y);
    this.vel = createVector(v_x, v_y);
    this.radius = particle_radius;
  }

  update() {
    this.pos.add(this.vel);
  }

  display() {
    noStroke();
    fill(255, 0, 0, 150);
    ellipse(this.pos.x, this.pos.y, this.radius * 2);
  }

  check_boundary_collision() {
    if (this.pos.x < this.radius || this.pos.x > width - this.radius) {
      this.vel.x *= -1;
    }
    if (this.pos.y < this.radius || this.pos.y > height - this.radius) {
      this.vel.y *= -1;
    }
  }
}
