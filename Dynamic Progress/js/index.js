var progressBars = document.getElementsByClassName('progress-bar');

for (var i = 0; i < progressBars.length; i++) {

  var progressBar = progressBars[i],
  progressPercent = progressBar.getElementsByClassName('progress-bar__data')[0],
  foreground = progressBar.getElementsByClassName('progress-bar__fg')[0],
  newClass = 'progress-bar--' + getColor(progressBar.dataset.size, {'primary':70, 'secondary':40, 'tertiary':0});
  
  foreground.style.width = progressBar.dataset.size + '%';

  foreground.className +=  ' ' + newClass;
  
  progressPercent.innerHTML = progressBar.dataset.size + '%';
};

function getColor(size, threshold) {
  if (size >= threshold['primary']) {
    className = 'primary';
  } else if (size >= threshold['secondary']) {
    className = 'secondary';
  } else if (size >= [threshold['tertiary']]) {
    className = 'tertiary';
  }
  return className;
}