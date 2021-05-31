function RSExp(){
 
    this.equate = function(xp){
        return Math.floor(xp + 300 * Math.pow(2, xp / 7));
    };
 
    this.level_to_xp = function(level){
        var xp = 0;
 
        for (var i = 1; i < level; i++)
            xp += this.equate(i);
 
        return Math.floor(xp / 4);
    };
 
    this.xp_to_level = function(xp){
        var level = 1;
 
        while (this.level_to_xp(level + 1) < xp + 1)
            level++;
 
        return level;
    };
 
}
var rs = new RSExp();

console.log(rs.xp_to_level(12905720));
console.log(rs.xp_to_level(0));
console.log(rs.xp_to_level(6500000));
console.log(rs.xp_to_level(2108));
console.log(rs.xp_to_level(83));
console.log(rs.xp_to_level(82));
console.log(rs.xp_to_level(184040));
console.log(rs.xp_to_level(13034430));