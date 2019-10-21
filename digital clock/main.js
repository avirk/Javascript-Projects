var btn = document.getElementById('formatChanger');

function toggle() {
  btn.innerHTML !== '12 Hour'
    ? (btn.innerHTML = '12 Hour')
    : (btn.innerHTML = '24 Hour');
  twelveHourTimeFormat();
}

function twelveHourTimeFormat() {
  var d = new Date();
  var date = ('0' + d.getDate()).slice(-2);
  var year = d.getFullYear();
  day.textContent = d.toLocaleDateString(undefined, { weekday: 'long' });
  document.getElementById('date').innerHTML = date;
  month.textContent = d.toLocaleDateString(undefined, { month: 'short' });
  document.getElementById('year').innerHTML = year;
  if (day.textContent != 'Sunday') {
    //day is the ID we are accessing
    document.getElementById('day').style.color = '#C0EA89';
  } else {
    document.getElementById('day').style.color = 'rgb(255, 127, 127)';
  }
  var time = d.toLocaleString(undefined, {
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric',
    hour12: btn.innerHTML != '12 Hour'
  });

  document.getElementById('time').innerHTML = time;
}
twelveHourTimeFormat();
setInterval(twelveHourTimeFormat, 1000);
