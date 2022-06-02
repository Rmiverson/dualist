// const SHIP_SIZE = 30
// const SHIP_ACC = 5
// const R_SPEED = 420 //nice

class Ship {
    constructor (shipSize, shipAcc, RSpeed, x, y) {
        this.shipSize = shipSize;
        this.shipAcc = shipAcc;
        this.RSpeed = RSpeed;
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
        let c = document.getElementById('gamescreen');
        let ctx = c.getContext('2d');
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
        
        ctx.fill(path)
    };

    moveShip() {

    };
};
