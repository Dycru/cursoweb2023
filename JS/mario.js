$(document).ready(function() {
    var sounds = new SoundManager();//**
    var level = new Level('world');//world is the id of the corresponding DOM container
    level.setSounds(sounds);//*
    level.load(definedLevels[0]);
    level.start();
    keys.bind();
});

var reflection = {};

(function(){
    var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /b_superb/ : /.*/;

    // The base Class implementation (does nothing)
    this.Class = function(){ };

    // Create a new Class that inherits from this class
    Class.extend = function(prop, ref_name) {
        if(ref_name)
            reflection[ref_name] = Class;

        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
        // Check if we're overwriting an existing function
        prototype[name] = typeof prop[name] == "function" && 
            typeof _super[name] == "function" && fnTest.test(prop[name]) ?
            (function(name, fn) {
                return function() {
                    var tmp = this._super;

                    // Add a new ._super() method that is the same method
                    // but on the super-class
                    this._super = _super[name];

                    // The method only need to be bound temporarily, so we
                    // remove it when we're done executing
                    var ret = fn.apply(this, arguments);        
                    this._super = tmp;

                    return ret;
                };
            })(name, prop[name]) :
            prop[name];
        }

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if ( !initializing && this.init )
                this.init.apply(this, arguments);
        }

        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.prototype.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        return Class;
    };
})();

var Matter = Base.extend({
    init: function(x, y, blocking, level) {
        this.blocking = blocking;
        this.view = $(DIV).addClass(CLS_MATTER).appendTo(level.world);
        this.level = level;
        this._super(x, y);
        this.setSize(32, 32);
        this.addToGrid(level);
    },
    addToGrid: function(level) {
        level.obstacles[this.x / 32][this.level.getGridHeight() - 1 - this.y / 32] = this;
    },
    setImage: function(img, x, y) {
        this.view.css({
            backgroundImage : img ? c2u(img) : 'none',
            backgroundPosition : '-' + (x || 0) + 'px -' + (y || 0) + 'px',
        });
        this._super(img, x, y);
    },
    setPosition: function(x, y) {
        this.view.css({
            left: x,
            bottom: y
        });
        this._super(x, y);
    },
});

