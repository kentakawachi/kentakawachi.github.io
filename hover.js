const syabon = document.getElementById('syabon');
syabon.addEventListener('mouseover', function() {
  syabon.src = 'syabondaman_hover.png';
});
syabon.addEventListener('mouseout', function() {
  syabon.src = 'syabondaman.png';
});

const toaster = document.getElementById('toaster');
toaster.addEventListener('mouseover', function() {
  toaster.src = 'toasterman_hover.png';
});
toaster.addEventListener('mouseout', function() {
  toaster.src = 'toasterman.png';
});
