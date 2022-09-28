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
    getGirlGroupList:function(callback){
        const conn = this.getConnection();
        const sql = `SELECT gid, name, DATE_FORMAT(debut, '%Y-%m-%d')AS debutDate, song.title FROM girl_group 
        JOIN song ON girl_group.hit_song_id = song.sid;`
        conn.query(sql,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows);
        })
        conn.end();
    },
    getSongList:function(callback){
        const conn = this.getConnection();
        const sql = `SELECT song.sid,song.title,song.lyrics,girl_group.name FROM song 
                    JOIN girl_group ON girl_group.hit_song_id=sid;`
        conn.query(sql,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows);
        })
        conn.end();
    },
    serchGirlGroup:function(gid,callback){
        const conn = this.getConnection();
        const sql = `SELECT gid,name,DATE_FORMAT(debut, '%Y-%m-%d')
                    AS debutDate,song.title FROM girl_group JOIN song 
                    ON girl_group.hit_song_id=sid WHERE gid=?;`
        conn.query(sql,gid,(err,rows,fields)=>{
            if (err)
                throw err;
            callback(rows);
                    
        });
        conn.end();
    },
    serchSong:function(sid,callback){
        const conn = this.getConnection();
        const sql = `SELECT sid,title,lyrics,girl_group.name FROM song JOIN girl_group 
                    ON girl_group.hit_song_id=sid WHERE sid=?;`
        conn.query(sql,sid,(err,rows,fields)=>{
            if (err)
                throw err;
            callback(rows);
                    
        });
        conn.end();
    },
    joinGirlGroup:function(params,callback){
        const conn = this.getConnection();
        const sql = `SELECT gid,name,DATE_FORMAT(debut, '%Y-%m-%d')
        AS debutDate,hit_song_id FROM girl_group;`
        conn.query(sql,params,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows);
        })
        conn.end();
    },
    joinGirlGroups:function(callback){
        const conn = this.getConnection();
        const sql = `SELECT gid,name,DATE_FORMAT(debut, '%Y-%m-%d')
        AS debutDate,hit_song_id FROM girl_group;`
        conn.query(sql,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows);
        })
        conn.end();
    },
    insertGirlGroup:function(params,callback){
        const conn = this.getConnection();
        const sql = `INSERT INTO girl_group (gid,name,debut,hit_song_id)
        VALUES (?, ?, ?, ?);`; 
        conn.query(sql,params,(err,fields)=>{
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    updatedGirlGroup:function(params,callback){
        const conn = this.getConnection(); 
        const sql = `UPDATE girl_group SET NAME= ? , debut=?, hit_song_id=? WHERE gid=?;`;
        conn.query(sql,params,(err,fields)=>{
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    deleteGirlGroup:function(gid,callback){
        const conn = this.getConnection();
        const sql = `DELETE FROM girl_group WHERE gid=?;`; 
        conn.query(sql,gid,(err,fields)=>{
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    joinSonglist:function(params,callback){
        const conn = this.getConnection();
        const sql = `SELECT * FROM song;`
        conn.query(sql,params,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows);
        })
        conn.end();
    },
    joinSonglists:function(callback){
        const conn = this.getConnection();
        const sql = `SELECT * FROM song;`
        conn.query(sql,(err,rows,fields)=>{
            if(err)
                throw err;
            callback(rows);
        })
        conn.end();
    },
    insertSongList:function(params,callback){
        const conn = this.getConnection();
        const sql = `INSERT INTO song (sid,title,lyrics)
        VALUES (?, ?, ?);`; 
        conn.query(sql,params,(err,fields)=>{
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    updatedSongList:function(params,callback){
        const conn = this.getConnection(); 
        const sql = `UPDATE song SET title= ? , lyrics=? WHERE sid=?;`;
        conn.query(sql,params,(err,fields)=>{
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    deleteSongList:function(sid,callback){
        const conn = this.getConnection();
        const sql = `DELETE FROM song WHERE sid=?;`; 
        conn.query(sql,sid,(err,fields)=>{
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }
}