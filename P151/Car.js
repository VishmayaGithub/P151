AFRAME.registerComponent("car", {
    schema: {
        pos_x: { type: 'number', default: '0' },
        pos_y: { type: 'number', default: '0.2' },
        pos_z: { type: 'number', default: '-3.5' },
        rot_y: { type: 'number', default: '-90' }
    },
    init: function () {
        this.el.setAttribute("position", {
            x: this.data.pos_x, y: this.data.pos_y, z: this.data.pos_z,
        })
        
    }

})