const dbModule = require('./mysql_모듈_하영진');
const dm = require('./mysql_모듈_하영진');
/** 1번문제 걸그룹 리스트 조회
dm.getGirlGroupList(rows=>{
    for(let row of rows){
        console.log(row.gid,row.name,row.debutDate,row.title);
    }
});
 */


/**  2번문제 송 리스트 조회
dm.getSongList(rows=>{
    for(let row of rows){
        console.log(row.sid,row.title,row.lyrics,row.name);
    }
});
*/

/** 3번문제  걸그룹검색(gid로)
dm.serchGirlGroup(1,rows=>{
    for(let row of rows){
        console.log(row.gid,row.name,row.debutDate,row.title);
    }
});
 */

/**4번문제 송 검색
dm.serchSong(102,rows=>{
    for(let row of rows){
        console.log(row.sid,row.title,row.lyrics,row.name);
    }
}); */

/** 5번 문제 걸그룹 추가
dm.insertGirlGroup([999,'idol','2022-09-26',997],()=>{
    dm.joinGirlGroups(rows=>{
        for(let row of rows){
            console.log(row.gid,row.name,row.debutDate,row.hit_song_id);
        }
    });
});
*/
 
/** 6번문제 걸그룹 수정
dm.updatedGirlGroup(['여자아이들','2020-02-02',125,212],()=>{
    dm.joinGirlGroup(122,rows=>{
        for(let row of rows){
            console.log(row.name,row.debutDate,row.hit_song_id,row.gid);
        }
    });
})*/
/** 7번 문제 걸그룹 삭제 
dm.deleteGirlGroup(997,()=>{
    dm.joinGirlGroups(rows=>{
        for(let row of rows){
            console.log(row.gid,row.name,row.debutDate,row.hit_song_id);
        }
    })
});
*/
/** 8번 송 추가
dm.insertSongList([117,'러브다이브','네가 참 궁금해 그건 너도 마찬가지'],()=>{
    dm.joinSonglists(rows=>{
        for(let row of rows){
            console.log(row.sid,row.title,row.lyrics);
        }
    });
});
*/
/**9번문제 송 수정 
dm.updatedSongList(['마이백','Red five diamonds in my bag',117],()=>{
    dm.joinSonglist(117,rows=>{
        for(let row of rows){
            console.log(row.title,row.lyrics,row.sid);
        }
    });
})
*/
/** 10번문제 송 삭제 
dm.deleteSongList(117,()=>{
    dm.joinSonglists(rows=>{
        for(let row of rows){
            console.log(row.sid,row.title,row.lyrics);
        }
    })
});
*/







