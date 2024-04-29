# Workshop 7: Simulation

## URL:



## Tasks:

- Build a simulation of a real or imagined entity or environment.
- Experiment with random walks and/or particle systems in your sketch.

## Note:

- **Particle System Initialization**: It initializes a particle system represented by an array `particles_system`. The number of particles in the system is defined by the variable `particles_nums`, which is set to 100.
- **Particle Initialization**: In the `setup()` function, it creates and initializes individual particles using a loop. Each particle is given a random position within the canvas boundaries, a random velocity, and a random radius between 1 and 10.
- **Particle Movement and Display**: In the `draw()` function, it updates and displays each particle in the particle system. The `update()` method is called to update the particle's position based on its velocity vector, and the `display()` method is called to draw the particle as a colored ellipse on the canvas.
- **Boundary Collision Detection**: The `check_boundary_collision()` method is implemented within the `Particle` class to detect collisions between particles and the canvas boundaries. If a particle reaches the edge of the canvas, its velocity is reversed to simulate a bounce effect.

## Project:

The seventh task of the workshop implemented a particle system, where each particle is initially assigned random positions, velocities, and radius sizes. As the particles move, they bounce off the boundaries if they come into contact, continuing their motion.