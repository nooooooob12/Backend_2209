const mysql = require('mysql');
const config = require('./mysql.json');

module.exports= {
    getConnection: function(){
        const conn = mysql.createConnection(config);
        conn.connect(err=>{
            if(err){
                console.log('mysql connecting err');
                console.log(err);
            }
        });
        return conn;
    },
    getList: function(callback){
        const conn = this.getConnection();
        const sql = `SELECT * FROM tigers WHERE isDeleted=0;`;
        conn.query(sql,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows);
        })
        conn.end();
    },
    insertPlayer:function(params,callback){
        const conn = this.getConnection();
        const sql = `INSERT INTO tigers (player, backNo, POSITION)
        VALUES (?, ?, ?);`;
        conn.query(sql,params,(err,fields)=>{
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    getplayer:function(params,callback){
        const conn = this.getConnection();
        const sql = `SELECT * FROM tigers WHERE id=? and isDeleted=0;`;
        conn.query(sql,params,(err,rows,fields)=>{
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },
    updatePlayer:function(params,callback){
        const conn = this.getConnection();
        const sql = `UPDATE tigers SET player=?, backNo=?, position=?
        WHERE id=?;`;
        conn.query(sql,params,(err,fields)=>{
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    deletePlayer:function(id,callback){
        const conn = this.getConnection();
        const sql = `UPDATE tigers set isDeleted=1 WHERE id=?;`; 
        conn.query(sql,id,(err,fields)=>{
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    getPlayersByPosition:function(params,callback){
        // 1. 파라메터가 있나 없나?
        // 2. 콜백 파라메터 ??
        const conn = this.getConnection();
        const sql = `SELECT * FROM tigers WHERE position=? `;
        conn.query(sql,params,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows);
        });
    },
    getPlayersOderByBackNo:function(order,callback) {
        //ASC = 0 DESC = 1
        const conn = this.getConnection();
        let sql = `SELECT * FROM tigers WHERE isDeleted=0 ORDER BY backNo `;
        sql += (order == 1) ? 'DESC;' : ';';
        conn.query(sql,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows); 
        });
        conn.end()
    },
    getPlayersByOder:function(fields,order,callback){
        const conn = this.getConnection();
        let sql = `SELECT * FROM tigers WHERE isDeleted=0 
        ORDER BY ${fields} `;
        sql+=(order==1) ? 'DESC;' : ';';
        conn.query(sql,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows); 
        });
        conn.end();
    }
}