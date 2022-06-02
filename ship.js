import {fps, c, ctx} from './utils'
class Ship {
    constructor (x, y) {
        this.size = 30;
        this.acc = 5;
        this.rotation = 0;
        this.friction = 0.5
        this.alive = true;
        this.cooldown = false;
        this.thrusting = false;
        this.thrusting = {
            x: 0,
            y: 0
        };
        this.projectiles = []
        this.x = x;
        this.y = y;
        this.r = this.shipSize / 2;
        this.a = 0 / 180 * Math.PI;
    };

    renderShip() {
        let path = new Path2D()
        this.moveShip();

        ctx.fillStyle = 'white';
        path.moveTo(
            this.x + this.r * Math.cos(this.a),
            this.y - this.r * Math.sin(this.a)
        );

        path.lineTo(
            this.x - this.r * (Math.cos(this.a) + Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) - Math.cos(this.a))
        );
        
        path.lineTo(
            this.x - this.r * (Math.cos(this.a) - Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) + Math.cos(this.a))
        );

        ctx.fill(path);
    };

    moveShip() {
        //movement based on thrust and angle values
        if (this.thrusting) {
            this.thrust.x += this.acc * Math.cos(this.a) / fps;
            this.thrust.y -= this.acc * Math.sin(this.a) / fps;
        } else {
            this.thrust.x -= this.friction * this.thrust.x / fps;
            this.thrust.y -= this.friction * this.thrust.y / fps;
        };

        this.a += this.rotation;
        this.x += this.thrust.x;
        this.y += this.thrust.y;

        //edge detection
        if (this.x < 0 - this.r) {
            this.x = c.width + this.r;
        } else if (this.x > c.width + this.r) {
            this.x = 0 = this.r;
        };

        if (this.y < 0 - this.r) {
            this.y = c.height + this.r;
        } else if (this.y > c.height + this.r) {
            this.y = 0 - this.r;
        };
    };

    
};
