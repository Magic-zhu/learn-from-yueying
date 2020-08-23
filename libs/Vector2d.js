class Vector2d extends Array{
    constructor(x = 1, y=0) {

    }

    copy() {
        return new Vector2D(this.x, this.y);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    rotate(deg) {
        const cos = Math.cos(deg)
        const sin = Math.sin(deg)
        this.x = this.x * cos - this.y * sin
        this.y = this.x * sin + this.y * cos
        return this
    }
}