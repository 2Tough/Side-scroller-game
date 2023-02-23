window.addEventListener('load', ()=>{
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800
    canvas.height = 720

    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', e => {
                if (e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' || 
                    e.key === 'ArrowRight' && this.keys.indexOf(e.key) === -1) {
                    this.keys.push(e.key);
                }
                
            })
            window.addEventListener('keyup', e => {
                if (e.key === 'ArrowDown' ||
                    e.key === 'ArrowUp' ||
                    e.key === 'ArrowLeft' || 
                    e.key === 'ArrowRight' && this.keys.indexOf(e.key) === 1) {
                    this.keys.spice(e.key, this.keys);
                    }
            })
        }

    }

    class Player {
        constructor(gameWidth, gameHeight) {
            this.gameWidth = gameWidth;
            this.gameHeight = gameHeight;
            this.width = 200;
            this.height = 200;
            this.x = 0;
            this.y = 0;
        }
        draw(context) {
            context.fillRect(this.x, this.y, this.width, this.height)
        }
    }

    class Background {

    }

    class Enemy {

    }

    function handleEnemies() {

    }

    function displayStatusText() {

    }

    const input = new InputHandler();

    function animate() {

    }

})