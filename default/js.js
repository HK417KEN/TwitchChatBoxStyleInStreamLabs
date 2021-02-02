// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for chat widget
	// this will fire only once when the widget loads
    sendMessage();
});

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
    removeInvisibleMessage();
});

let getTime = function () {
    let date = new Date()
    return 'Loaded at:</br>'
      + toDayString(date.getDay()) + ' '
      + toMonthString(date.getMonth()) + ' '
      + date.getDate() + ' '
      + timeZeroPadding(date.getHours()) + ':' + timeZeroPadding(date.getMinutes())
      + ' GMT '
      + getGMToffsetString(date);
}

let sendMessage = function (msg) {
    let defaultMessage = getTime();

    let newMessage = '<div class="chat-bigbox" data-from="HK417KEN" data-id="">';
        newMessage += '<div class="chat-box">';
        newMessage += '<span class="meta" style="color: rgb(30, 144, 255);">';
        newMessage += '<span class="badges">';
        newMessage += '<img src="https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/1" class="badge broadcaster-icon"></span>';
        newMessage += '<span class="name">HK417KEN</span></span><span class="message">';
        newMessage += msg ? msg : defaultMessage;
        newMessage += '</span></div></div>';
    document.getElementById('log').innerHTML += newMessage;
}

// optimize performance
let removeInvisibleMessage = function () {
    let chatBigBoxFirst = document.getElementsByClassName('chat-bigbox').item(0);
    if (chatBigBoxFirst.getBoundingClientRect().top < -200) {
        chatBigBoxFirst.remove();
    }
}

let toDayString = function (day) {
    switch(day) {
        case 0:
            return 'Sun';
        case 1:
            return 'Mon';
        case 2:
            return 'Thu';
        case 3:
            return 'Web';
        case 4:
            return 'Thu';
        case 5:
            return 'Fri';
        case 6:
            return 'Sat';
    }
}

let toMonthString = function (month) {
    switch(month) {
        case 0:
            return 'Jan';
        case 1:
            return 'Feb';
        case 2:
            return 'Mar';
        case 3:
            return 'Apr';
        case 4:
            return 'May';
        case 5:
            return 'Jun';
        case 6:
            return 'Jul';
        case 7:
            return 'Aug';
        case 8:
            return 'Sep';
        case 9:
            return 'Oct';
        case 10:
            return 'Nov';
        case 11:
            return 'Dec';
    }
}

let getGMToffsetString = function (date) {
    if (!date) {
        date = new Date();
    }
    let gmtHours = -date.getTimezoneOffset()/60;
    let pnString = gmtHours >= 0 ? '+' : '-';
    let hoursString = ':00';
    return pnString + timeZeroPadding(gmtHours) + hoursString;
}

let timeZeroPadding = function (num) {
    return num < 10 ? '0' + num : num;
}
