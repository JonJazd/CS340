function deleteChar(id){
    $.ajax({
        url: '/viewChar/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function deleteGrp(id){
    $.ajax({
        url: '/viewGrp/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function deletePow(id){
    $.ajax({
        url: '/viewPow/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function deleteLoc(id){
    $.ajax({
        url: '/viewLoc/' + id,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
};

function deleteRival(id1,id2){
    $.ajax({
        url: '/viewRivals/' + id1 + '/' + id2,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
}

function deleteGrpChar(pepid,grpid){
    $.ajax({
        url: '/viewGrp/Char/' + pepid + '/' + grpid,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
}

function deletePowChar(pepid,powid){
    $.ajax({
        url: '/viewPow/Char' + "/" + pepid + '/' + powid,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
}