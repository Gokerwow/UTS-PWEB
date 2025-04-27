window.addEventListener('load', function() {
    setTimeout(function() {
      const loader = document.getElementById('loading');
      loader.style.opacity = 0;
      setTimeout(function() {
        loader.style.display = 'none';
        document.getElementById('content').style.display = 'flex';
      }, 500);
    }, 2000); // 2 detik delay sebelum masuk
  });