var keys = {
    //Method to activate binding
    bind : function() {
        $(document).on('keydown', function(event) {    
            return keys.handler(event, true);
        });
        $(document).on('keyup', function(event) {    
            return keys.handler(event, false);
        });
    },
    //Method to reset the current key states
    reset : function() {
        keys.left = false;
        keys.right = false;
        keys.accelerate = false;
        keys.up = false;
        keys.down = false;
    },
    //Method to delete the binding
    unbind : function() {
        $(document).off('keydown');
        $(document).off('keyup');
    },
    //Actual handler - is called indirectly with some status
    handler : function(event, status) {
        switch(event.keyCode) {
            case 57392://CTRL on MAC
            case 17://CTRL
            case 65://A
                keys.accelerate = status;
                break;
            case 40://DOWN ARROW
                keys.down = status;
                break;
            case 39://RIGHT ARROW
                keys.right = status;
                break;
            case 37://LEFT ARROW
                keys.left = status;            
                break;
            case 38://UP ARROW
                keys.up = status;
                break;
            default:
                return true;
        }

        event.preventDefault();
        return false;
    },
    //Here we have our interesting keys
    accelerate : false,
    left : false,
    up : false,
    right : false,
    down : false,
};
var Base = Class.extend({
    init: function(x, y) {
        this.setPosition(x || 0, y || 0);
        this.clearFrames();
    },
    /* more basic methods like setPosition(), ... */
    setupFrames: function(fps, frames, rewind, id) {
        if(id) {
            if(this.frameID === id)
                return true;

            this.frameID = id;
        }

        this.frameCount = 0;
        this.currentFrame = 0;
        this.frameTick = frames ? (1000 / fps / constants.interval) : 0;
        this.frames = frames;
        this.rewindFrames = rewind;
        return false;
    },
    clearFrames: function() {
        this.frameID = undefined;
        this.frames = 0;
        this.currentFrame = 0;
        this.frameTick = 0;
    },
    playFrame: function() {
        if(this.frameTick && this.view) {
            this.frameCount++;

            if(this.frameCount >= this.frameTick) {            
                this.frameCount = 0;

                if(this.currentFrame === this.frames)
                    this.currentFrame = 0;

                var $el = this.view;
                $el.css('background-position', '-' + (this.image.x + this.width * 
                  ((this.rewindFrames ? this.frames - 1 : 0) - this.currentFrame)) + 
                  'px -' + this.image.y + 'px');
                this.currentFrame++;
            }
        }
    },
});
var Mario = Hero.extend({
    /*...*/
    setVelocity: function(vx, vy) {
        if(this.crouching) {
            vx = 0;
            this.crouch();
        } else {
            if(this.onground && vx > 0)
                this.walkRight();
            else if(this.onground && vx < 0)
                this.walkLeft();
            else
                this.stand();
        }

        this._super(vx, vy);
    },
    walkRight: function() {
        if(this.state === size_states.small) {
            if(!this.setupFrames(8, 2, true, 'WalkRightSmall'))
                this.setImage(images.sprites, 0, 0);
        } else {
            if(!this.setupFrames(9, 2, true, 'WalkRightBig'))
                this.setImage(images.sprites, 0, 243);
        }
    },
    walkLeft: function() {
        if(this.state === size_states.small) {
            if(!this.setupFrames(8, 2, false, 'WalkLeftSmall'))
                this.setImage(images.sprites, 81, 81);
        } else {
            if(!this.setupFrames(9, 2, false, 'WalkLeftBig'))
                this.setImage(images.sprites, 81, 162);
        }
    },
    /* ... */
});
var Item = Matter.extend({
    /* Constructor and methods */
    bounce: function() {
        this.isBouncing = true;

        for(var i = this.level.figures.length; i--; ) {
            var fig = this.level.figures[i];

            if(fig.y === this.y + 32 && fig.x >= this.x - 16 && fig.x <= this.x + 16) {
                if(fig instanceof ItemFigure)
                    fig.setVelocity(fig.vx, constants.bounce);
                else if(fig instanceof Enemy)
                    fig.die();
            }
        }
    },
})
var LeftBush = Decoration.extend({
    init: function(x, y, level) {
        this._super(x, y, level);
        this.setImage(images.objects, 178, 928);
    },
}, 'bush_left');

var Ghost = Enemy.extend(
    init:function(x, y, level) {
        this._super(x, y, level);
        this.setSize(32, 32);
    },
    die:function() {
        //Do nothing here!
    },
});

var Ghost = Enemy.extend({
	init: function(x, y, level) {
		this._super(x, y, level);
		this.setSize(33, 32);
		this.setMode(ghost_mode.sleep, directions.left);
	},
	die: function() {
                //Do nothing here!
        },
	setMode: function(mode, direction) {
		if(this.mode !== mode || this.direction !== direction) {
			this.mode = mode;
			this.direction = direction;
			this.setImage(images.ghost, 33 * (mode + direction - 1), 0);
		}
	},
	getMario: function() {
		for(var i = this.level.figures.length; i--; )
			if(this.level.figures[i] instanceof Mario)
				return this.level.figures[i];
	},
	move: function() {
		var mario = this.getMario();

		if(mario && Math.abs(this.x - mario.x) <= 800) {
			var dx = Math.sign(mario.x - this.x);
			var dy = Math.sign(mario.y - this.y) * 0.5;
			var direction = dx ? dx + 2 : this.direction;
			var mode = mario.direction === direction ? ghost_mode.awake : ghost_mode.sleep;
			this.setMode(mode, direction);

			if(mode)		
				this.setPosition(this.x + dx, this.y + dy);
		} else 
			this.setMode(ghost_mode.sleep, this.direction);
	},
	hit: function(opponent) {			
		if(opponent instanceof Mario) {
			opponent.hurt(this);
		}
	},