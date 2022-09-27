const dbModule = require('./db-module');
const dm = require('./db-module');
/* dm.getList(rows =>{
    for(let row of rows){
        console.log(row.id,row.player,row.backNo,row.position);

    }
}); */

/* dm.insertPlayer(['테스트',100,'포지션'],()=>{
    dm.getList(rows =>{
        for(let row of rows){
            console.log(row.id,row.player,row.backNo,row.position);
    
        }
    });
}); */

/* dm.getplayer(1,rows=>{
    for(let row of rows){
        console.log(row.id,row.player,row.backNo,row.position);
    }
}); */
/* 
dm.updatePlayer(['테스트2',999,'포지션2',16],()=>{
    dm.getplayer(16,rows=>{
        for(let row of rows){
            console.log(row.id,row.player,row.backNo,row.position);
        }
    });
}); */
/* 
dm.deletePlayer(16,()=>{
    dm.getList(rows =>{
        for(let row of rows){
            console.log(row.id,row.player,row.backNo,row.position);
    
        }
    });
}) */


/* dm.getPlayersByPosition('내야수',rows=>{
        for(let row of rows){
            console.log(row.id,row.player,row.backNo,row.position);
        }   
}); */

/* dm.getPlayersOderByBackNo(0, rows=>{
    for(let row of rows){
        console.log(row.id,row.player,row.backNo,row.position);
    }   
}) */

dm.getPlayersByOder('id',0,rows=>{
    for(let row of rows){
        console.log(row.id,row.player,row.backNo,row.position);
    } 
})